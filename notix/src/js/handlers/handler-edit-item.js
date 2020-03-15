import getFormData from "../helpers/get-form-data";
import closeHandler from "./handler-close";
import clearForm from "../helpers/clear-form";
import setStore from "../helpers/set-store";

export default function editItem(event, item, itemArr) {
    event.preventDefault();
    const changedData = getFormData(DOM.itemForm);
    let changedProps = 0;
    for (let prop in changedData) {
        if (changedData[prop] !== itemArr[item.arrayIndex][prop]) {
            itemArr[item.arrayIndex][prop] = changedData[prop];
            changedProps += 1;
            setStore();
            updateItem(item.DOMIndex, itemArr[item.arrayIndex]);
            closeHandler(DOM.windows, 'active-window, edit-form');
            clearForm();
        }
    }
    if (changedProps > 0) {} else {
        closeHandler(DOM.windows, 'active-window');
        clearForm();
    }
}