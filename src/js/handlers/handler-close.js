import resetForm from "../helpers/reset-form";
import hide from "../helpers/hide";
import show from "../helpers/show";

export default function closeHandler(elem, classToRemove) {
    vars.currentItem = {};
    const classes = classToRemove.replace(/ /g, '').split(',');

    if (vars.DOM.html.classList.contains('no-scroll')) {
        vars.DOM.html.classList.remove('no-scroll');
    }

    if (elem && classes.length) {
        for(const className of classes) {
            elem.classList.contains(className) && elem.classList.remove(className);
        };
    }

    show(vars.DOM.todoBlock);
    hide(vars.DOM.noteBlock);
    resetForm();
}