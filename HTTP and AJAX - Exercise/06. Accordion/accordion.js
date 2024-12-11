function initializeArticles() {
    fetch('http://localhost:3030/jsonstore/advanced/articles/list')
        .then(response =>  response.json())
        .then(articles => {

            const mainContainer = document.getElementById('main');

            articles.forEach(article => {

                const articleElement = document.createElement('div');
                articleElement.classList.add('accordion');
                articleElement.innerHTML = `
                    <div class="head">
                        <span>${article.title}</span>
                        <button class="button" id="${article._id}">More</button>
                    </div>
                    <div class="extra" style="display: none;" id="content-${article._id}"></div>
                `;
                mainContainer.appendChild(articleElement);

                const button = articleElement.querySelector('.button');
                button.addEventListener('click', () => toggleArticleContent(article._id, button));
            });
        })
        .catch(error => console.error('Error fetching articles:', error));
}

function toggleArticleContent(articleId, button) {
    const contentDiv = document.getElementById(`content-${articleId}`);


    if (contentDiv.style.display === 'none') {

        fetch(`http://localhost:3030/jsonstore/advanced/articles/details/${articleId}`)
            .then(response => response.json())
            .then(articleDetails => {

                contentDiv.innerHTML = `<p>${articleDetails.content}</p>`;
                contentDiv.style.display = 'block';
                button.textContent = 'Less';
            })
            .catch(error => console.error(`Error fetching details for article ${articleId}:`, error));
    } else {

        contentDiv.style.display = 'none';
        button.textContent = 'More';
    }
}

initializeArticles();