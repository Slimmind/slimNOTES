const $win = window;
const $doc = document;
const store = window.localStorage;
const mainWrap = $doc.querySelector('html');
const addItemForm = $doc.getElementById('add-item-form');
const editItemForm = $doc.getElementById('edit-item-form');
const addItemBtn = $doc.querySelector('.add-item-btn');
const itemsList = $doc.querySelector('.items-list');
const windows = $doc.querySelectorAll('.window');
let itemsArr = (store.length > 0) ? JSON.parse(store.getItem('items')) : [];
const dateData = new Date();
const month = parseInt(dateData.getMonth()+1) < 10 ? `0${parseInt(dateData.getMonth()+1)}` : parseInt(dateData.getMonth()+1);
const day = dateData.getDate() < 10 ? `0${dateData.getDate()}` : dateData.getDate();
const dateString = `${dateData.getFullYear()}-${month}-${day}`;
let itemId = '';
let noteIndex = 0;



function closeHandler(elem, classToRemove) {
  itemId = '';
  if (mainWrap.classList.contains('no-scroll')) {
    mainWrap.classList.remove('no-scroll');
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

function getItemFromArray(id) {
  return itemsArr.find((item) => item.itemId === id);
}

function openItemHandler(event) {
  itemId = event.target.getAttribute("id");
  fillForm(getItemFromArray(itemId));
}

function deleteItemHandler(event, itemId) {
  console.log("ID: ", itemId);
  event.preventDefault();
  if (!itemId) return;
  itemsArr = itemsArr.filter((item) => {
    return item.itemId !== itemId;
  });
  $doc.getElementById(itemId).remove();
  closeHandler(windows, 'active-window');
}

function fillForm(obj) {
  editItemForm.querySelector('[name="item-title"]').value = obj.itemTitle;
  editItemForm.querySelector('[name="item-text"]').value = obj.itemText;
  editItemForm.querySelector('[name="todo-exp-date"]').value = obj.todoExpDate;
  editItemForm.classList.add('active-window');
  const checkboxes = editItemForm.querySelectorAll('[name="item-status"]');
  [...checkboxes].forEach((checky) => {
    if (checky.value === obj.itemStatus) {
      checky.checked = true;
    } else {
      checky.checked = false;
    }
  });
}

function editItem(editingitemId) {
  const editingItemIndex = itemsArr.indexOf(getItemFromArray(editingitemId));
  const changedData = getData('#edit-Item-form');
  let changedProps = 0;
  for(let prop in changedData) {
    if(changedData[prop] !== itemsArr[editingItemIndex][prop]) {
      itemsArr[editingItemIndex][prop] = changedData[prop];
      changedProps += 1;
      setStore();
      updateItem(editingItemIndex, itemsArr[editingItemIndex]);
      closeHandler(windows, 'active-window');
      clearForm();
    }
  }
  if(changedProps > 0) {
  } else {
    closeHandler(windows, 'active-window');
    clearForm();
  }
}

function updateItem (itemIndex, itemData) {
  const item = itemsList.querySelectorAll('.item')[itemIndex];
  item.querySelector('.item-title').textContent = itemData.itemTitle;
  item.querySelector('.item-text').textContent = itemData.itemText;
  item.querySelector('.item-date').textContent = itemData.itemExpDate;
  item.setAttribute('class', `item ${itemData.itemStatus} ${checkOverDue(itemData)}`);
  item.setAttribute('data-item-symbol', itemData.itemTitle.charAt(0));
}

function clearForm() {
  const forms = $doc.querySelectorAll('form');
  [...forms].forEach(form => form.reset());
}

function generateId() {
  return Math.random().toString(36).substr(2, 9);
}

function getCreationDate() {
  return dateString;
}

function setStore() {
  store.setItem("items", JSON.stringify(itemsArr));
}

function clearStore() {
  store.clear();
}

function checkOverDue(obj) {
  return (new Date(obj.todoExpDate) < new Date(dateString)) ? 'overdue' : null
}

function renderTodo(obj) {
  console.log("OBJ", obj);
  const todo = `
    <div 
    class="item todo ${obj.itemStatus} ${obj.done ? 'done' : null} ${checkOverDue(obj)}"
    id="${obj.itemId}"
    data-item-symbol="${obj.itemTitle.charAt(0)}">
      <h3 class="item-title">${obj.itemTitle}</h3>
      <p class="item-text">${obj.itemText}</p>
      <small class="item-date">${obj.itemExpDate}</small>
      <span class="check-btn"></span>
    </div>
  `;
  itemsList.insertAdjacentHTML('beforeend', todo);
}

function renderNote(obj) {
//   const note = `
//     <div 
//     class="item note"
//     id="${obj.itemId}"
//     data-note-symbol="${obj.noteTitle.charAt(0)}">
//       <h3 class="note-title">${obj.noteTitle}</h3>
//       <p class="note-text">${obj.noteText}</p>
//     </div>
//   `;
//   itemsList.insertAdjacentHTML('beforeend', note);
console.log('RENDER NOTE');
}

function renderItems(arr) {
  if(arr) {
    itemsList.innerHTML = '';
    arr.forEach((item) => {
      // (item.type === 'note') ? renderNote(item) : renderTodo(item);
      renderTodo(item);
    });
  }
}

function openForm() {
  mainWrap.classList.add('no-scroll');
  addItemForm.classList.add('active-window');
}

function getData(form) {
  const formy = document.querySelector(`${form} form`);
  const dataObj = {
    itemTitle: formy.querySelector('[name="item-title"]').value || '...',
    itemText: formy.querySelector('[name="item-text"]').value || '...',
    itemExpDate: formy.querySelector('[name="todo-exp-date"]').value || dateString,
    itemStatus: formy.querySelector('[name="todo-status"]:checked').value
  }
  return dataObj;
}

function checkDone(event) {
  const todoList = itemsList.querySelectorAll('.todo');
  const todo = event.target.parentNode;
  const todoIndex = parseInt([...todoList].indexOf(todo));
  itemId = todo.getAttribute("id");
  todo.classList.toggle('done');
  itemsArr[todoIndex].todoDone = !itemsArr[todoIndex].todoDone;
  setStore();
}

// RENDER ITEMS
renderItems(itemsArr);

// HANDLERS 
$doc.addEventListener('click', (event) => {
  // ADD ITEM (opens AddItem form)
  if (event.target.classList.contains('add-item-btn')) {
    mainWrap.classList.add('no-scroll');
    addItemForm.classList.add('active-window');
  }
  // CANCEL
  else if (event.target.classList.contains('cancel-btn')) {
    event.preventDefault();
    closeHandler(windows, 'active-window');
  }
  // CREATE TODO
  else if (event.target.classList.contains('create-btn')) {
    event.preventDefault();
    const fullTodoData = {...getData('#add-item-form'), itemId: generateId(), itemCreationDate: getCreationDate(), todoDone: false};
    itemsArr.push(fullTodoData);
    setStore();
    renderTodo(fullTodoData);
    closeHandler(windows, 'active-window');
  }
  // CONSOLE LIST of ITEMS
  else if (event.target.classList.contains('list-btn')) {
    console.warn('ITEMS: ', itemsArr);
  }
  // CLEAR STORE
  else if (event.target.classList.contains('clean-btn')) {
    clearStore();
  }
  // OPEN ITEM
  else if (event.target.classList.contains('item')) {
    mainWrap.classList.add('no-scroll');
    openItemHandler(event);
  }
  // DELETE ITEM
  else if (event.target.classList.contains('delete-btn')) {
    deleteItemHandler(event, itemId);
  }
  // EDIT ITEM
  else if (event.target.classList.contains('change-btn')) {
    event.preventDefault();
    editItem(itemId);
  }
  // CHECK BTN
  else if (event.target.classList.contains('check-btn')) {
    checkDone(event);
  }
});