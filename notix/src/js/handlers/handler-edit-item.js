import closeHandler from "./handler-close";
import updateItemHandler from "./handler-update-item";
import getFormData from "../helpers/get-form-data";
import clearForm from "../helpers/clear-form";
import setStore from "../helpers/set-store";

export default function editItem(event) {
    event.preventDefault();
    const changedData = getFormData(vars.DOM.itemForm);
    let changedProps = 0;
    for (const prop in changedData) {
        console.log(`${changedData[prop]}`);
        if (changedData[prop] !== vars.tempStore[vars.currentItem.arrayIndex][prop]) {
            vars.tempStore[vars.currentItem.arrayIndex][prop] = changedData[prop];
            changedProps += 1;
            setStore();
            updateItemHandler(vars.currentItem.DOMIndex, vars.tempStore[vars.currentItem.arrayIndex]);
            closeHandler(vars.DOM.windows, 'active-window, edit-form');
            clearForm();
        }
    }
    if (changedProps > 0) {

    } else {
        closeHandler(vars.DOM.windows, 'active-window');
        clearForm();
    }
}