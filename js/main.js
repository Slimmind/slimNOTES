// TODO: create a note object with methods: create, edit, delete

(function (window, document, store) {
  const DOM = {
    windows: document.querySelector('.window'),
    html: document.querySelector('html'),
    itemForm: document.querySelector('#item-form'),
    itemsList: document.querySelector('.items-list'),
    item: document.querySelectorAll('.item'),
    expandFormToggler: document.querySelectorAll('[name="item-type"]'),
    todoBlock: document.querySelector('.todo-block'),
    toggleType: document.querySelector('.toggle-type'),
    navPanel: document.querySelector('.nav-panel'),
    cancelBtn: document.querySelector('.cancel-btn'),
    addItemBtn: document.querySelector('.add-item-btn'),
    cleanStoreBtn: document.querySelector('.clean-btn'),
    menuBtn: document.querySelector('.menu-btn'),
    createItemBtn: document.querySelector('.create-btn'),
    deleteItemBtn: document.querySelector('.delete-btn'),
    changeItemBTn: document.querySelector('.change-btn'),
    checkBtn: document.querySelectorAll('.check-btn'),
  };

  let itemArr = (store.length > 0) ? JSON.parse(store.getItem('items')) : [];
  const dateData = new Date();
  const month = parseInt(dateData.getMonth() + 1) < 10 ? `0${parseInt(dateData.getMonth()+1)}` : parseInt(dateData.getMonth() + 1);
  const day = dateData.getDate() < 10 ? `0${dateData.getDate()}` : dateData.getDate();
  const dateString = `${dateData.getFullYear()}-${month}-${day}`;
  let itemId = '';
  let itemIndex = 0;

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
        updateItem(editingItemIndex, itemArr[editingItemIndex]);
        closeHandler(DOM.windows, 'active-window, edit-form');
        clearForm();
      }
    }
    if (changedProps > 0) {} else {
      closeHandler(DOM.windows, 'active-window');
      clearForm();
    }
  }

  function updateItem(itemIndex, itemData) {
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
    return (new Date(obj.noteExpDate) < new Date(dateString)) ? 'overdue' : ''
  }

  function renderItem(obj) {
    console.log("OBJ: ", obj);
    let item = '';
    if (obj.itemType === "todo") {
      item = `
        <div 
        class="item todo ${obj.todoStatus} ${(obj.done) ? 'done' : ''} ${checkOverDue(obj)}"
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

  function checkDone(elem) {
    const todoList = DOM.itemsList.querySelectorAll('.todo');
    const todo = elem.parentNode;
    const itemIndex = [...todoList].indexOf(todo);
    itemId = todo.getAttribute("id");
    todo.classList.toggle('done');
    itemArr[itemIndex].todoDone = !itemArr[itemIndex].todoDone;
    setStore();
  }

  // render notes
  renderItems(itemArr);

  // HANDLERS

  // CANCEL
  DOM.cancelBtn.addEventListener('click', (event) => {
    event.preventDefault();
    closeHandler(DOM.windows, 'active-window, edit-form, todo-form, create-form');
  });

  // CLEAR STORE
  DOM.cleanStoreBtn.addEventListener('click', clearStore);

  // MENU BTN
  DOM.menuBtn.addEventListener('click', () => {
    DOM.navPanel.classList.toggle('menu-is-open');
  });

  // ADD NOTE (opens AddNote form)
  DOM.addItemBtn.addEventListener('click', () => {
    DOM.html.classList.add('no-scroll');
    DOM.itemForm.classList.add('active-window', 'create-form');
  });

  // CREATE NOTE
  DOM.createItemBtn.addEventListener('click', (event) => {
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
  })

  // OPEN ITEM
  DOM.itemsList.addEventListener('click', (event) => {
    if(event.target.classList.contains('item')) {
      DOM.html.classList.add('no-scroll');
      console.log("TEST: ", event.target);
      openItemHandler(event);
    }
  });

  // DELETE Item
  DOM.deleteItemBtn.addEventListener('click', (event) => {
    deleteItemHandler(event, itemId);
    closeHandler(DOM.windows, 'active-window, edit-form, todo-form');
  });

  // EDIT Item
  DOM.changeItemBTn.addEventListener('click', (event) => {
    event.preventDefault();
    editItem(itemId);
  });

  // CHECK BTN
  DOM.itemsList.addEventListener('click', (event) => {
    if(event.target.classList.contains('check-btn')) {
      checkDone(event.target);
    }
  });

  // CHOOSE TYPE of ITEM
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
})(window, document, window.localStorage);