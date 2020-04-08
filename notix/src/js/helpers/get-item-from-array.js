export default function getItemFromArray(id) {
    return vars.tempStore.find((item) => item.itemId === id);
}