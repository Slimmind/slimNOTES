import checkOverDue from "./check-over-due";

export default function renderItem(DOM, obj) {
    let item = '';
    if (obj.itemType === "todo") {
        item = `<div class="item todo ${obj.todoStatus} ${(obj.todoDone) ? 'done' : null} ${checkOverDue(obj)}"
        id="${obj.itemId}"
        data-todo-symbol="${obj.itemTitle.charAt(0)}">
            <h3 class="item-title">${obj.itemTitle}</h3>
            ${obj.itemText ? '<p class="item-text">' + obj.itemText + '</p>' : ''}
            <small class="todo-date">${obj.todoExpDate.split('-').reverse().join('-')}</small>
            <span class="check-btn"></span>
        </div>
        `;
        DOM.todoList.insertAdjacentHTML('beforeend', item);
    } else {
        item = `<div class="item note " id="${obj.itemId}" style="background-color: ${obj.itemColor}">
        <h3 class="item-title">${obj.itemTitle}</h3>
        <p class="item-text">${obj.itemText}</p>
        </div>`;
        DOM.noteList.insertAdjacentHTML('beforeend', item);
    }
}