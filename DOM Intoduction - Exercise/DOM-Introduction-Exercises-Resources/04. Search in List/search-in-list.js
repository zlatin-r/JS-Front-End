function solve() {
    const townNameElements = document.querySelectorAll("#towns li");
    const searchedElement = document.querySelector("#searchText").value;
    const result = document.querySelector("#result");

    let matchesFound = 0;

    townNameElements.forEach(town => {
        const townName = town.textContent.trim();

        if (townName.includes(searchedElement)) {
            matchesFound += 1;
            town.style.fontWeight = "bold";
            town.style.textDecoration = "underline";
        }
    });
    result.textContent = `${matchesFound} matches found`;
}