document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const firstQuestion = document.querySelector('main section:nth-of-type(1)')
    const secondQuestion = document.querySelector('main section:nth-of-type(2)');
    const thirdQuestion = document.querySelector('main section:nth-of-type(3)');
    const resultsEl = document.querySelector('#results');

    let correctAnswers = 0;

    firstQuestion.addEventListener('click', (e) => {
        if (e.target.textContent === 'onclick') {
            correctAnswers++;
        }
        firstQuestion.classList.add('hidden');
        secondQuestion.classList.remove('hidden');
    });

    secondQuestion.addEventListener('click', (e) => {
        if (e.target.textContent === 'JSON.stringify()') {
            correctAnswers++;
        }
        secondQuestion.classList.add('hidden');
        thirdQuestion.classList.remove('hidden');
    });

    thirdQuestion.addEventListener('click', (e) => {
        if (e.target.textContent === 'A programming API for HTML and XML documents') {
            correctAnswers++;
        }
        thirdQuestion.classList.add('hidden');

        if (correctAnswers === 3) {
            resultsEl.textContent = 'You are recognized as top JavaScript fan!';
        } else if (correctAnswers === 1) {
            resultsEl.textContent = `You have 1 right answer`;
        } else {
            resultsEl.textContent = `You have ${correctAnswers} right answers`;
        }
    });
}


