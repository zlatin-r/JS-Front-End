function attachEvents() {
    const textAreaEl = getElementByTag("#messages");
    const authorNameEl = getElementByTag('input[name="author"]');
    const messageContentEl = getElementByTag('input[name="content"]');
    const sendBtnEl = getElementByTag('#submit')
    const refreshBtnEl = getElementByTag('#refresh')

    const baseUrl = 'http://localhost:3030/jsonstore/messenger'

    sendBtnEl.addEventListener('click', postMessage);
    refreshBtnEl.addEventListener('click', refreshPage);

    async function postMessage() {
        const authorName = authorNameEl.value;
        const messageContent = messageContentEl.value;

        const message = {
            author: authorName,
            content: messageContent
        }

        const response = await fetch(baseUrl, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(message),
        });
    }

    async function refreshPage() {
        const response = await fetch(baseUrl);
        const data = await response.json();

        const messages = Object.values(data)
            .map(msg => `${msg.author}: ${msg.content}`)
            .join('\n');

        textAreaEl.value = messages;
    }
}

function getElementByTag(tag) {
    return document.querySelector(tag);
}

attachEvents();