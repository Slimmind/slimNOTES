export default function serviceMessage(messageType = 'info', messageTitle = '', messageText = '') {
    const message = `
    <div class="service-message ${messageType}">
    <strong class="close-message" role="button" aria-label="close-message"></strong>
    <h3 class="message-title">${messageTitle}</h3>
    <div class="message-text">
    <p>${messageText}</p>
    </div>
    </div>
    `;

    DOM.html.classList.add('service');

    DOM.serviceMessages.insertAdjacentHTML('beforeend', message);

    DOM.serviceMessages.addEventListener('click', (event) => {
        if (!event.target.classList.contains('service-message')) {
            DOM.html.classList.remove('service');
            DOM.serviceMessages.classList.add('hidden');
            setTimeout(() => {
                DOM.serviceMessages.innerHTML = '';
                DOM.serviceMessages.classList.remove('hidden');
            }, 10);
        }
    });
}