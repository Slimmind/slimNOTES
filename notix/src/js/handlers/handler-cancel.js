import closeHandler from "./handler-close";

export default function cancelHandler(event) {
    event.preventDefault();
    closeHandler(vars.DOM.windows, null, 'active-window, edit-form, todo-form, create-form');
}