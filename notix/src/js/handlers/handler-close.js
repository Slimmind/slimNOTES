import clearForm from "../helpers/clear-form";

export default function closeHandler(DOM, elem, currentItem, classToRemove) {
    currentItem = {};
    const classes = classToRemove.replace(/ /g, '').split(',');
    console.log("CLASSES: ", classToRemove);

    if (DOM.html.classList.contains('no-scroll')) {
        DOM.html.classList.remove('no-scroll');
    }

    if (elem && classes.length) {
        for(const className of classes) {
            elem.classList.contains(className) && elem.classList.remove(className);
        };
    }

    DOM.todoBlock.classList.remove('hidden');
    clearForm();
}