import getDate from "../helpers/get-date";

export default function getFormData(form) {
    const type = form.querySelector("[name=\"item-type\"]:checked").value;
    console.log("TYPE_TEST: ", type);
    let dataObj
    if (type === "todo") {
        dataObj = {
            itemType: type,
            itemTitle: form.querySelector("[name=\"item-title\"]").value || "...",
            itemText: form.querySelector("[name=\"item-text\"]").value || " ",
            todoExpDate: form.querySelector("[name=\"todo-exp-date\"]").value || getDate(),
            todoStatus: form.querySelector("[name=\"todo-status\"]:checked").value
        }
    } else {
        dataObj = {
            itemType: type,
            itemTitle: form.querySelector("[name=\"item-title\"]").value || "...",
            itemText: form.querySelector("[name=\"item-text\"]").value || "...",
            itemColor: form.querySelector("[name=\"item-color\"]").value
        }
    }
    return dataObj;
}