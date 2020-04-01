import closeHandler from "./handler-close";
import updateItem from "../helpers/update-item";
import getFormData from "../helpers/get-form-data";
import clearForm from "../helpers/clear-form";
import setStore from "../helpers/set-store";

export default function editItemHandler(event) {
    event.preventDefault();
    const changedData = getFormData(vars.DOM.itemForm);
    let changedProps = 0;
    for (const prop in changedData) {
        console.log("PROP: ", vars.currentItem.arrayData[prop]);
        if (changedData[prop] !== vars.currentItem.arrayData[prop]) {
            vars.tempStore[vars.currentItem.arrayIndex][prop] = changedData[prop];
            changedProps += 1;
        }
    }
    console.log("CHANGED PROPS: ", changedProps);
    if (changedProps > 0) {
            setStore();
            updateItem(changedData);
            closeHandler(vars.DOM.windows, 'active-window, edit-form');
            clearForm();
    } else {
        closeHandler(vars.DOM.windows, 'active-window');
        clearForm();
    }
}