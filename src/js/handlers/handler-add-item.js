import toggleFormType from "../helpers/toggle-form-type";
import renderItems from "../modules/render-items";

export default function addItemHandler() {
    if(vars.DOM.addItemBtn.classList.contains("clear-search-field")) {
        const items = vars.tempStore.filter(item => item.itemType === vars.currentItemListType);
        renderItems(items, vars.currentItemListType);
        vars.DOM.addItemBtn.classList.remove("clear-search-field");
        vars.DOM.searchField.value = "";
    } else {
        toggleFormType();
        vars.DOM.html.classList.add('no-scroll');
        vars.DOM.itemForm.classList.add('active-window', 'create-form');
    }
}