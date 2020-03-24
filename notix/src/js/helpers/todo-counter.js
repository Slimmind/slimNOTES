export default function todoCounter() {
    const todoTypes = {
        normal: 0,
        warning: 0,
        urgent: 0
    }

    todoFilterNormal: document.querySelector('todo-filter.normal');

    for(const todo of vars.tempStore) {
        if(todo.itemType === "todo") {
            switch (todo.todoStatus) {
                case "urgent":
                    todoTypes.urgent += 1;
                    break;
                case "warning":
                    todoTypes.warning += 1;
                    break;
                default:
                    todoTypes.normal += 1;
            }
        }
    }

    console.log("FILTER: ", todoTypes);

    vars.DOM.todoFilterNormal.setAttribute("data-amount", todoTypes.normal);
    vars.DOM.todoFilterWarning.setAttribute("data-amount", todoTypes.warning);
    vars.DOM.todoFilterUrgent.setAttribute("data-amount", todoTypes.urgent);
}