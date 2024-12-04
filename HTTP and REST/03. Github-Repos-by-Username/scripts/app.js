function loadRepos() {
    const userName = document.getElementById("username").value;
    const listEl = document.querySelector('#repos');
    const url = `https://api.github.com/users/${userName}/repos`;

    listEl.textContent = '';

    fetch(url)
        .then((response) => response.json())
        .then((data) => {

            data.forEach((item) => {
                let newLiEl = document.createElement("li");
                let newAEl = document.createElement("a");

                newAEl.textContent = item.full_name;
                newAEl.setAttribute("href", item.html_url);

                newLiEl.appendChild(newAEl);
                listEl.appendChild(newLiEl);
            });
        })
        .catch((error) => console.log(error));
}
