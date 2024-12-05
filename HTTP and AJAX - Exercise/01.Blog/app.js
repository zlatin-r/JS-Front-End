function attachEvents() {
    const loadPostBtnEl = document.getElementById('btnLoadPosts');
    const viewBtnEl = document.getElementById('btnViewPost');
    const postsEl = document.getElementById('posts');
    const postTitleEl = document.getElementById('post-title');
    const postBodyEl = document.getElementById('post-body');
    const postCommentsEl = document.getElementById('post-comments');

    const postUrl = 'http://localhost:3030/jsonstore/blog/posts';
    const commentsUrl = 'http://localhost:3030/jsonstore/blog/comments'

    loadPostBtnEl.addEventListener('click', async () => {

        const allPostsResponse = await fetch(postUrl);
        const posts = await allPostsResponse.json();

        Object.entries(posts).forEach(([post, data]) => {

            const newOption = document.createElement('option');

            newOption.value = post;
            newOption.text = data.title;

            postsEl.appendChild(newOption);
        });
    });

    viewBtnEl.addEventListener('click', async () => {

        postCommentsEl.innerHTML = '';

        const selectedPostEl = document.getElementById('posts');
        const selectedPostValue = selectedPostEl.value;

        const allCommentsResponse = await fetch(commentsUrl);
        const allComments = await allCommentsResponse.json();

        const allPostsResponse = await fetch(postUrl);
        const posts = await allPostsResponse.json();

        const currentPost = posts[selectedPostValue];
        const comments = Object.values(allComments).filter(obj => obj.postId === selectedPostValue);

        postTitleEl.textContent = currentPost.title;
        postBodyEl.textContent = currentPost.body;

        comments.forEach(comment => {
            const newLiEl = document.createElement('li');
            newLiEl.textContent = comment.text;
            newLiEl.id = comment.id;

            postCommentsEl.appendChild(newLiEl);
        });
    });

    // const postsUrl =  "http://localhost:3030/jsonstore/blog/posts";
    // const commentsUrl = "http://localhost:3030/jsonstore/blog/comments";
    // const loadPostsButton = takeElementByTag("#btnLoadPosts");
    // const viewsButton = takeElementByTag("#btnViewPost");
    // const selectPostsEl = takeElementByTag("#posts");
    // const commentsList = takeElementByTag("#post-comments");
    // const postTitle = takeElementByTag("#post-title");
    // const postBody = takeElementByTag("#post-body");
    //
    // loadPostsButton.addEventListener("click", loadPosts);
    // viewsButton.addEventListener("click", getData);
    //
    // let postDetails = {};
    //
    // async function loadPosts() {
    //     const allPostResponse = await fetch(postsUrl);
    //     const allPosts = await allPostResponse.json();
    //
    //     Object.entries(allPosts).forEach(([objectKey, post]) => {
    //         postDetails[post.id] = {};
    //         postDetails[post.id]["title"] = post.title;
    //         postDetails[post.id]["body"] = post.body;
    //         const optionEl = createEl("option");
    //         optionEl.value = post.id;
    //         optionEl.textContent = post.title;
    //         selectPostsEl.appendChild(optionEl);
    //     });
    // }
    //
    // async function getData() {
    //     commentsList.innerHTML = "";
    //
    //     const selectedPostId = selectPostsEl.value;
    //
    //     const allCommentsResponse = await fetch(commentsUrl);
    //     const postData = await allCommentsResponse.json();
    //
    //     postTitle.textContent = postDetails[selectedPostId]["title"];
    //     postBody.textContent = postDetails[selectedPostId]["body"];
    //
    //     Object.values(postData).forEach((post) => {
    //         if (selectPostsEl.value === post.postId) {
    //             const liElement = createEl("li");
    //             liElement.id = post.postId;
    //             liElement.textContent = post.text;
    //             commentsList.appendChild(liElement);
    //         }
    //     });
    // }
    //
    // function takeElementByTag(tag) {
    //     return document.querySelector(tag);
    // }
    //
    // function createEl(tag) {
    //     return document.createElement(tag);
    // }
}

attachEvents();