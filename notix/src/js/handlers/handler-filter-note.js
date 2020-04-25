import renderItems from "../modules/render-items";

export default function filterNoteHandler(target) {
    let filteredItems = [];

    if(target.classList.contains("filter") && !target.classList.contains("cancel-filters")) {
        const color = target.getAttribute("data-color");
        filteredItems = vars.tempStore.filter(item => item.itemColor === color);
    } else {
        filteredItems = vars.tempStore.filter(item => item.itemType === "note");
    }

    renderItems(filteredItems, "note");
}