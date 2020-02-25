export default function openHandler(event, DOM, currentItem, fillForm) {
    const targetItem = event.target;
    const id = event.target.getAttribute('id');
    const arrayIndex = itemArr.findIndex((item) => item.itemId === id);

    currentItem = {
        id: id,
        parentList: targetItem.parentNode,
        DOMIndex: [...targetItem.parentNode.querySelectorAll('.item')].indexOf(targetItem),
        arrayIndex,
        arrayData: itemArr[arrayIndex],
    };
    console.log("ID: ", currentItem);

    DOM.itemForm.classList.add('edit-form');
    if (currentItem.arrayData.itemType === 'todo') {
        DOM.itemForm.classList.add('todo-form');
    }

    fillForm(currentItem.arrayData);
}