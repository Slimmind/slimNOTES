import '../sass/styles.scss';
import elements from "./modules/elements";
import generateID from "./modules/generate-id"
import getDate from "./modules/get-date";
import getItemJSON from "./modules/get-item-json";
import getFormData from "./modules/get-form-data";
import fillForm from "./modules/fill-form";
import editItem from "./modules/edit-item";
import updateItem from "./modules/update-item";
import renderItems from "./modules/render-items";
import renderItem from "./modules/render-item";
import serviceMessage from "./modules/service-message";
import closeHandler from "./modules/close-handler";
import openHandler from "./modules/open-handler";
import resetForm from "./modules/reset-form";
import setStore from "./modules/set-store";
import cleanStore from "./modules/clean-store";
import checkOverDue from "./modules/check-over-due";
import checkDone from "./modules/check-done";


(function (window, document, store) {
    const todo = {
        itemType: "todo",
        itemId: "1234",
        todoStatus: "normal",
        itemTitle: "Test Title",
        itemText: "Test ToDo text",
        todoExpDate: "2020-02-25",
        todoDone: false

    };
    const DOM = elements(document);

    let tempStore= (store.length > 0) ? JSON.parse(store.getItem('items')) : []; // itemArr
    
    let currentItem = {
        id: '',
        parentList: '',
        DOMIndex: '',
        arrayIndex: '',
        arrayData: {}
    };

    console.log("TEST: ");

    renderItem(todo, DOM);
})(window, document, window.localStorage);