// TODO: create a note object with methods: create, edit, delete
// TODO: add animations of creating, editing and deleting items
// TODO: add possibility to choose background color of note
// TODO: add animation to menu-btn

(function (window, document, store) {
  const DOM = {
    html: document.querySelector('html'),
    windows: document.querySelector('.window'),
    itemForm: document.querySelector('#item-form'),
    itemsList: document.querySelectorAll('.items-list'),
    todoList: document.querySelector('.todo-list'),
    noteList: document.querySelector('.note-list'),
    item: document.querySelectorAll('.item'),
    expandFormToggler: document.querySelectorAll('[name="item-type"]'),
    todoBlock: document.querySelector('.todo-block'),
    noteBlock: document.querySelector('.note-block'),
    toggleType: document.querySelector('.toggle-type'),
    navPanel: document.querySelector('.nav-panel'),
    cancelBtn: document.querySelector('.cancel-btn'),
    addItemBtn: document.querySelector('.add-item-btn'),
    menuBtn: document.querySelector('.menu-btn'),
    createItemBtn: document.querySelector('.create-btn'),
    deleteItemBtn: document.querySelector('.delete-btn'),
    changeItemBTn: document.querySelector('.change-btn'),
    checkBtn: document.querySelectorAll('.check-btn'),
    showStorageBtn: document.getElementById('show-local-storage'),
    cleanStorageBtn: document.getElementById('clean-local-storage'),
    callServiceBtn: document.getElementById('call-service-message'),
    serviceMessages: document.querySelector('.service-messages'),
    listTypeInput: document.querySelectorAll('input[name="list-type"]'),
  };

  let itemArr = (store.length > 0) ? JSON.parse(store.getItem('items')) : [];
  const dateData = new Date();
  const month = parseInt(dateData.getMonth() + 1) < 10 ? `0${parseInt(dateData.getMonth()+1)}` : parseInt(dateData.getMonth() + 1);
  const day = dateData.getDate() < 10 ? `0${dateData.getDate()}` : dateData.getDate();
  const dateString = `${dateData.getFullYear()}-${month}-${day}`;
  let currentItem = { id: '', parentList: '', DOMIndex: '', arrayIndex: '', arrayData: {} };
  let itemId = '';

  function closeHandler(elem, classToRemove) {
    currentItem = { id: '', parentList: '', DOMIndex: '', arrayIndex: '', arrayData: {} };
    const classes = classToRemove.replace(/ /g, '').split(',');
    if (DOM.html.classList.contains('no-scroll')) {
      DOM.html.classList.remove('no-scroll');
    }
    classes.length && classes.forEach((item) => {
      elem.classList.contains(item) && elem.classList.remove(item);
    });
    DOM.todoBlock.classList.remove('hidden');
    clearForm();
  }

  function getNoteFromArray(id) {
    return itemArr.find((item) => item.itemId === id);
  }

  function openItemHandler(event) {
    const targetItem = event.target;
    const id = event.target.getAttribute('id');
    const arrayIndex = itemArr.findIndex((item) => item.itemId === id);
    
    currentItem = {
      id: id,
      parentList: targetItem.parentNode,
      DOMIndex: [...targetItem.parentNode.querySelectorAll('.item')].indexOf(targetItem),
      arrayIndex,
      arrayData: itemArr[arrayIndex],
    };
    console.log("ID: ", currentItem);

    DOM.itemForm.classList.add('edit-form');
    if (currentItem.arrayData.itemType === 'todo') {
      DOM.itemForm.classList.add('todo-form');
    }

    fillForm(currentItem.arrayData);
  }

  function deleteItemHandler(event) {
    event.preventDefault();
    itemArr = itemArr.filter((note) => {
      return note.itemId !== currentItem.id;
    });
    setStore();
    currentItem.parentList.removeChild(document.getElementById(currentItem.id));
    closeHandler(DOM.windows, 'active-window');
  }

  function fillForm(obj) {
    DOM.itemForm.querySelector(`[value="${obj.itemType}"]`).checked = true;
    DOM.itemForm.querySelector('[name="item-title"]').value = obj.itemTitle;
    DOM.itemForm.querySelector('[name="item-text"]').value = obj.itemText;
    DOM.itemForm.querySelector('[name="todo-exp-date"]').value = obj.todoExpDate;
    DOM.itemForm.classList.add('active-window');
    const checkboxes = DOM.itemForm.querySelectorAll('[name="todo-status"]');
    [...checkboxes].forEach(checky => {
      checky.checked = checky.value === obj.todoStatus;
    });
  }

  function editItem(item) {
    const changedData = getData(DOM.itemForm);
    let changedProps = 0;
    for (let prop in changedData) {
      if (changedData[prop] !== itemArr[item.arrayIndex][prop]) {
        itemArr[item.arrayIndex][prop] = changedData[prop];
        changedProps += 1;
        setStore();
        updateItem(item.DOMIndex, itemArr[item.arrayIndex]);
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
    const type = itemData.itemType;
    const item = (type === 'todo') ? DOM.todoList.querySelectorAll('.item')[itemIndex] : DOM.noteList.querySelectorAll('.item')[itemIndex];
    item.querySelector('.item-title').textContent = itemData.itemTitle;
    item.querySelector('.item-text').textContent = itemData.itemText;
    if (type === 'todo') {
      item.querySelector('.todo-date').textContent = itemData.todoExpDate;
      item.setAttribute('class', `item todo ${itemData.todoStatus} ${checkOverDue(itemData)}`);
      item.setAttribute('data-todo-symbol', itemData.itemTitle.charAt(0));
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
    return (new Date(obj.todoExpDate) < new Date(dateString)) ? 'overdue' : ''
  }

  function renderItem(obj) {
    let item = '';
    if (obj.itemType === "todo") {
      item = `<div class="item todo ${obj.todoStatus} ${(obj.todoDone) ? 'done' : null} ${checkOverDue(obj)}"
        id="${obj.itemId}"
        data-todo-symbol="${obj.itemTitle.charAt(0)}">
          <h3 class="item-title">${obj.itemTitle}</h3>
          ${obj.itemText ? '<p class="item-text">' + obj.itemText + '</p>' : ''}
          <small class="todo-date">${obj.todoExpDate.split('-').reverse().join('-')}</small>
          <span class="check-btn"></span>
        </div>
      `;
      DOM.todoList.insertAdjacentHTML('beforeend', item);
    } else {
      item = `<div class="item note " id="${obj.itemId}" style="background-color: ${obj.itemColor}">
        <h3 class="item-title">${obj.itemTitle}</h3>
        <p class="item-text">${obj.itemText}</p>
      </div>`;
      DOM.noteList.insertAdjacentHTML('beforeend', item);
    }
  }

  function renderItems(arr) {
    DOM.todoList.innerHTML = '';
    DOM.noteList.innerHTML = '';
    arr.forEach((item) => {
      renderItem(item);
    });
  }

  function openForm() {
    DOM.html.classList.add('no-scroll');
    addNoteForm.classList.add('active-window');
  }

  function getData(form) {
    const type = form.querySelector('[name="item-type"]:checked').value;
    let dataObj
    if (type === 'todo') {
      dataObj = {
        itemType: type,
        itemTitle: form.querySelector('[name="item-title"]').value || '...',
        itemText: form.querySelector('[name="item-text"]').value || null,
        todoExpDate: form.querySelector('[name="todo-exp-date"]').value || dateString,
        todoStatus: form.querySelector('[name="todo-status"]:checked').value
      }
    } else {
      dataObj = {
        itemType: type,
        itemTitle: form.querySelector('[name="item-title"]').value || '...',
        itemText: form.querySelector('[name="item-text"]').value || '...',
        itemColor: form.querySelector('[name="item-color"]').value
      }
    }
    return dataObj;
  }

  function checkDone(elem) {
    const todo = elem.parentNode;
    const itemArrayIndex = itemArr.indexOf(getNoteFromArray(todo.getAttribute('id')));
    itemId = todo.getAttribute("id");
    todo.classList.toggle('done');
    itemArr[itemArrayIndex].todoDone = !itemArr[itemArrayIndex].todoDone;
    setStore();
  }

  function serviceMessage(messageType='info', messageTitle='', messageText='') {
    const message = `
    <div class="service-message ${messageType}">
    <strong class="close-message" role="button" aria-label="close-message"></strong>
    <h3 class="message-title">${messageTitle}</h3>
    <div class="message-text">
    <p>${messageText}</p>
    </div>
    </div>
    `;

    DOM.html.classList.add('service');

    DOM.serviceMessages.insertAdjacentHTML('beforeend', message);

    DOM.serviceMessages.addEventListener('click', (event) => {
      if(!event.target.classList.contains('service-message')) {
        DOM.html.classList.remove('service');
        DOM.serviceMessages.classList.add('hidden');
        setTimeout(() => {
          DOM.serviceMessages.innerHTML = '';
          DOM.serviceMessages.classList.remove('hidden');
        },10);
      }
    });
  }

  // render items
  renderItems(itemArr);

  // HANDLERS

  // TOGGLE ITEMS LIST
  [...DOM.listTypeInput].forEach((input) => {
    input.addEventListener('change', (event) => {
      [...DOM.itemsList].forEach((list) => {
        list.classList.add('hidden');
      });
      document.querySelector(`.${event.target.value}`).classList.remove('hidden');
    });
  });

  // SHOW STORAGE
  DOM.showStorageBtn.addEventListener('click', () => {
    console.log("STORAGE: ", JSON.parse(store.getItem('items')));
    serviceMessage('success', 'Local Storage', store.getItem('items'));
  });

  // CANCEL
  DOM.cancelBtn.addEventListener('click', (event) => {
    event.preventDefault();
    closeHandler(DOM.windows, 'active-window, edit-form, todo-form, create-form');
  });

  // CLEAR STORE
  DOM.cleanStorageBtn.addEventListener('click', () => {
    clearStore();
  });

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
    let fullItemData = {};

    if (DOM.itemForm.itemType === 'todo') {
      fullItemData = {
        ...getData(DOM.itemForm),
        itemId: generateId(),
        itemCreationDate: getCreationDate(),
        todoDone: false
      };
    } else {
      fullItemData = {
        ...getData(DOM.itemForm),
        itemId: generateId(),
        itemCreationDate: getCreationDate(),
      };
    }

    itemArr.push(fullItemData);
    setStore();
    renderItem(fullItemData);
    closeHandler(DOM.windows, 'active-window, todo-form, create-form');
  });

  // OPEN ITEM
  [...DOM.itemsList].forEach((list) => {
    list.addEventListener('click', (event) => {
      if(event.target.classList.contains('item')) {
        DOM.html.classList.add('no-scroll');
        openItemHandler(event);
      }
    });
  });

  // DELETE Item
  DOM.deleteItemBtn.addEventListener('click', (event) => {
    deleteItemHandler(event, itemId);
    closeHandler(DOM.windows, 'active-window, edit-form, todo-form');
  });

  // EDIT Item
  DOM.changeItemBTn.addEventListener('click', (event) => {
    event.preventDefault();
    editItem(currentItem);
  });

  // CHECK BTN
  DOM.todoList.addEventListener('click', (event) => {
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
            DOM.noteBlock.classList.add('hidden');
            break;
          default:
            DOM.todoBlock.classList.add('hidden');
            DOM.noteBlock.classList.remove('hidden');
            break;
        }
      });
    });
  })(DOM); 

  // CALL SERVICE MESSAGE
  DOM.callServiceBtn.addEventListener('click', () => {
    serviceMessage('info', 'Call Test Message', 'Test message text');
  });

  // CLOSE NAV
  document.addEventListener('click', (event) => {
    if(!event.target.classList.contains('menu-btn')) {
      DOM.navPanel.classList.remove('menu-is-open');
    }
  });

})(window, document, window.localStorage);