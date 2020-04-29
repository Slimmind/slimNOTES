import renderItems from "../modules/render-items";

export default function searchHandler(event) {
    if(event.target.value.length > 0) {
        vars.DOM.addItemBtn.classList.add("clear-search-field");
    } else {
        vars.DOM.addItemBtn.classList.remove("clear-search-field");
    }
    const items = vars.tempStore.filter(item => item.itemType === vars.currentItemListType);
    const filteredItems = items.filter(item => item.itemTitle.toLowerCase().includes(event.target.value.toLowerCase()));

    renderItems(filteredItems, vars.currentItemListType);
}