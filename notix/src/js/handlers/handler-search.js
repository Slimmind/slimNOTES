import renderItems from "../modules/render-items";

export default function searchHandler(event) {
    const items = vars.tempStore.filter(item => item.itemType === vars.currentItemListType);
    const filteredItems = items.filter(item => item.itemTitle.includes(event.target.value));

    renderItems(filteredItems);
}