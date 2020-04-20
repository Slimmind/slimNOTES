import closeNav from "./close-nav";
import hide from "./hide";
import show from "./show";
import noteCounter from "./note-counter";

export default function openNav() {
    console.log("TYPE: ", vars.currentItemListType);
    vars.DOM.navPanel.classList.add("menu-is-open");
    if(vars.currentItemListType === "note") {
        hide(vars.DOM.todoFiltersWrap);
        noteCounter();
    } else {
        show(vars.DOM.todoFiltersWrap);
    }
    setTimeout(() => {
        document.addEventListener("click", closeNav);
    }, 10);
}