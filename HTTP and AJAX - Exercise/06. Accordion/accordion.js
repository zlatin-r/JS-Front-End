function solution() {
    const mainEl = document.querySelector('#main');

    const urlTitles = 'http://localhost:3030/jsonstore/advanced/articles/list'
    const urlArticles = 'http://localhost:3030/jsonstore/advanced/articles/details/'

    mainEl.innerHTML = ``

    loadArticles()

    async function loadArticles() {
        const response = await fetch(urlTitles);
        const articles = await response.json();

        Object.values(articles).forEach(article => {
            const newDivEl = document.createElement('div');
            newDivEl.className = 'accordion';

            newDivEl.innerHTML = `
                <div class="head">
                    <span>${article.title}</span>
                    <button class="button" id="${article._id}">More</button>
                </div>
                <div class="extra">
                    <p>Scalable Vector Graphics .....</p>
                </div>
            `
            mainEl.appendChild(newDivEl);
        });

        const buttons = mainEl.querySelectorAll('.button');
        buttons.forEach((button) => {
            button.addEventListener('click', toggleContent);
        });
    }

    async function toggleContent(e) {
        const button = e.target;
        const articleId = button.id
        const extraDiv = button.parentElement.nextElementSibling;

        if (button.textContent === 'More') {
            const response = await fetch(`${urlArticles}${articleId}`);
            const article = await response.json();

            extraDiv.innerHTML = `<p>${article.content}</p>`
            extraDiv.style.display = 'block';
            button.textContent = 'Less';
        } else {
            extraDiv.style.display = 'none';
            button.textContent = 'More';
        }
    }
}

solution();
