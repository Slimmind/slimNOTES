// TODO: wrap your code a function
//(function (window, document, store) {
//  // your codes
//})(window, document, window.localStorage);

// TODO: create a note object with methods: create, edit, delete

(function (window, document, store) {
  const DOM = {
    windows: document.querySelector('.window'),
    html: document.querySelector('html'),
    itemForm: document.querySelector('#item-form'),
    addItemBtn: document.querySelector('.add-item-btn'),
    itemsList: document.querySelector('.items-list'),
    expandFormToggler: document.querySelectorAll('[name="item-type"]'),
    todoBlock: document.querySelector('.todo-block')
  };

  console.log("DOM: ", DOM.itemForm);
  let itemArr = (store.length > 0) ? JSON.parse(store.getItem('items')) : [];
  const dateData = new Date();
  const month = parseInt(dateData.getMonth() + 1) < 10 ? `0${parseInt(dateData.getMonth()+1)}` : parseInt(dateData.getMonth() + 1);
  const day = dateData.getDate() < 10 ? `0${dateData.getDate()}` : dateData.getDate();
  const dateString = `${dateData.getFullYear()}-${month}-${day}`;
  let itemId = '';
  let itemIndex = 0;

  ((DOM) => {
    [...DOM.expandFormToggler].forEach((input) => {
      input.addEventListener('change', (event) => {
        switch (event.target.value) {
          case 'todo':
            DOM.todoBlock.classList.remove('hidden');
            break;
          default:
            DOM.todoBlock.classList.add('hidden');
            break;
        }
      });
    });
  })(DOM);

  function closeHandler(elem, classToRemove) {
    itemId = '';
    if (DOM.html.classList.contains('no-scroll')) {
      DOM.html.classList.remove('no-scroll');
    }
    if (elem.length > 1) {
      [...elem].forEach((item) => {
        if (item.classList.contains(classToRemove)) {
          item.classList.remove(classToRemove);
        }
      });
    } else {
      elem.classList.remove(classToRemove);
    }
    clearForm();
  }

  function getNoteFromArray(id) {
    return itemArr.find((item) => item.itemId === id);
  }

  function openNoteHandler(event) {
    itemId = event.target.getAttribute("id");
    fillForm(getNoteFromArray(itemId));
  }

  function deleteNoteHandler(event, itemId) {
    event.preventDefault();
    if (!itemId) return;
    itemArr = itemArr.filter((note) => {
      return note.itemId !== itemId;
    });
    document.getElementById(itemId).remove();
    closeHandler(DOM.windows, 'active-window');
  }

  function fillForm(obj) {
    DOM.itemForm.querySelector('[name="item-title"]').value = obj.itemTitle;
    DOM.itemForm.querySelector('[name="item-text"]').value = obj.itemText;
    DOM.itemForm.querySelector('[name="todo-exp-date"]').value = obj.todoExpDate;
    DOM.itemForm.classList.add('active-window');
    const checkboxes = DOM.itemForm.querySelectorAll('[name="todo-status"]');
    [...checkboxes].forEach(checky => {
      checky.checked = checky.value === obj.todoStatus;
    });
  }

  function editItem(editingItemId) {
    const editingItemIndex = itemArr.indexOf(getNoteFromArray(editingItemId));
    const changedData = getData(DOM.itemForm);
    let changedProps = 0;
    for (let prop in changedData) {
      if (changedData[prop] !== itemArr[editingItemIndex][prop]) {
        itemArr[editingItemIndex][prop] = changedData[prop];
        changedProps += 1;
        setStore();
        updateNote(editingItemIndex, itemArr[editingItemIndex]);
        closeHandler(DOM.windows, 'active-window');
        clearForm();
      }
    }
    if (changedProps > 0) {} else {
      closeHandler(DOM.windows, 'active-window');
      clearForm();
    }
  }

  function updateNote(itemIndex, itemData) {
    const note = DOM.itemsList.querySelectorAll('.note')[itemIndex];
    note.querySelector('.item-title').textContent = itemData.itemTitle;
    note.querySelector('.item-text').textContent = itemData.itemText;
    note.querySelector('.todo-date').textContent = itemData.todoExpDate;
    note.setAttribute('class', `note ${itemData.todoStatus} ${checkOverDue(itemData)}`);
    note.setAttribute('data-note-symbol', itemData.itemTitle.charAt(0));
  }

  function clearForm() {
    const forms = document.querySelectorAll('form');
    [...forms].forEach(form => form.reset());
  }

  function generateId() {
    return Math.random().toString(36).substr(2, 9);
  }

  function getCreationDate() {
    return dateString;
  }

  function setStore() {
    store.setItem("items", JSON.stringify(itemArr));
  }

  function clearStore() {
    store.clear();
  }

  function checkOverDue(obj) {
    return (new Date(obj.noteExpDate) < new Date(dateString)) ? 'overdue' : null
  }

  function renderItem(obj) {
    console.log("OBJ: ", obj);
    let item = '';
    if(obj.itemType === "todo") {
      item = `
        <div 
        class="item todo ${obj.todoStatus} ${(obj.done) ? 'done' : null} ${checkOverDue(obj)}"
        id="${obj.itemId}"
        data-todo-symbol="${obj.itemTitle.charAt(0)}">
          <h3 class="item-title">${obj.itemTitle}</h3>
          <p class="item-text">${obj.itemText}</p>
          <small>${obj.todoExpDate}</small>
          <span class="check-btn"></span>
        </div>
      `;
    } else {
      item = `<div class="item note " id="${obj.itemId}">
        <h3 class="item-title">${obj.itemTitle}</h3>
        <p class="item-text">${obj.itemText}</p>
      </div>`
    }
    
    DOM.itemsList.insertAdjacentHTML('beforeend', item);
  }

  function renderItems(arr) {
    console.log(DOM.itemsList);
    DOM.itemsList.innerHTML = '';
    arr.forEach((item) => {
      renderItem(item);
    });
  }

  function openForm() {
    DOM.html.classList.add('no-scroll');
    addNoteForm.classList.add('active-window');
  }

  function getData(form) {
    const itemType = form.querySelector('[name="item-type"]:checked').value;
    console.log("TYPE: ", itemType);
    let dataObj
    if(itemType === 'todo') {
      dataObj = {
        itemType: itemType,
        itemTitle: form.querySelector('[name="item-title"]').value || '...',
        itemText: form.querySelector('[name="item-text"]').value || '...',
        todoExpDate: form.querySelector('[name="todo-exp-date"]').value || dateString,
        todoStatus: form.querySelector('[name="todo-status"]:checked').value
      }
    } else {
      dataObj = {
        itemType: itemType,
        itemTitle: form.querySelector('[name="item-title"]').value || '...',
        itemText: form.querySelector('[name="item-text"]').value || '...',
      }
    }
    return dataObj;
  }

  function checkDone(event) {
    const todoList = DOM.itemsList.querySelectorAll('.todo');
    const todo = event.target.parentNode;
    const itemIndex = parseInt([...todoList].indexOf(todo));
    itemId = todo.getAttribute("id");
    todo.classList.toggle('done');
    itemArr[itemIndex].todoDone = !itemArr[itemIndex].todoDone;
    setStore();
  }

  // render notes
  renderItems(itemArr);

  // HANDLERS 
  document.addEventListener('click', (event) => {
    // ADD NOTE (opens AddNote form)
    if (event.target.classList.contains('add-item-btn')) {
      DOM.html.classList.add('no-scroll');
      DOM.itemForm.classList.add('active-window');
      console.log("FORM: ", DOM.itemForm);
    }
    // CANCEL
    else if (event.target.classList.contains('cancel-btn')) {
      event.preventDefault();
      closeHandler(DOM.windows, 'active-window');
    }
    // CREATE NOTE
    else if (event.target.classList.contains('create-btn')) {
      event.preventDefault();
      const fullNoteData = {
        ...getData(DOM.itemForm),
        itemId: generateId(),
        noteCreationDate: getCreationDate(),
        noteDone: false
      };
      itemArr.push(fullNoteData);
      setStore();
      renderItem(fullNoteData);
      closeHandler(DOM.windows, 'active-window');
    }
    // CONSOLE LIST of NOTES
    else if (event.target.classList.contains('list-btn')) {
      console.warn('NOTES: ', itemArr);
    }
    // CLEAR STORE
    else if (event.target.classList.contains('clean-btn')) {
      clearStore();
    }
    // OPEN NOTE
    else if (event.target.classList.contains('note')) {
      DOM.html.classList.add('no-scroll');
      openNoteHandler(event);
    }
    // DELETE NOTE
    else if (event.target.classList.contains('delete-btn')) {
      deleteNoteHandler(event, itemId);
    }
    // EDIT NOTE
    else if (event.target.classList.contains('change-btn')) {
      event.preventDefault();
      editItem(itemId);
    }
    // CHECK BTN
    else if (event.target.classList.contains('check-btn')) {
      checkDone(event);
    }
  });
})(window, document, window.localStorage);