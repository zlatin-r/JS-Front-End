function solve() {
    const textElement = document.querySelector('#input').value;
    const outputElement = document.querySelector('#output');
    let sentences = textElement
        .split(".")
        .filter(s => s.length > 0)
        .map(s => s + ".");

    for (let i = 0; i < sentences.length; i += 3) {
        const group = sentences.slice(i, i + 3);
        const newParagraphElement = document.createElement('p');

        newParagraphElement.textContent = group.join('').trim();
        outputElement.appendChild(newParagraphElement);
    }
}

// function solve() {
//     const textElement = document.querySelector('#input').value;
//     const outputElement = document.querySelector('#output');
//     let sentences = textElement.split(".");
//
//     sentences = sentences.filter(el => el.length > 0).map(el => el += ".");
//
//     for (let i = 0; i < sentences.length; i += 3) {
//         const group = sentences.slice(i, i + 3);
//         const newParagraphElement = document.createElement('p');
//
//         newParagraphElement.textContent = group.join("").trim();
//         outputElement.appendChild(newParagraphElement);
//     }
// }


// function solve() {
//   const rawText = document.querySelector("textarea").value;
//   const outputElement = document.getElementById("output");
//
//   let sentences = rawText.split(".");
//   sentences = sentences.filter(element => element.length > 0)
//     .map(element => element += ".");
//
//   while (sentences.length > 0) {
//     let paragraph = document.createElement("p");
//     paragraph.textContent = sentences.splice(0, 3).join("").trim();
//     outputElement.appendChild(paragraph);
//   }
// }
