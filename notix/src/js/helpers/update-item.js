import checkOverDue from "./check-over-due";

export default function updateItem(itemData) {
    const type = vars.currentItem.itemType;
    const item = (type === "todo") ?
        vars.DOM.todos[vars.currentItem.DOMIndex] :
        vars.DOM.notes[vars.currentItem.DOMIndex];

    item.querySelector(".item-title").textContent = itemData.itemTitle;
    item.querySelector(".item-text").textContent = itemData.itemText;
    if (type === "todo") {
        item.querySelector(".todo-date").textContent = itemData.todoExpDate;
        item.setAttribute("class", `item todo ${itemData.todoStatus} ${checkOverDue(itemData)}`);
        item.setAttribute("data-todo-symbol", itemData.itemTitle.charAt(0));
    } else {
        item.querySelector(".bg").style.backgroundColor = itemData.itemColor;
    }
}