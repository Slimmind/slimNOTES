import getFormData from "../helpers/get-form-data";
import closeHandler from "./handler-close";
import clearForm from "../helpers/clear-form";
import setStore from "../helpers/set-store";

export default function editItem(event, DOM, item, arr) {
    event.preventDefault();
    const changedData = getFormData(DOM.itemForm);
    let changedProps = 0;
    console.log("ITEM");
    console.log(item);
    for (const prop in changedData) {
        console.log(`${changedData[prop]}`);
        // if (changedData[prop] !== arr[item.arrayIndex][prop]) {
        //     arr[item.arrayIndex][prop] = changedData[prop];
        //     changedProps += 1;
        //     setStore();
        //     updateItem(item.DOMIndex, arr[item.arrayIndex]);
        //     closeHandler(DOM.windows, 'active-window, edit-form');
        //     clearForm();
        // }
    }
    // if (changedProps > 0) {

    // } else {
    //     closeHandler(DOM.windows, 'active-window');
    //     clearForm();
    // }
}