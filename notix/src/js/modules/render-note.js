export default function renderNote(obj) {
    let item = `<div class="item note " id="${obj.itemId}" style="background-color: ${obj.itemColor}">
    <h3 class="item-title">${obj.itemTitle}</h3>
    <p class="item-text">${obj.itemText}</p>
    </div>`;

    vars.DOM.noteList.insertAdjacentHTML('beforeend', item);
}