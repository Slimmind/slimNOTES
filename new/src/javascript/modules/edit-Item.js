export default function editItem(item) {
    const changedData = getData(DOM.itemForm);
    let changedProps = 0;
    for (let prop in changedData) {
        if (changedData[prop] !== itemArr[item.arrayIndex][prop]) {
            itemArr[item.arrayIndex][prop] = changedData[prop];
            changedProps += 1;
            setStore();
            updateItem(item.DOMIndex, itemArr[item.arrayIndex]);
            closeHandler(DOM.windows, 'active-window, edit-form');
            clearForm();
        }
    }
    if (changedProps > 0) {} else {
        closeHandler(DOM.windows, 'active-window');
        clearForm();
    }
}