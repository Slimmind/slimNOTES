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
    todoBlock: document.querySelector('.todo-block'),
    toggleType: document.querySelector('.toggle-type'),
    navPanel: document.querySelector('.nav-panel'),
  };

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
    const classes = classToRemove.replace(/ /g, '').split(',');
    if (DOM.html.classList.contains('no-scroll')) {
      DOM.html.classList.remove('no-scroll');
    }
    classes.length && classes.forEach((item) => {
      elem.classList.contains(item) && elem.classList.remove(item);
    });
    clearForm();
  }

  function getNoteFromArray(id) {
    return itemArr.find((item) => item.itemId === id);
  }

  function openItemHandler(event) {
    itemId = event.target.getAttribute('id');
    const item = getNoteFromArray(itemId);
    DOM.itemForm.classList.add('edit-form');
    if (item.itemType === 'todo') {
      DOM.itemForm.classList.add('todo-form');
    }
    fillForm(item);
  }

  function deleteItemHandler(event, itemId) {
    event.preventDefault();
    if (!itemId) return;
    itemArr = itemArr.filter((note) => {
      return note.itemId !== itemId;
    });
    setStore();
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
        closeHandler(DOM.windows, 'active-window, edit-form');
        clearForm();
      }
    }
    if (changedProps > 0) {} else {
      closeHandler(DOM.windows, 'active-window');
      clearForm();
    }
  }

  function updateNote(itemIndex, itemData) {
    const note = DOM.itemsList.querySelectorAll('.item')[itemIndex];
    note.querySelector('.item-title').textContent = itemData.itemTitle;
    note.querySelector('.item-text').textContent = itemData.itemText;
    if (itemData.itemType === 'todo') {
      note.querySelector('.todo-date').textContent = itemData.todoExpDate;
      note.setAttribute('class', `todo ${itemData.todoStatus} ${checkOverDue(itemData)}`);
      note.setAttribute('data-todo-symbol', itemData.itemTitle.charAt(0));
    }
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
    if (obj.itemType === "todo") {
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
    if (itemType === 'todo') {
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
      DOM.itemForm.classList.add('active-window', 'create-form');
      console.log("FORM: ", DOM.itemForm);
    }
    // CANCEL
    else if (event.target.classList.contains('cancel-btn')) {
      event.preventDefault();
      closeHandler(DOM.windows, 'active-window, edit-form, todo-form, create-form');
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
      closeHandler(DOM.windows, 'active-window, todo-form, create-form');
    }
    // CONSOLE LIST of NOTES
    else if (event.target.classList.contains('list-btn')) {
      console.warn('NOTES: ', itemArr);
    }
    // CLEAR STORE
    else if (event.target.classList.contains('clean-btn')) {
      clearStore();
    }
    // OPEN ITEM
    else if (event.target.classList.contains('item')) {
      DOM.html.classList.add('no-scroll');
      openItemHandler(event);
    }
    // DELETE Item
    else if (event.target.classList.contains('delete-btn')) {
      deleteItemHandler(event, itemId);
      closeHandler(DOM.windows, 'active-window, edit-form, todo-form');
    }
    // EDIT Item
    else if (event.target.classList.contains('change-btn')) {
      event.preventDefault();
      editItem(itemId);
    }
    // CHECK BTN
    else if (event.target.classList.contains('check-btn')) {
      checkDone(event);
    }

    // MENU BTN
    else if (event.target.classList.contains('menu-btn')) {
      DOM.navPanel.classList.toggle('menu-is-open');
    }
  });
})(window, document, window.localStorage);