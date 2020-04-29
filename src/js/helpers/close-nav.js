export default function closeNav() {
    vars.DOM.navPanel.classList.remove("menu-is-open");
    document.removeEventListener("click", closeNav);
}