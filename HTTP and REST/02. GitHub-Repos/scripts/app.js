function loadRepos() {
    const url = "https://api.github.com/users/testnakov/repos";
    const resultDiv = document.getElementById("res");

    fetch(url)
        .then((response) => response.text()) // Преобразуваме отговорът в текст
        .then((data) => {
            resultDiv.textContent = data
        })
        .catch((error) => console.log(error));
}