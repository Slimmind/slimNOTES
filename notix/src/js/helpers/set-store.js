export default function setStore() {
    window.localStorage.setItem("items", JSON.stringify(vars.tempStore));
}