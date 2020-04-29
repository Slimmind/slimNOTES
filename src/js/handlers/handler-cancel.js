import closeHandler from "./handler-close";

export default function cancelHandler(event) {
    event.preventDefault();
    closeHandler(vars.DOM.windows, 'active-window, edit-form, todo-form, note-form, create-form');
}