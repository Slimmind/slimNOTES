export default function getItemJSON(id) {
    return itemArr.find((item) => item.itemId === id);
}