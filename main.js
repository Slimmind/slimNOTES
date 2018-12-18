const $win = window;
const $doc = document;
const mainWrap = $doc.querySelector('html');
const addNoteForm = $doc.getElementById('add-note-form');
const addNoteBtn = $doc.querySelector('.add-note-btn');

$doc.addEventListener('click', (event) => {
  if(event.target.classList.contains('add-note-btn')) {
    mainWrap.classList.add('no-scroll');
    addNoteForm.classList.add('active-window');
  }
});