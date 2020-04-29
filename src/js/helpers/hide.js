export default function hide() {
    for(const elem of arguments) {
        elem.classList.add("hidden");
    }
}