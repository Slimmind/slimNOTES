export default function clearForm() {
    const forms = document.querySelectorAll("form");
    for (const form of forms) {
        form => form.reset();
    }
}