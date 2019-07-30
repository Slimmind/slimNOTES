const $win = window;
const $doc = document;
const store = window.localStorage;
const mainWrap = $doc.querySelector('html');
const addNoteForm = $doc.getElementById('add-note-form');
const editNoteForm = $doc.getElementById('edit-note-form');
const addNoteBtn = $doc.querySelector('.add-note-btn');
const notesList = $doc.querySelector('.notes-list');
const windows = $doc.querySelectorAll('.window');
let noteArr = (store.length > 0) ? JSON.parse(store.getItem('notes')) : [];
const date = new Date();
let noteId = '';
let noteIndex = 0;

function closeHandler(elem, classToRemove) {
  noteId = '';
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

function getNoteById(id) {
  return noteArr.find((item) => item.noteId === id);
}

function openNoteHandler(event) {
  noteId = event.target.getAttribute("id");
  // console.log("OPEN: ", noteId);
  fillForm(getNoteById(noteId));
}

function deleteNoteHandler(event, noteId) {
  event.preventDefault();
  if (!noteId) return;
  noteArr = noteArr.filter((note) => {
    return note.noteId !== noteId;
  });
  // console.log('ARR: ', noteArr);
  setStore();
  $doc.getElementById(noteId).remove();
  closeHandler(windows, 'active-window');
}

function fillForm(obj) {
  editNoteForm.querySelector('[name="note-title"]').value = obj.noteTitle;
  editNoteForm.querySelector('[name="note-text"]').value = obj.noteText;
  editNoteForm.querySelector('[name="note-exp-date"]').value = obj.noteExpDate;
  editNoteForm.classList.add('active-window');
  const checkboxes = editNoteForm.querySelectorAll('[name="note-status"]');
  [...checkboxes].forEach((checky) => {
    if (checky.value === obj.noteStatus) {
      console.log(`=^..^= ${checky.value} === ${obj.noteStatus}`);
      checky.checked = true;
    } else {
      checky.checked = false;
    }
  });
}

function editNote(editingNoteId) {
  const editingNoteIndex = noteArr.indexOf(getNoteById(editingNoteId));
  const changedData = getData('#edit-note-form');
  const noteProps = Object.keys(noteArr[editingNoteIndex]);
  let changedProps = 0;
  for(let prop in changedData) {
    if(changedData[prop] !== noteArr[editingNoteIndex][prop]) {
      console.log(`PROPS: ${changedData[prop]} === ${noteArr[editingNoteIndex][prop]}`);
      changedProps += 1;
      // noteArr[editingNoteIndex].prop = prop;
    }
  }
  if(changedProps > 0) {
    console.log("Note was edited");
  } else {
    closeHandler(windows, 'active-window');
    clearForm();
  }
  console.log("CHANGES: ", changedProps);
}

function clearForm() {
  const forms = $doc.querySelectorAll('form');
  [...forms].forEach(form => form.reset());
}

function generateId() {
  return Math.random().toString(36).substr(2, 9);
}

function getCreationDate() {
  return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
}

function setStore() {
  store.setItem("notes", JSON.stringify(noteArr));
}

function clearStore() {
  store.clear();
}

function renderNote(obj) {
  const note = $doc.createElement('div');
  const noteTitle = $doc.createElement('h3');
  const noteTitleValue = $doc.createTextNode(obj.noteTitle);
  const noteSymbol = obj.noteTitle ? obj.noteTitle.charAt(0) : '=^..^=';
  const noteText = $doc.createElement('p');
  const noteTextValue = $doc.createTextNode(obj.noteText);
  const noteExpDate = $doc.createElement('small');
  const noteExpDataValue = $doc.createTextNode(obj.noteExpDate);
  const checkBtn = $doc.createElement('span');
  const template = $doc.createDocumentFragment();

  noteTitle.appendChild(noteTitleValue);
  noteTitle.classList.add('note-title');
  noteText.appendChild(noteTextValue);
  noteText.classList.add('note-text');
  noteExpDate.appendChild(noteExpDataValue);
  noteExpDate.classList.add('note-date');
  checkBtn.classList.add('check-btn');
  note.classList.add('note', obj.noteStatus);
  note.setAttribute('id', obj.noteId);
  note.setAttribute('data-creation-date', obj.noteCreationDate);
  note.setAttribute('data-note-symbol', noteSymbol)

  template.appendChild(noteTitle);
  template.appendChild(noteText);
  template.appendChild(noteExpDate);
  template.appendChild(checkBtn);

  note.appendChild(template);

  notesList.appendChild(note);
}

function renderNotes(arr) {
  // console.log("NOTES RENDERING", arr);
  notesList.innerHTML = '';
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
    noteTitle: formy.querySelector('[name="note-title"]').value || '...',
    noteText: formy.querySelector('[name="note-text"]').value || '...',
    noteExpDate: formy.querySelector('[name="note-exp-date"]').value || `${date.getFullYear()}-${parseInt(date.getMonth()+1)}-${date.getDate()}`,
    noteStatus: formy.querySelector('[name="note-status"]:checked').value
  }

  // console.log("SAVED DATA: ", noteArr);
  return dataObj;
}

// function editNoteForm(id) {
//   getData('#edit-note-form');
// }

function checkDone(event) {
  noteId = event.target.parentNode.getAttribute("id");
  $doc.getElementById(noteId).classList.toggle('done');
  const targetNote = noteArr.find((note) => {
    return note.noteId === noteId;
  });
  // console.log("TARGET: ", targetNote);
}

// render notes
renderNotes(noteArr);

// HANDLERS 
$doc.addEventListener('click', (event) => {
  // ADD NOTE (opens AddNote form)
  if (event.target.classList.contains('add-note-btn')) {
    mainWrap.classList.add('no-scroll');
    addNoteForm.classList.add('active-window');
  }
  // CANCEL
  else if (event.target.classList.contains('cancel-btn')) {
    event.preventDefault();
    closeHandler(windows, 'active-window');
  }
  // CREATE NOTE
  else if (event.target.classList.contains('create-btn')) {
    event.preventDefault();
    const fullNoteData = {...getData('#add-note-form'), noteId: generateId(), noteCreationDate: getCreationDate(), noteDone: false};
    noteArr.push(fullNoteData);
    setStore();
    renderNote(fullNoteData);
    closeHandler(windows, 'active-window');
    // console.log('NOTES: ', noteArr);
  }
  // CONSOLE LIST of NOTES
  else if (event.target.classList.contains('list-btn')) {
    // console.warn('STORE', store.getItem('notes'));
    console.warn('NOTES: ', noteArr);
  }
  // CLEAR STORE
  else if (event.target.classList.contains('clean-btn')) {
    clearStore();
    // console.log("NOTE ARR: ", noteArr);
  }
  // OPEN NOTE
  else if (event.target.classList.contains('note')) {
    mainWrap.classList.add('no-scroll');
    openNoteHandler(event);
  }
  // DELETE NOTE
  else if (event.target.classList.contains('delete-btn')) {
    deleteNoteHandler(event, noteId);
  }
  // EDIT NOTE
  else if (event.target.classList.contains('change-btn')) {
    event.preventDefault();
    editNote(noteId);
  }
  // CHECK BTN
  else if (event.target.classList.contains('check-btn')) {
    checkDone(event);
  }
});