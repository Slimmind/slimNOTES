import fillForm from '../helpers/fill-form';

export default function openHandler(event, DOM, itemArr, curItem) {
    const targetItem = event.target;
    const id = event.target.getAttribute('id');
    const arrayIndex = itemArr.findIndex((item) => item.itemId === id);

    console.log(curItem);

    curItem = {
        itemType: itemArr[arrayIndex].itemType,
        id: id,
        parentList: targetItem.parentNode,
        DOMIndex: [...targetItem.parentNode.querySelectorAll('.item')].indexOf(targetItem),
        arrayIndex,
        arrayData: itemArr[arrayIndex],
    };
    console.log("CUR_ITEM: ", curItem);

    DOM.itemForm.classList.add('edit-form');
    if (curItem.arrayData.itemType === 'todo') {
        DOM.itemForm.classList.add('todo-form');
    }

    fillForm(DOM, curItem.arrayData);
}