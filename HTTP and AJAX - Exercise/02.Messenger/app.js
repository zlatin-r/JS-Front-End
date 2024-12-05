function attachEvents() {
    const textAreaEl = getElementByTag("#textarea");
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
            message: messageContent
        };

        try {
            const response = await fetch(baseUrl, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(message),
            });
        } catch (error) {
            console.error(error);
        }
    }

    async function refreshPage() {

    }

}

function getElementByTag(tag) {
    return document.querySelector(tag);
}

attachEvents();