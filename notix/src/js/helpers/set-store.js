export default function setStore(arr) {
    window.localStorage.setItem("items", JSON.stringify(arr));
}