import renderItem from "./render-item";
import renderTodo from "./render-todo";
import renderNote from "./render-note";

export default function renderItems(arr, itemType) {
    console.table(arr);
    if(itemType) {
        if(itemType === "todo") {
            vars.DOM.todoList.innerHTML = '';
            for(const item of arr) {
                renderTodo(item);
            }
        } else {
            vars.DOM.noteList.innerHTML = '';
            for(const item of arr) {
                renderNote(item);
            }
        }
    } else {
        vars.DOM.todoList.innerHTML = '';
        vars.DOM.noteList.innerHTML = '';
        for(const item of arr) {
            renderItem(item);
        }
    }
}