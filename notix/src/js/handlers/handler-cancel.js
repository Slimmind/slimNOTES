import closeHandler from "./handler-close";

export default function cancelHandler(event, DOM) {
    event.preventDefault();
    closeHandler(DOM, DOM.windows, null, 'active-window, edit-form, todo-form, create-form');
}