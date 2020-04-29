// TODO: group functions e.g. "handlers", "helpers"...

import "../sass/styles.scss";
import elements from "./modules/elements";
import renderItems from "./modules/render-items";
import serviceMessage from "./modules/service-message";

// HELPERS
import todoCounter from "./helpers/todo-counter";
import openNav from "./helpers/open-nav";
import toggleFormType from "./helpers/toggle-form-type";

//HANDLERS
import addItemHandler from "./handlers/handler-add-item";
import createItemHandler from "./handlers/handler-create-item";
import openItemHandler from "./handlers/handler-open-item";
import editItemHandler from "./handlers/handler-edit-item";
import cancelHandler from "./handlers/handler-cancel";
import filterTodoHandler from "./handlers/handler-filter-todo";
import filterNoteHandler from "./handlers/handler-filter-note";
import deleteItemHandler from "./handlers/handler-delete-item";
import checkDoneHandler from "./handlers/handler-check-done";
import handlerSearch from "./handlers/handler-search";

(function (window, document, store) {
    window.vars = window.vars || {};
    vars = {...vars, 
        DOM: elements(document),
        currentItem: {
            itemType: "",
            id: "",
            parentList: "",
            DOMIndex: "",
            arrayIndex: "",
            arrayData: {}
        },
        tempStore: store.getItem("items") ? JSON.parse(store.getItem("items")) : [],
        filteredTodos: [],
        currentItemListType: "todo"
    };

    renderItems(vars.tempStore);

    // ADD ITEM (opens AddITEM form)
    vars.DOM.addItemBtn.addEventListener("click", () => addItemHandler(vars.DOM));

    // CREATE ITEM
    vars.DOM.createItemBtn.addEventListener("click", (event, store) => {
        event.preventDefault();
        createItemHandler(vars.DOM, vars.tempStore);
    });

    // OPEN ITEM
    for(const list of [...vars.DOM.itemsList]) {
        list.addEventListener("click", event => {
            if (event.target.classList.contains("item")) {
                vars.DOM.html.classList.add("no-scroll");
                openItemHandler(event);
            }
        });
    };

    // EDIT ITEM
    vars.DOM.changeItemBtn.addEventListener("click", event => editItemHandler(event));

    // DELETE ITEM
    vars.DOM.deleteItemBtn.addEventListener("click", event => deleteItemHandler(event));

    // CANCEL
    for(const btn of vars.DOM.cancelBtn) {
        btn.addEventListener("click", event => cancelHandler(event));
    }

    // MENU BTN
    vars.DOM.menuBtn.addEventListener("click", () => {
        openNav();
        todoCounter();
    });

    // TODO FILTERS
    vars.DOM.todoFiltersWrap.addEventListener("click", event => {
        filterTodoHandler(event.target);
    });

    // NOTE FILTERS
    vars.DOM.noteFiltersWrap.addEventListener("click", event => {
        filterNoteHandler(event.target);
    });

    // SHOW STORAGE
    vars.DOM.showStorageBtn.addEventListener("click", () => {
        console.log("STORAGE");
        serviceMessage("success", "Local Storage", vars.tempStore);
    });

    // CHECK DONE
    vars.DOM.todoList.addEventListener("click", event => checkDoneHandler(event.target));

    // CHOOSE LIST TYPE
    for (const input of vars.DOM.toggleList.querySelectorAll("input")) {
        input.addEventListener("change", event => {
            vars.currentItemListType = event.target.value;
            toggleFormType();
        });
    };

    // CHOOSE FORM TYPE
    for (const input of vars.DOM.toggleForm.querySelectorAll("input")) {
        input.addEventListener("change", event => {
            vars.currentItemListType = event.target.value;
            toggleFormType();
        });
    };

    // CALL SERVICE MESSAGE
    vars.DOM.callServiceBtn.addEventListener("click", () => serviceMessage());

    // SEARCH
    vars.DOM.searchField.addEventListener("keyup", event => handlerSearch(event));

})(window, document, window.localStorage);