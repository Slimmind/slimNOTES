import fillForm from '../helpers/fill-form';

export default function openHandler(event, DOM, itemArr, currentItem) {
    const targetItem = event.target;
    const id = event.target.getAttribute('id');
    const arrayIndex = itemArr.findIndex((item) => item.itemId === id);

    currentItem = {
        itemType: itemArr[arrayIndex].itemType,
        id: id,
        parentList: targetItem.parentNode,
        DOMIndex: [...targetItem.parentNode.querySelectorAll('.item')].indexOf(targetItem),
        arrayIndex,
        arrayData: itemArr[arrayIndex],
    };
    console.log("CUR_ITEM: ", currentItem);

    DOM.itemForm.classList.add('edit-form');
    if (currentItem.arrayData.itemType === 'todo') {
        DOM.itemForm.classList.add('todo-form');
    }

    fillForm(DOM, currentItem.arrayData);
    return currentItem;
}