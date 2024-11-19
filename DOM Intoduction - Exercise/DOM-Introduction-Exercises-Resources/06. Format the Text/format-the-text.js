function solve() {
    const outputElement = document.querySelector('#output');

    const textElement = document.querySelector('#input').value;
     let sentences = textElement
        .trim()
        .replace(/\.+$/, '') // Премахва точки в края на текста
        .split(".")
        .filter(s => s.length > 0)
        .map(s => `<p>${s.trim()}</p>`);

    for (let i = 0; i < sentences.length; i += 3) {
        const group = sentences.slice(i, i + 3);
        const newParagraphElement = document.createElement('p');
        newParagraphElement.textContent = group.join('. ')
        outputElement.appendChild(newParagraphElement);
    }
}
