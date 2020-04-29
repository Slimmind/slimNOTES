import renderItems from "../modules/render-items";

export default function filterNoteHandler(target) {
    let filteredItems = [];

    if(target.classList.contains("filter") && !target.classList.contains("cancel-filters")) {
        const color = target.getAttribute("data-color");
        filteredItems = vars.tempStore.filter(item => item.itemColor === color);
        vars.DOM.noteFiltersWrap.querySelector(".cancel-filters").classList.remove("hidden");
    } else {
        filteredItems = vars.tempStore.filter(item => item.itemType === "note");
        vars.DOM.noteFiltersWrap.querySelector(".cancel-filters").classList.add("hidden");
    }

    renderItems(filteredItems, "note");
}