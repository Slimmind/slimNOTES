export default function toggleItemList(DOM) {
    for(const input of DOM.listTypeInput) {
        input.addEventListener('change', (event) => {
            for(const list of DOM.itemsList) {
                list.classList.add('hidden');
            }
            document.querySelector(`.${event.target.value}`).classList.remove('hidden');
        });
    }
}