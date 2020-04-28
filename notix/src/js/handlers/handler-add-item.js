import toggleFormType from "../helpers/toggle-form-type";

export default function addItemHandler() {
    console.log("TYPE: ", vars.currentItemListType);
    toggleFormType();
    vars.DOM.html.classList.add('no-scroll');
    vars.DOM.itemForm.classList.add('active-window', 'create-form');

}