import show from "../helpers/show";
import hide from "../helpers/hide";
import renderItems from "../modules/render-items";

export default function cancelTodoFilters() {
    hide(vars.DOM.filterList);
    show(vars.DOM.todoList);
    renderItems(vars.tempStore);
}