export default function addItemHandler() {
    console.log("TYPE: ", vars.currentItemListType);
    vars.DOM.html.classList.add('no-scroll');
    vars.DOM.itemForm.classList.add('active-window', 'create-form', `${vars.currentItemListType}-form`);
}