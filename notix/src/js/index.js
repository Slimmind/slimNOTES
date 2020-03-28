// TODO: group functions e.g. "handlers", "helpers"...

import "../sass/styles.scss";
import elements from "./modules/elements";
import getItemJSON from "./modules/get-item-json";
import renderItems from "./modules/render-items";
import renderItem from "./modules/render-item";
import serviceMessage from "./modules/service-message";
import resetForm from "./modules/reset-form";
import toggleItemList from "./modules/toggle-item-list";

// HELPERS
import getDate from "./helpers/get-date";
import todoCounter from "./helpers/todo-counter";
import openNav from "./helpers/open-nav";

//HANDLERS
import addItemHandler from "./handlers/handler-add-item";
import createItemHandler from "./handlers/handler-create-item";
import editItem from "./handlers/handler-edit-item";
import openItemHandler from "./handlers/handler-open";
import updateItemHandler from "./handlers/handler-update-item";
import cancelHandler from "./handlers/handler-cancel";
import filterTodoHandler from "./handlers/handler-filter-todo";
import cancelTodoFilters from "./handlers/handler-cancel-todo-filters";
import deleteItemHandler from "./handlers/handler-delete-item";

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
        filteredTodos: []
    };

    renderItems(vars.tempStore);

    toggleItemList(vars.DOM);

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
                
                openItemHandler(event, vars.DOM, vars.tempStore, vars.currentItem);
            }
        });
    };

    // UPDATE ITEM
    vars.DOM.changeItemBtn.addEventListener("click", (event) => updateItemHandler(event));

    // DELETE ITEM
    vars.DOM.deleteItemBtn.addEventListener("click", (event) => deleteItemHandler(event));

    // CANCEL
    vars.DOM.cancelBtn.addEventListener("click", (event) => cancelHandler(event, vars.DOM));

    // MENU BTN
    vars.DOM.menuBtn.addEventListener("click", () => {
        openNav();
        todoCounter(vars.DOM);
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
    vars.DOM.showStorageBtn.addEventListener("click", serviceMessage("success", "Test Message", "lorem ipsum dolor sit amet"));

})(window, document, window.localStorage);