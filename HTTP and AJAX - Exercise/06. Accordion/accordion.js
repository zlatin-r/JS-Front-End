function solution() {
    const mainEl = document.querySelector('#main');

    const url = 'http://localhost:3030/jsonstore/advanced/articles/list'

    mainEl.innerHTML = ``

    loadArticles()

    async function loadArticles() {
        const response = await fetch(url);
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
        })
    }
}

solution();