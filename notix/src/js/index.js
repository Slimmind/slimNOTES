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
import cancelTodoFilters from "./handlers/handler-cancel-todo-filters";
import deleteItemHandler from "./handlers/handler-delete-item";
import checkDoneHandler from "./handlers/handler-check-done";

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
        list.addEventListener("click", (event) => {
            if (event.target.classList.contains("item")) {
                vars.DOM.html.classList.add("no-scroll");
                openItemHandler(event);
            }
        });
    };

    // EDIT ITEM
    vars.DOM.changeItemBtn.addEventListener("click", (event) => editItemHandler(event));

    // DELETE ITEM
    vars.DOM.deleteItemBtn.addEventListener("click", (event) => deleteItemHandler(event));

    // CANCEL
    vars.DOM.cancelBtn.addEventListener("click", (event) => cancelHandler(event, vars.DOM));

    // MENU BTN
    vars.DOM.menuBtn.addEventListener("click", () => {
        openNav();
        todoCounter();
    });

    // TODO FILTERS
    for(const filter of vars.DOM.todoFilters) {
        filter.addEventListener("click", (event) => {
            filterTodoHandler(event.target);
        });
    }

    // CANCEL FILTERS
    vars.DOM.cancelTodoFilters.addEventListener("click", cancelTodoFilters);

    // SHOW STORAGE
    vars.DOM.showStorageBtn.addEventListener("click", () => {
        console.log("STORAGE");
        serviceMessage("success", "Test Message", "lorem ipsum dolor sit amet");
    });

    // CHECK DONE
    vars.DOM.todoList.addEventListener("click", event => checkDoneHandler(event.target));

    // CHOOSE LIST TYPE
    for (const input of vars.DOM.listTypeInput) {
        input.addEventListener("change", (event) => {
            vars.currentItemListType = event.target.value;
            toggleFormType();
        });
    };

    // CHOOSE FORM TYPE
    for (const input of vars.DOM.formTypeInput) {
        input.addEventListener("change", (event) => {
            vars.currentItemListType = event.target.value;
            toggleFormType();
        });
    };

})(window, document, window.localStorage);