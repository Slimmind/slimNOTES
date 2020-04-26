import checkInput from "./check-input";
import hide from "./hide";
import show from "./show";

export default function toggleFormType() {
    console.log("TYPE: ", vars.currentItemListType);
    if(vars.currentItemListType === "todo") {
        show(vars.DOM.todoList, vars.DOM.todoBlock, vars.DOM.todoFiltersWrap);
        hide(vars.DOM.noteList, vars.DOM.noteBlock, vars.DOM.noteFiltersWrap);
        checkInput(vars.DOM.toggleList.querySelector(`[value="${vars.currentItemListType}"]`));
        checkInput(vars.DOM.toggleForm.querySelector(`[value="${vars.currentItemListType}"]`));
    } else {
        show(vars.DOM.noteList, vars.DOM.noteBlock, vars.DOM.noteFiltersWrap);
        hide(vars.DOM.todoList, vars.DOM.todoBlock, vars.DOM.todoFiltersWrap);
        checkInput(vars.DOM.toggleList.querySelector(`[value="${vars.currentItemListType}"]`));
        checkInput(vars.DOM.toggleForm.querySelector(`[value="${vars.currentItemListType}"]`));
    }
}