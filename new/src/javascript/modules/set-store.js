export default function setStore(store, itemArr) {
    store.setItem("items", JSON.stringify(itemArr));
}