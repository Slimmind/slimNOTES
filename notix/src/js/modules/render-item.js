import renderTodo from "./render-todo";
import renderNote from "./render-note";

export default function renderItem(obj, itemsList) {
    if(obj.itemType === "todo") {
        renderTodo(obj, itemsList);
    } else {
        renderNote(obj);
    }
}