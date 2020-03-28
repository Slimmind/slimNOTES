import showOverlay from "../helpers/show-overlay";
import hideOverlay from "../helpers/hide-overlay";

export default function serviceMessage(messageType = "info", messageTitle = "", messageText = "") {
    const message = `
    <div class="service-message ${messageType}">
    <strong class="close-message" role="button" aria-label="close-message"></strong>
    <h3 class="message-title">${messageTitle}</h3>
    <div class="message-text">
    <p>${messageText}</p>
    </div>
    </div>
    `;

    showOverlay();
    vars.DOM.serviceMessages.classList.add("active")

    vars.DOM.serviceMessages.insertAdjacentHTML("beforeend", message);

    vars.DOM.serviceMessages.addEventListener("click", (event) => {
        if (!event.target.classList.contains("service-message")) {
            hideOverlay()
            vars.DOM.serviceMessages.classList.remove("active");
            setTimeout(() => {
                vars.DOM.serviceMessages.innerHTML = "";
            }, 10);
        }
    });
}