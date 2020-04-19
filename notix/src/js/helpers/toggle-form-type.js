import checkInput from "./check-input";
import hide from "./hide";
import show from "./show";

export default function toggleFormType() {
    if(vars.currentItemListType === "todo") {
        show(vars.DOM.todoList, vars.DOM.todoBlock);
        hide(vars.DOM.noteList, vars.DOM.noteBlock);
        checkInput(vars.DOM.toggleList.querySelector(`[value="${vars.currentItemListType}"]`));
        checkInput(vars.DOM.toggleForm.querySelector(`[value="${vars.currentItemListType}"]`));
    } else {
        show(vars.DOM.noteList, vars.DOM.noteBlock);
        hide(vars.DOM.todoList, vars.DOM.todoBlock);
        checkInput(vars.DOM.toggleList.querySelector(`[value="${vars.currentItemListType}"]`));
        checkInput(vars.DOM.toggleForm.querySelector(`[value="${vars.currentItemListType}"]`));
    }
}