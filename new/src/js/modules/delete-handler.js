export default function deleteItemHandler(event, DOM, itemArr, currentItem, setStore, closeHandler) {
    event.preventDefault();
    itemArr = itemArr.filter((note) => {
        return note.itemId !== currentItem.id;
    });
    setStore();
    currentItem.parentList.removeChild(document.getElementById(currentItem.id));
    closeHandler(DOM.windows, 'active-window');
}