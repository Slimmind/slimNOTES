import renderTodo from "./render-todo";
import renderNote from "./render-note";

export default function renderItem(obj) {
    console.log("OBJ: ", obj);
    if(obj.itemType === "todo") {
        renderTodo(obj);
    } else {
        renderNote(obj);
    }
}