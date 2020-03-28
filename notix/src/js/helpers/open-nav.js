import closeNav from "./close-nav";

export default function openNav() {
    vars.DOM.navPanel.classList.add("menu-is-open");
    setTimeout(() => {
        document.addEventListener("click", closeNav);
    }, 100);
}