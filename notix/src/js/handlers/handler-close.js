import clearForm from "../helpers/clear-form";

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

    vars.DOM.todoBlock.classList.remove('hidden');
    clearForm();
}