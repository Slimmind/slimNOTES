import setStore from "../helpers/set-store";
import generateID from '../helpers/generate-id';
import getFormData from '../helpers/get-form-data';
import getDate from "../helpers/get-date";
import renderItem from '../modules/render-item';
import closeHandler from './handler-close';

export default function createHandlerItem(DOM, tempStore) {
    let fullItemData = {};

    if (DOM.itemForm.itemType === 'todo') {
        fullItemData = {
            ...getFormData(DOM.itemForm),
            itemId: generateID(),
            itemCreationDate: getDate(),
            todoDone: false
        };
    } else {
        fullItemData = {
            ...getFormData(DOM.itemForm),
            itemId: generateID(),
            itemCreationDate: getDate(),
        };
    }

    tempStore.push(fullItemData);
    setStore(tempStore);
    renderItem(DOM, fullItemData);
    closeHandler(DOM, DOM.windows, null, 'active-window, todo-form, create-form');
}