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
    const DOM = elements(document);

    let tempStore = store.getItem("items") ? JSON.parse(store.getItem("items")) : []; // itemArr
    console.log("TEMP_STORE: ", tempStore);

    renderItems(DOM, tempStore);

    let currentItem = {
        itemType: "",
        id: "",
        parentList: "",
        DOMIndex: "",
        arrayIndex: "",
        arrayData: {}
    };

    console.table(tempStore);

    // renderItem(todo, DOM);

    toggleItemList(DOM);

    // ADD ITEM (opens AddITEM form)
    DOM.addItemBtn.addEventListener("click", () => addItemHandler(DOM));

    // CREATE ITEM
    DOM.createItemBtn.addEventListener("click", (event, store) => {
        event.preventDefault();
        createItemHandler(DOM, tempStore);
    });

    // OPEN ITEM
    for(const list of [...DOM.itemsList]) {
        list.addEventListener("click", (event) => {
            if (event.target.classList.contains("item")) {
                DOM.html.classList.add("no-scroll");
                console.log("STORE: ", tempStore);
                openItemHandler(event, DOM, tempStore, currentItem);
            }
        });
    };

    // EDIT ITEM
    DOM.changeItemBTn.addEventListener("click", (event) => editItem(event, DOM, currentItem, tempStore));

    // UPDATE ITEM

    // DELETE ITEM

    // CANCEL
    DOM.cancelBtn.addEventListener("click", (event) => cancelHandler(event, DOM));


})(window, document, window.localStorage);