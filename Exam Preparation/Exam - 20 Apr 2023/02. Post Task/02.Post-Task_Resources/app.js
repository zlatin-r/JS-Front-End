window.addEventListener("load", solve);

function solve() {
    const titleInputEl = document.querySelector('#task-title');
    const categoryInputEl = document.querySelector('#task-category');
    const contentInputEl = document.querySelector('#task-content');

    const reviewListEl = document.querySelector('#review-list');
    const publishedListEl = document.querySelector('#published-list');

    const publishBtnEl = document.querySelector('#publish-btn');

    publishBtnEl.addEventListener('click', (e) => {

        if (!titleInputEl.value || !categoryInputEl.value || !contentInputEl.value) return;

        const newRPostEl = document.createElement('li');
        newRPostEl.className = 'rpost';

        const articleEl = document.createElement('article');

        const titleEl = document.createElement('h4');
        let title = titleInputEl.value;
        titleEl.textContent = title;

        const categoryEl = document.createElement('p');
        let category = categoryInputEl.value;
        categoryEl.textContent = `Category: ${category}`;

        const contentEl = document.createElement('p');
        let content = contentInputEl.value;
        contentEl.textContent = `Content: ${content}`;

        const editBtnEl = document.createElement('button');
        editBtnEl.className = 'action-btn edit';
        editBtnEl.textContent = 'Edit';
        editBtnEl.addEventListener('click', editHandler);

        const postBtnEl = document.createElement('button');
        postBtnEl.className = 'action-btn post';
        postBtnEl.textContent = 'Post';
        postBtnEl.addEventListener('click', postHandler);

        articleEl.appendChild(titleEl);
        articleEl.appendChild(categoryEl);
        articleEl.appendChild(contentEl);

        newRPostEl.appendChild(articleEl);
        newRPostEl.appendChild(editBtnEl);
        newRPostEl.appendChild(postBtnEl);

        reviewListEl.appendChild(newRPostEl);

        titleInputEl.value = '';
        categoryInputEl.value = '';
        contentInputEl.value = '';

        function editHandler() {
            titleInputEl.value = title;
            categoryInputEl.value = category;
            contentInputEl.value = content;

            reviewListEl.removeChild(newRPostEl);
        }

        function postHandler() {
            reviewListEl.removeChild(newRPostEl);

            newRPostEl.removeChild(editBtnEl);
            newRPostEl.removeChild(postBtnEl);

            publishedListEl.appendChild(newRPostEl);
        }
    });
}