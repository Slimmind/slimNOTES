import fillForm from '../helpers/fill-form';

export default function openItemHandler(event) {
    console.log("TYPE: ", vars.currentItemListType);
    const targetItem = event.target;
    const id = event.target.getAttribute('id');
    const arrayIndex = vars.tempStore.findIndex((item) => item.itemId === id);

    vars.currentItem = {
        itemType: vars.tempStore[arrayIndex].itemType,
        id: id,
        parentList: targetItem.parentNode,
        DOMIndex: [...targetItem.parentNode.querySelectorAll('.item')].indexOf(targetItem),
        arrayIndex,
        arrayData: vars.tempStore[arrayIndex],
    };

    vars.DOM.itemForm.classList.add('edit-form', `${vars.currentItemListType}-form`);

    fillForm(vars.currentItem.arrayData);
}