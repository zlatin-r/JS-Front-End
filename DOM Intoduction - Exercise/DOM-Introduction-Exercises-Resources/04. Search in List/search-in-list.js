function solve() {
    const townNameElements = document.querySelectorAll("#towns li");
    const searchedElementStr = document.querySelector("#searchText").value;
    const result = document.querySelector("#result");

    let matchesFound = 0;

    townNameElements.forEach(town => {
        const townName = town.textContent.trim();

        if (townName.includes(searchedElementStr)) {
            matchesFound++;
            town.style.fontWeight = "bold";
            town.style.textDecoration = "underline";
        }
    });
    result.textContent = `${matchesFound} matches found`;
}


// function solve() {
//     const towns = document.querySelectorAll('#towns li');
//     const searchStr = document.querySelector('#searchText').value.toLowerCase();
//     const resultEl = document.querySelector('#result');
//
//     if (searchStr == '') return;
//
//     towns.forEach(town => {
//         town.classList.remove('match');
//         town.style.fontWeight = 'normal';
//         town.style.textDecoration = 'none';
//
//         if ( town.textContent.toLowerCase().includes(searchStr) ) {
//             town.classList.add('match');
//             town.style.fontWeight = 'bold';
//             town.style.textDecoration = 'underline';
//         }
//     });
//     resultEl.textContent = `${document.querySelectorAll('.match').length} matches found`;
// }