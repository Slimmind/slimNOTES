import renderItems from "../modules/render-items";

export default function filterTodoHandler(target) {
    let filteredItems = [];
    const cancelBtn = vars.DOM.todoFiltersWrap.querySelector(".cancel-filters");

    if(filteredItems) {
        cancelBtn.classList.remove("hidden");
    }

    if(target.classList.contains("urgent")) {
        filteredItems = vars.tempStore.filter(item => item.todoStatus === "urgent");
    } else if(target.classList.contains("warning")) {
        filteredItems = vars.tempStore.filter(item => item.todoStatus === "warning");
    } else if(target.classList.contains("normal")) {
        filteredItems = vars.tempStore.filter(item => item.todoStatus === "normal");
    } else {
        filteredItems = vars.tempStore.filter(item => item.itemType === "todo");
        cancelBtn.classList.add("hidden");
    }

    renderItems(filteredItems, "todo");
}