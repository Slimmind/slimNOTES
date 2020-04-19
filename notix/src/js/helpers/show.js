export default function show() {
    for(const elem of arguments) {
        elem.classList.remove("hidden");
    }
}