function attachEvents() {
    const loadPostBtnEl = document.getElementById('btnLoadPosts');
    const viewBtnEl = document.getElementById('btnViewPost');
    const postsEl = document.getElementById('posts');
    const postTitleEl = document.getElementById('post-title');
    const postBodyEl = document.getElementById('post-body');

    let postContent = '';

    const postUrl = 'http://localhost:3030/jsonstore/blog/posts';
    const commentsUrl = 'http://localhost:3030/jsonstore/blog/comments'

    loadPostBtnEl.addEventListener('click', async () => {

        const allPostsResponse = await fetch(postUrl);
        const posts = await allPostsResponse.json();

        Object.entries(posts).forEach(([post, data]) => {

            const newOption = document.createElement('option');

            newOption.value = post;
            newOption.text = data.title;

            postContent = data.text

            postsEl.appendChild(newOption);
        });
    });

    viewBtnEl.addEventListener('click', async (e) => {
        const selectedPostEl = document.getElementById('posts');
        const selectedPostValue = selectedPostEl.value;

        const allCommentsResponse = await fetch(commentsUrl);
        const allComments = await allCommentsResponse.json();

        const comments = Object.values(allComments).filter(obj => obj.postId === selectedPostValue);

        postTitleEl.textContent = selectedPostEl.options[selectedPostEl.selectedIndex].text;


    });
}

attachEvents();