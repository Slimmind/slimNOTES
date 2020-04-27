import checkInput from "./check-input";
import hide from "./hide";
import show from "./show";
import renderItems from "../modules/render-items"

export default function toggleFormType() {
    vars.DOM.searchField.value = "";
    
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

    const items = vars.tempStore.filter(item => item.itemType === vars.currentItemListType);
    const renderedItems = document.querySelectorAll(`.item.${vars.currentItemListType}`);

    console.log(`${items.length} === ${renderedItems.length}`);

    if(items.length !== renderedItems.length) {
        console.log("=^..^=");
        renderItems(items);
    }
}