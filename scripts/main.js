// TODO: wrap your code a function
//(function (window, document, store) {
//  // your codes
//})(window, document, window.localStorage);

// TODO: create a note object with methods: create, edit, delete

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
const dateData = new Date();
const month = parseInt(dateData.getMonth()+1) < 10 ? `0${parseInt(dateData.getMonth()+1)}` : parseInt(dateData.getMonth()+1);
const day = dateData.getDate() < 10 ? `0${dateData.getDate()}` : dateData.getDate();
const dateString = `${dateData.getFullYear()}-${month}-${day}`;
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

function getNoteFromArray(id) {
  return noteArr.find((item) => item.noteId === id);
}

function openNoteHandler(event) {
  noteId = event.target.getAttribute("id");
  fillForm(getNoteFromArray(noteId));
}

function deleteNoteHandler(event, noteId) {
  event.preventDefault();
  if (!noteId) return;
  noteArr = noteArr.filter((note) => {
    return note.noteId !== noteId;
  });
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
      checky.checked = true;
    } else {
      checky.checked = false;
    }
  });
}

function editNote(editingNoteId) {
  const editingNoteIndex = noteArr.indexOf(getNoteFromArray(editingNoteId));
  const changedData = getData('#edit-note-form');
  let changedProps = 0;
  for(let prop in changedData) {
    if(changedData[prop] !== noteArr[editingNoteIndex][prop]) {
      noteArr[editingNoteIndex][prop] = changedData[prop];
      changedProps += 1;
      setStore();
      updateNote(editingNoteIndex, noteArr[editingNoteIndex]);
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

function updateNote (noteIndex, noteData) {
  const note = notesList.querySelectorAll('.note')[noteIndex];
  note.querySelector('.note-title').textContent = noteData.noteTitle;
  note.querySelector('.note-text').textContent = noteData.noteText;
  note.querySelector('.note-date').textContent = noteData.noteExpDate;
  note.setAttribute('class', `note ${noteData.noteStatus} ${checkOverDue(noteData)}`);
  note.setAttribute('data-note-symbol', noteData.noteTitle.charAt(0));
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
  store.setItem("notes", JSON.stringify(noteArr));
}

function clearStore() {
  store.clear();
}

function checkOverDue(obj) {
  return (new Date(obj.noteExpDate) < new Date(dateString)) ? 'overdue' : null
}

function renderNote(obj) {
  const note = `
    <div 
    class="note ${obj.noteStatus} ${(obj.done) ? 'done' : null} ${checkOverDue(obj)}"
    id="${obj.noteId}"
    data-note-symbol="${obj.noteTitle.charAt(0)}">
      <h3 class="note-title">${obj.noteTitle}</h3>
      <p class="note-text">${obj.noteText}</p>
      <small>${obj.noteExpDate}</small>
      <span class="check-btn"></span>
    </div>
  `;
  notesList.insertAdjacentHTML('beforeend', note);
}

function renderNotes(arr) {
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
    noteExpDate: formy.querySelector('[name="note-exp-date"]').value || dateString,
    noteStatus: formy.querySelector('[name="note-status"]:checked').value
  }
  return dataObj;
}

function checkDone(event) {
  const notes = notesList.querySelectorAll('.note');
  const note = event.target.parentNode;
  const noteIndex = parseInt([...notes].indexOf(note));
  noteId = note.getAttribute("id");
  note.classList.toggle('done');
  noteArr[noteIndex].noteDone = !noteArr[noteIndex].noteDone;
  setStore();
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
  }
  // CONSOLE LIST of NOTES
  else if (event.target.classList.contains('list-btn')) {
    console.warn('NOTES: ', noteArr);
  }
  // CLEAR STORE
  else if (event.target.classList.contains('clean-btn')) {
    clearStore();
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