import setStore from "../helpers/set-store";
import getItemFromArray from "../helpers/get-item-from-array";

export default function checkDoneHandler(elem) {
    if(elem.classList.contains("check-btn")) {
        const todo = elem.parentNode;
        const itemID = todo.getAttribute("id");
        const itemArrayIndex = vars.tempStore.indexOf(getItemFromArray(itemID));
        
        todo.classList.toggle("done");
        vars.tempStore[itemArrayIndex].todoDone = !vars.tempStore[itemArrayIndex].todoDone;
        setStore();
    }
}