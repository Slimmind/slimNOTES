import renderItem from "./render-item";

export default function renderItems(arr) {
    console.table(arr);
    vars.DOM.todoList.innerHTML = '';
    vars.DOM.noteList.innerHTML = '';
    for(const item of arr) {
        renderItem(item);
    }
}