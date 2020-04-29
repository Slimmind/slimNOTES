export default function fillForm(obj) {
    vars.DOM.itemForm.querySelector(`[value="${obj.itemType}"]`).checked = true;
    vars.DOM.itemForm.querySelector("[name=\"item-title\"]").value = obj.itemTitle;
    vars.DOM.itemForm.querySelector("[name=\"item-text\"]").value = obj.itemText;
    vars.DOM.itemForm.querySelector("[name=\"todo-exp-date\"]").value = obj.todoExpDate;
    vars.DOM.itemForm.classList.add("active-window");
    const checkboxes = vars.DOM.itemForm.querySelectorAll("[name=\"todo-status\"]");
    [...checkboxes].forEach(checky => {
        checky.checked = checky.value === obj.todoStatus;
    });
}