function loadRepos() {
    const url = "https://api.github.com/users/testnakov/repos";
    const resultDiv = document.getElementById("res");

    fetch(url)
        .then((response) => response.text()) // Преобразуваме отговорът в текст
        .then((data) => {
            resultDiv.textContent = data; // Заместваме съдържанието на div-а
        })
        .catch((error) => {
            console.error("Error fetching repos:", error);
            resultDiv.textContent = "Error loading repositories.";
        });
}