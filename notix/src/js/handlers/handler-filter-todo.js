import closeNav from "../helpers/close-nav";
import renderItems from "../modules/render-items";
import hide from "../helpers/hide"
import show from "../helpers/show";

export default function filterTodoHandler(target) {
    let filteredItems = [];
    for(const list of vars.DOM.itemsList) {
        hide(list);
    }
    vars.DOM.filterList.innerHTML = "";
    show(vars.DOM.filterList);

    closeNav();

    if(target.classList.contains("urgent")) {
        filteredItems = vars.tempStore.filter(item => item.todoStatus === "urgent");
    } else if(target.classList.contains("warning")) {
        filteredItems = vars.tempStore.filter(item => item.todoStatus === "warning");
    } else {
        filteredItems = vars.tempStore.filter(item => item.todoStatus === "normal");
    }

    renderItems(filteredItems, "filter");
    console.log("FILTERED: ", vars.tempStore);
    console.log(filteredItems);
}