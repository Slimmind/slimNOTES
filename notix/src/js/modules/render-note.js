export default function renderNote(obj) {
    let item = `<div class="item note " id="${obj.itemId}">
    <div class="bg" style="background-color: ${obj.itemColor}"></div>
    <h3 class="item-title">${obj.itemTitle}</h3>
    <p class="item-text">${obj.itemText}</p>
    </div>`;

    vars.DOM.noteList.insertAdjacentHTML('beforeend', item);
}