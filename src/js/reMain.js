(function (window, document, store) {

  const Selectors = {
    mainWrap: 'html',
    window: '.window',
    addNoteForm: '#add-note-form',
    editNoteForm: '#edit-note-form',
    notesList: '.note-list',
    note: '.note',
    noteTitle: '.note-title',
    noteText: '.note-text',
    noteDate: '.note-date',

    inputTitle: '[name="note-title"]',
    inputText: '[name="note-text"]',
    inputExpDate: '[name="note-exp-date"]',
    inputStatus: '[name="note-status"]:checked',

    addNoteBtn: '.add-note-btn',
    cancelBtn: '.cancel-btn',
    listBtn: '.list-btn',
    cleanBtn: '.clean-btn',
    deleteBtn: '.delete-btn',
    changeBtn: '.change-btn',
    createBtn: '.create-btn',

  }

  //VARS
  let noteArr = (store.length > 0) ? JSON.parse(store.getItem('notes')) : [];
  const dateData = new Date();
  const month = parseInt(dateData.getMonth() + 1) < 10 ? `0${parseInt(dateData.getMonth()+1)}` : parseInt(dateData.getMonth() + 1);
  const day = dateData.getDate() < 10 ? `0${dateData.getDate()}` : dateData.getDate();
  const dateString = `${dateData.getFullYear()}-${month}-${day}`;
  let noteId = '';
  let noteIndex = 0;

  // NOTE
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
      const changedData = getData(Selectors.editNoteForm);
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
      const note = notesList.querySelectorAll(Selectors.note)[noteIndex];
      note.querySelector(Selectors.noteTitle).textContent = noteData.noteTitle;
      note.querySelector(Selectors.noteText).textContent = noteData.noteText;
      note.querySelector(Selectors.noteDate).textContent = noteData.noteExpDate;
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

  // FORM
  const form = {
    clear() {
      const forms = $doc.querySelectorAll('form');
      [...forms].forEach(form => form.reset());
    },

    fill(obj) {
      editNoteForm.querySelector(Selectors.inputTitle).value = obj.noteTitle;
      editNoteForm.querySelector(Selectors.inputText).value = obj.noteText;
      editNoteForm.querySelector(Selectors.inputExpDate).value = obj.noteExpDate;
      editNoteForm.classList.add('active-window');
      const checkBoxes = editNoteForm.querySelectorAll(Selectors.inputStatus);
      [...checkBoxes].forEach((checkBox) => {
        if (checkBox.value === obj.noteStatus) {
          checkBox.checked = true;
        } else {
          checkBox.checked = false;
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

  // CONTROLLER
  const controller = function() {
    const setupEventListeners = function() {
      // ADD NOTE (opens AddNote form)
      document.querySelector(Selectors.addNoteBtn).addEventListener('click', () => {
        mainWrap.classList.add('no-scroll');
        addNoteForm.classList.add('active-window');
      });

      // CANCEL
      document.querySelector(Selectors.cancelBtn).addEventListener('click', (event) => {
        event.preventDefault();
        closeHandler(windows, 'active-window');
      });

      // CREATE NOTE
      document.querySelector(Selctors.createBtn).addEventListener('click', (event) => {
        event.preventDefault();
        const fullNoteData = {...getData(Selectors.addNoteForm), noteId: generateId(), noteCreationDate: getCreationDate(), noteDone: false};
        noteArr.push(fullNoteData);
        setStore();
        renderNote(fullNoteData);
        closeHandler(windows, 'active-window');
      });

      // OPEN NOTE
      document.querySelector(Selectors.note).addEventListener('click', () => {
        mainWrap.classList.add('no-scroll');
        openNoteHandler(event);
      });

      // EDIT NOTE
      document.querySelector(Selectors.changeBtn).addEventListener('click', () => {
        event.preventDefault();
        editNote(noteId);
      });

      // CHECK NOTE AS DONE
      document.querySelector(Selectors.checkBtn).addEventListener('click', () => {
        checkDone(event);
      }); 

      // DELETE NOTE
      document.querySelector(Selectors.deleteBtn).addEventListener('click', () => {
        deleteNoteHandler(event, noteId);
      });

      // CONSOLE LIST of NOTES
      document.querySelector(Selectors.listBtn).addEventListener('click', () => {
        console.warn('NOTES: ', noteArr);
      });

      // CLEAR STORE
      document.querySelector(Selectors.cleanBtn).addEventListener('click', () => {
        clearStore();
      }); 
    }

    return {
      init: function() {
        console.log('App has started!');
        setupEventListeners();
      }
    };
  }
  controller.init();
})(window, document, window.localStorage);