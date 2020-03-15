export default function addItemHandler(DOM) {
    DOM.html.classList.add('no-scroll');
    DOM.itemForm.classList.add('active-window', 'create-form');
}