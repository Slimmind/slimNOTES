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

//HANDLERS
import addItemHandler from "./handlers/handler-add-item";
import createItemHandler from "./handlers/handler-create-item";
import editItem from "./handlers/handler-edit-item";
import openItemHandler from "./handlers/handler-open";
import updateItem from "./handlers/handler-update-item";
import cancelHandler from "./handlers/handler-cancel";

(function (window, document, store) {
    // const todo = {
    //     itemType: "todo",
    //     itemId: "1234",
    //     todoStatus: "normal",
    //     itemTitle: "Test Title",
    //     itemText: "Test ToDo text",
    //     todoExpDate: "2020-02-25",
    //     todoDone: false
    // };

    let currentItem = {
        itemType: "",
        id: "",
        parentList: "",
        DOMIndex: "",
        arrayIndex: "",
        arrayData: {}
    };

    let tempStore = store.getItem("items") ? JSON.parse(store.getItem("items")) : []; // itemArr
    console.log("TEMP_STORE: ", tempStore);
    
    window.vars = window.vars || {};
    vars = {...vars, 
        DOM: elements(document),
        currentItem,
        tempStore
    };

    // const DOM = elements(document);

    

    renderItems(vars.DOM, vars.tempStore);

    console.table(vars.tempStore);

    // renderItem(todo, DOM);

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
                console.log("STORE: ", vars.tempStore);
                
                openItemHandler(event, vars.DOM, vars.tempStore, vars.currentItem);
            }
        });
    };

    // EDIT ITEM
    vars.DOM.changeItemBTn.addEventListener("click", (event) => editItem(event, vars.DOM, vars.currentItem, vars.tempStore));

    // UPDATE ITEM

    // DELETE ITEM

    // CANCEL
    vars.DOM.cancelBtn.addEventListener("click", (event) => cancelHandler(event, vars.DOM));

    // MENU BTN
    vars.DOM.menuBtn.addEventListener("click", () => {
        vars.DOM.navPanel.classList.toggle("menu-is-open");
        todoCounter(vars.DOM);
    });


})(window, document, window.localStorage);