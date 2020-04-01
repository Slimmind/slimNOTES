import checkOverDue from "../helpers/check-over-due";

export default function renderTodo(obj, itemsList) {
    let item = `<div class="item todo ${obj.todoStatus} ${(obj.todoDone) ? 'done' : null} ${checkOverDue(obj)}"
        id="${obj.itemId}"
        data-todo-symbol="${obj.itemTitle.charAt(0)}">
            <h3 class="item-title">${obj.itemTitle}</h3>
            ${obj.itemText ? '<p class="item-text">' + obj.itemText + '</p>' : ''}
            <small class="todo-date">${obj.todoExpDate.split('-').reverse().join('-')}</small>
            <span class="check-btn"></span>
        </div>
        `;
    if(itemsList === "filter") {
        vars.DOM.filterList.insertAdjacentHTML("beforeend", item);
    } else {
        vars.DOM.todoList.insertAdjacentHTML("beforeend", item);
    }
}