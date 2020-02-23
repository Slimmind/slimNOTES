export default function getNoteFromArray(id) {
    return itemArr.find((item) => item.itemId === id);
}