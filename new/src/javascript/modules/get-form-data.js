export default function getData(form) {
    const type = form.querySelector('[name="item-type"]:checked').value;
    let dataObj
    if (type === 'todo') {
        dataObj = {
            itemType: type,
            itemTitle: form.querySelector('[name="item-title"]').value || '...',
            itemText: form.querySelector('[name="item-text"]').value || null,
            todoExpDate: form.querySelector('[name="todo-exp-date"]').value || dateString,
            todoStatus: form.querySelector('[name="todo-status"]:checked').value
        }
    } else {
        dataObj = {
            itemType: type,
            itemTitle: form.querySelector('[name="item-title"]').value || '...',
            itemText: form.querySelector('[name="item-text"]').value || '...',
            itemColor: form.querySelector('[name="item-color"]').value
        }
    }
    return dataObj;
}