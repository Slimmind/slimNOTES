import setStore from "../helpers/set-store";
import generateID from '../helpers/generate-id';
import getFormData from '../helpers/get-form-data';
import getDate from "../helpers/get-date";
import renderItem from '../modules/render-item';
import closeHandler from './handler-close';

export default function createHandlerItem() {
    let fullItemData = {};

    if (vars.DOM.itemForm.itemType === 'todo') {
        fullItemData = {
            ...getFormData(vars.DOM.itemForm),
            itemId: generateID(),
            itemCreationDate: getDate(),
            todoDone: false
        };
    } else {
        fullItemData = {
            ...getFormData(vars.DOM.itemForm),
            itemId: generateID(),
            itemCreationDate: getDate(),
        };
    }

    vars.tempStore.push(fullItemData);
    setStore();
    renderItem(fullItemData);
    closeHandler(vars.DOM.windows, 'active-window, todo-form, create-form');
}