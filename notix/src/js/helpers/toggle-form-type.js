import checkInput from "./check-input";

export default function toggleFormType() {
    if(vars.currentItemListType === "todo") {
        vars.DOM.todoList.classList.remove("hidden");
        vars.DOM.noteList.classList.add("hidden");
        vars.DOM.todoBlock.classList.remove("hidden");
        vars.DOM.noteBlock.classList.add("hidden");
        checkInput(vars.DOM.toggleType.querySelector(`[value="${vars.currentItemListType}"]`));
    } else {
        vars.DOM.todoList.classList.add("hidden");
        vars.DOM.noteList.classList.remove("hidden");
        vars.DOM.todoBlock.classList.add("hidden");
        vars.DOM.noteBlock.classList.remove("hidden");
        checkInput(vars.DOM.toggleType.querySelector(`[value="${vars.currentItemListType}"]`));
    }
}