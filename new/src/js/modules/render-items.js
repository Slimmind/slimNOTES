export default function renderItems(elements, arr) {
    elements.todoList.innerHTML = '';
    elements.noteList.innerHTML = '';
    // arr.forEach((item) => {
    //     renderItem(item);
    // });
    for(item of arr) {
        renderItem(item);
    }
}