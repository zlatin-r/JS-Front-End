function extractText() {
    const listItems = document.getElementsByTagName('li');
    const textArea = document.querySelector('#result');

    textArea.value = Array.from(listItems).map(item => item.textContent).join('\n');
}