document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const mainParentEl = document.querySelector('main');
    const secondQuestion = document.querySelector('main section:nth-of-type(2)');
    const thirdQuestion = document.querySelector('main section:nth-of-type(3)');
    const resultsEl = document.querySelector('#results');

    resultsEl.style.display = 'none';

    let correctAnswers = 0;
    let totalAnswers = 0;

    mainParentEl.addEventListener('click', (e) => {
        e.preventDefault();

        if (e.target.textContent === 'onclick') {
            secondQuestion.classList.remove('hidden')
            correctAnswers++;
        }
        if (e.target.textContent === 'JSON.stringify()') {
            thirdQuestion.classList.remove('hidden')
            correctAnswers++
        }
        if (e.target.textContent === 'A programming API for HTML and XML documents') {
            correctAnswers++
        }

        resultsEl.textContent = `${correctAnswers}`;
        resultsEl.style.display = 'block';
    });

}