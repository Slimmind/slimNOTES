export default function closeHandler(DOM, currentItem, elem, classToRemove) {
  currentItem = {};
  const classes = classToRemove.replace(/ /g, '').split(',');
  if (DOM.html.classList.contains('no-scroll')) {
    DOM.html.classList.remove('no-scroll');
  }
  classes.length && classes.forEach((item) => {
    elem.classList.contains(item) && elem.classList.remove(item);
  });
  DOM.todoBlock.classList.remove('hidden');
  clearForm();
}