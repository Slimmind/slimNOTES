export default function checkDone(elem, setStore, itemArr) {
    const todo = elem.parentNode;
    const itemArrayIndex = itemArr.indexOf(getNoteFromArray(todo.getAttribute('id')));
    itemId = todo.getAttribute("id");
    todo.classList.toggle('done');
    itemArr[itemArrayIndex].todoDone = !itemArr[itemArrayIndex].todoDone;
    setStore(store, itemArr);
}