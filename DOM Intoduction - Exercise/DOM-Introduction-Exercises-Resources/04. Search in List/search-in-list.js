function solve() {
    const townNameElements = document.querySelectorAll("#towns li");
    const searchedElement = document.querySelector("#searchText").value;
    console.log(townNameElements);
    console.log(searchedElement);

    townNameElements.forEach(town => {
        const townName = town.textContent.trim();
        console.log(townName);
    })
}