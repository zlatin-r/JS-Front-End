function attachEvents() {
    const textAreaEl = getElementByTag("#textarea");
    const authorNameEl = document.querySelector('input[name="author"]');
    const messageContentEl = document.querySelector('input[name="content"]');
    const sendBtnEl = getElementByTag('#submit')
    const baseUrl ='http://localhost:3030/jsonstore/messenger'

}

function getElementByTag(tag) {
    return document.querySelector(tag);
}

attachEvents();