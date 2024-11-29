document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const firstQuestion = document.querySelector('main section:nth-of-type(1)')
    const secondQuestion = document.querySelector('main section:nth-of-type(2)');
    const thirdQuestion = document.querySelector('main section:nth-of-type(3)');
    const allSections = document.querySelectorAll('section');
    const resultsEl = document.querySelector('#results');

    let correctAnswers = 0;

    firstQuestion.addEventListener('click', (e) => {
        if (e.target.textContent === 'onclick') {
            correctAnswers += 1;
        }
        secondQuestion.classList.remove('hidden');
    });

    secondQuestion.addEventListener('click', (e) => {
        if (e.target.textContent === 'JSON.stringify()') {
            correctAnswers += 1;
        }
        thirdQuestion.classList.remove('hidden');
    });

    thirdQuestion.addEventListener('click', (e) => {
        if (e.target.textContent === 'A programming API for HTML and XML documents') {
            correctAnswers += 1;
        }

        resultsEl.textContent = `${correctAnswers}`;

    });

    if (correctAnswers === 3) {

    }
}