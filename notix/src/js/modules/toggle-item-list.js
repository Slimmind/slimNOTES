export default function toggleItemList() {
    for(const input of vars.DOM.listTypeInput) {
        input.addEventListener('change', (event) => {
            for(const list of vars.DOM.itemsList) {
                list.classList.add('hidden');
            }
            document.querySelector(`.${event.target.value}`).classList.remove('hidden');
        });
    }
}