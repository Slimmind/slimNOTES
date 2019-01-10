const $win = window;
const $doc = document;
const store = window.localStorage;
const mainWrap = $doc.querySelector('html');
const addNoteForm = $doc.getElementById('add-note-form');
const editNoteForm = $doc.getElementById('edit-note-form');
const addNoteBtn = $doc.querySelector('.add-note-btn');
const notesList = $doc.querySelector('.notes-list');
const windows = $doc.querySelectorAll('.window');
const noteArr = (store.length > 0) ? JSON.parse(store.getItem('notes')) : [];

function closingHandler(elem, classToRemove) {
  if(mainWrap.classList.contains('no-scroll')) {
    mainWrap.classList.remove('no-scroll');
  }
  if(elem.length > 1) {
    [...elem].forEach((item) => {
      if(item.classList.contains(classToRemove)) {
        item.classList.remove(classToRemove);
      }
    });
  } else {
    elem.classList.remove(classToRemove);
  }
}

function openNoteHandler(event) {
  elemId = event.target.getAttribute("id");
  function chooseElem (elem) {
    if(elem.noteId === elemId) {
      return elem;
    }
  }
  fillForm(noteArr.find(chooseElem));
}

function fillForm(obj) {
  editNoteForm.querySelector('[name="note-title"]').value = obj.noteTitle;
  editNoteForm.querySelector('[name="note-text"]').value = obj.noteText;
  editNoteForm.querySelector('[name="note-exp-date"]').value = obj.noteExpDate;
  editNoteForm.querySelector(`[value="${obj.noteStatus}"]`).setAttribute('checked', 'checked');
  editNoteForm.classList.add('active-window');
}

function generateId() {
  return Math.random().toString(36).substr(2, 9);
}
function getCreationDate() {
	const date = new Date();
	return `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
}

function setStore(data) {
  store.setItem("notes", JSON.stringify(data));
}

function clearStore() {
  store.clear();
}

function renderNote(obj) {
  const note = $doc.createElement('div');
  const noteTitle = $doc.createElement('h3');
  const noteTitleValue = $doc.createTextNode(obj.noteTitle);
  const noteText = $doc.createElement('p');
  const noteTextValue = $doc.createTextNode(obj.noteText);
  const noteExpDate = $doc.createElement('small');
  const noteExpDataValue = $doc.createTextNode(obj.noteExpDate);

  noteTitle.appendChild(noteTitleValue);
  noteText.appendChild(noteTextValue);
  noteExpDate.appendChild(noteExpDataValue);
  note.classList.add('note', obj.noteStatus);
  note.setAttribute('id', obj.noteId);
  note.setAttribute('data-creation-date', obj.noteCreationDate);
  note.appendChild(noteTitle);
  note.appendChild(noteText);
  note.appendChild(noteExpDate);
  notesList.appendChild(note);
}

function renderNotes(arr) {
  console.log("NOTES RENDERING");
  arr.forEach((item) => {
    renderNote(item);
  });
}

function openForm() {
  mainWrap.classList.add('no-scroll');
  addNoteForm.classList.add('active-window');
}

function getData(form) {
  const formy = document.querySelector(`${form} form`);
  const dataObj = {
    noteId: generateId(),
    noteTitle: formy.querySelector('[name="note-title"]').value,
    noteText: formy.querySelector('[name="note-text"]').value,
    noteCreationDate: getCreationDate(),
    noteExpDate: formy.querySelector('[name="note-exp-date"]').value,
    noteStatus: formy.querySelector('[name="note-status"]:checked').value
  }
  noteArr.push(dataObj);
  setStore(noteArr);
  renderNote(dataObj);
  console.log('NOTES: ', noteArr);
}

// render notes
renderNotes(noteArr);

// HANDLERS 
$doc.addEventListener('click', (event) => {
  if(event.target.classList.contains('add-note-btn')) {
    mainWrap.classList.add('no-scroll');
    addNoteForm.classList.add('active-window');
  } else if(event.target.classList.contains('cancel-btn')) {
    event.preventDefault();
    closingHandler(windows, 'active-window');
  } else if(event.target.classList.contains('create-btn')) {
    event.preventDefault();
    closingHandler(windows, 'active-window');
    getData('#add-note-form');
  } else if(event.target.classList.contains('list-btn')) {
    console.warn('STORE', store.getItem('notes'));
  } else if(event.target.classList.contains('clean-btn')) {
    clearStore();
  } else if(event.target.classList.contains('note')) {
    mainWrap.classList.add('no-scroll');
    openNoteHandler(event);
  } else if(event.target.classList.contains('delete-btn')) {

  } else if(event.target.classList('change-btn')) {
    
  }
});