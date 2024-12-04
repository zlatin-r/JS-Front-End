function loadCommits() {
    const userName = document.querySelector('#username').value;
    const repoName = document.querySelector('#repo').value;

    const commitsListEl = document.querySelector('#commits');

    const url = `https://api.github.com/repos/${userName}/${repoName}/commits`;

    const responsePromise = fetch(url)
    responsePromise
        .then((response) => response.json())
        .then((data) => {
            data.forEach(commit => {
                const newLiEl = document.createElement('li');
                newLiEl.textContent = `${commit.commit.author.name}:${commit.commit.message}`;

                commitsListEl.appendChild(newLiEl);
            });
        }).catch((error) => {
            const li = document.createElement("li");
            li.textContent = `Error: ${error.message}`;
            commitsListEl.appendChild(li);
    });
}