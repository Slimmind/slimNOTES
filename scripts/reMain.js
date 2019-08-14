(function (window, document, store) {

  const Selectors = {
    mainWrap: 'html',
    addNoteForm: 'add-note-form',
    editNoteForm: 'edit-note-form'
  }

  const mainWrap = document.querySelector('html');
  const addNoteForm = document.getElementById('add-note-form');
  const editNoteForm = document.getElementById('edit-note-form');
  const addNoteBtn = document.querySelector('.add-note-btn');
  const notesList = document.querySelector('.notes-list');
  const windows = document.querySelectorAll('.window');
  let noteArr = (store.length > 0) ? JSON.parse(store.getItem('notes')) : [];
  const dateData = new Date();
  const month = parseInt(dateData.getMonth() + 1) < 10 ? `0${parseInt(dateData.getMonth()+1)}` : parseInt(dateData.getMonth() + 1);
  const day = dateData.getDate() < 10 ? `0${dateData.getDate()}` : dateData.getDate();
  const dateString = `${dateData.getFullYear()}-${month}-${day}`;
  let noteId = '';
  let noteIndex = 0;

  const note = {
    renderSingle(obj) {
      const note = $doc.createElement('div');
      const noteTitle = $doc.createElement('h3');
      const noteTitleValue = $doc.createTextNode(obj.noteTitle);
      const done = obj.noteDone;
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
      note.classList.add('note', obj.noteStatus, (done) ? 'done' : null, checkOverDue(obj));
      note.setAttribute('id', obj.noteId);
      note.setAttribute('data-note-symbol', noteSymbol);

      template.appendChild(noteTitle);
      template.appendChild(noteText);
      template.appendChild(noteExpDate);
      template.appendChild(checkBtn);

      note.appendChild(template);

      notesList.appendChild(note);
    },
    renderGroup(arr) {
      notesList.innerHTML = '';
      arr.forEach((item) => {
        renderNote(item);
      });
    },
    open(event) {
      noteId = event.target.getAttribute("id");
      fillForm(getNoteFromArray(noteId));
    },
    edit(editingNoteId) {
      const editingNoteIndex = noteArr.indexOf(getNoteFromArray(editingNoteId));
      const changedData = getData('#edit-note-form');
      let changedProps = 0;
      for (let prop in changedData) {
        if (changedData[prop] !== noteArr[editingNoteIndex][prop]) {
          noteArr[editingNoteIndex][prop] = changedData[prop];
          changedProps += 1;
          setStore();
          updateNote(editingNoteIndex, noteArr[editingNoteIndex]);
          closeHandler(windows, 'active-window');
          clearForm();
        }
      }
      if (changedProps > 0) {} else {
        closeHandler(windows, 'active-window');
        clearForm();
      }
    },
    update(noteIndex, noteData) {
      const note = notesList.querySelectorAll('.note')[noteIndex];
      note.querySelector('.note-title').textContent = noteData.noteTitle;
      note.querySelector('.note-text').textContent = noteData.noteText;
      note.querySelector('.note-date').textContent = noteData.noteExpDate;
      note.setAttribute('class', `note ${noteData.noteStatus} ${checkOverDue(noteData)}`);
      note.setAttribute('data-note-symbol', noteData.noteTitle.charAt(0));
    },
    delete(event, noteId) {
      event.preventDefault();
      if (!noteId) return;
      noteArr = noteArr.filter((note) => {
        return note.noteId !== noteId;
      });
      $doc.getElementById(noteId).remove();
      closeHandler(windows, 'active-window');
    }
  }

  const form = {
    clear() {
      const forms = $doc.querySelectorAll('form');
      [...forms].forEach(form => form.reset());
    },

    fill(obj) {
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
    },
  }

  const noteStore = {
    write() {
      store.setItem("notes", JSON.stringify(noteArr));
    },
    clear() {
      store.clear();
    }
  }

  const controller = function() {
    const setupEventListeners = function() {

    }

    return {
      init: function() {
        console.log('App has started!');
        setupEventListeners();
    }
  };
  controller.init();
})(window, document, window.localStorage);