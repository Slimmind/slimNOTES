export default function resetForm() {
    const forms = document.querySelectorAll('form');
    for(form of forms) {
        form.reset();
    }
}