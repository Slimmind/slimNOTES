const $win = window;
const $doc = document;
const mainWrap = $doc.querySelector('html');
const addNoteForm = $doc.getElementById('add-note-form');
const addNoteBtn = $doc.querySelector('.add-note-btn');
const windows = $doc.querySelectorAll('.window');
const noteArr = [];

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

function generateId() {
  return Math.random().toString(36).substr(2, 9);
}
function getCreationDate() {
	const date = new Date();
	return `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
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
  console.warn('NOTES: ', noteArr);
}

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
  }
});