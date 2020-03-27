import setStore from "../helpers/set-store";
import closeHandler from "./handler-close";

export default function deleteItemHandler(event) {
    event.preventDefault();
    console.log("=^..^= ", vars.currentItem);
    vars.tempStore = vars.tempStore.filter((note) => {
        return note.itemId !== vars.currentItem.id;
    });
    setStore();
    vars.currentItem.parentList.removeChild(document.getElementById(vars.currentItem.id));
    closeHandler(vars.DOM.windows, "active-window");
}