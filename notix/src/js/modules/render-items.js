import renderItem from "./render-item";

export default function renderItems(DOM, arr) {
    DOM.todoList.innerHTML = '';
    DOM.noteList.innerHTML = '';
    for(const item of arr) {
        renderItem(DOM, item);
    }
}