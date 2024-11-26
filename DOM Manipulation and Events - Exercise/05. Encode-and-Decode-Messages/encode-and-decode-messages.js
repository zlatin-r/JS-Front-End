document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const encodeAndSendButton = document.querySelector('#encode button');
    const decodeAndReadButton = document.querySelector('#decode textarea');
    const encodedMessageEl = document.querySelector('#encode textarea');

    encodeAndSendButton.addEventListener('click', (e) => {
        e.preventDefault();

        // console.log(decodeMessage(encodedMessageEl.value));
    });

    function decodeMessage(encodedMessage) {
        return Array.from(encodedMessage)
            .map(char => String.fromCharCode(char.charCodeAt(0) + 1))
            .join('');
    }
    function encodeMessage(decodedMessage) {
        return Array.from(decodedMessage)
            .map(char => String.fromCharCode(char.charCodeAt(0) + 1))
            .join('');
    }
}