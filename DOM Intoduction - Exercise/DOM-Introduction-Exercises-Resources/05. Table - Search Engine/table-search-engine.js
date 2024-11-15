function solve() {
    const searchedElement = document.querySelector('#searchField').value;
    const rowElements = Array.from(document.querySelectorAll('tbody td'));

    const rows = Array.from(document.querySelectorAll('tbody tr'));

    rows.forEach(row => row.classList.remove("select"));

    rowElements.forEach(cell => {
        if (cell.textContent.includes(searchedElement)) {
            cell.parentElement.classList.add("select");
        }
    });
}

// function solve() {
//     const searchedElement = document.querySelector('#searchField');
//     const rowElements = document.querySelectorAll('table tr');
//
//     rowElements.forEach(row => row.classList.remove("select"));
//
//     rowElements.forEach(row => {
//         if (row.textContent.includes(searchedElement.value)) {
//             row.classList.add("select");
//         }
//     });
//     searchedElement.value = '';
// }

// function solve() {
//     const searchedElement = document.querySelector('#searchField').value;
//     const rowElements = document.querySelectorAll('table:not(tr:first-child) tr');
//
//     rowElements.forEach(row => row.classList.remove("select"));
//
//     rowElements.forEach(row => {
//         if (row.textContent.includes(searchedElement)) {
//             row.classList.add("select");
//         }
//     });
//     document.querySelector('#searchField').value = '';
// }

// function solve() {
//     const searchedElement = document.querySelector('#searchField').value.toLowerCase().trim();
//     const rowElements = document.querySelectorAll('table:not(tr:first-child) tr');
//
//     rowElements.forEach(row => {
//         row.style.backgroundColor = "white";
//     })
//
//     rowElements.forEach(el => {
//         if (el.textContent.toLowerCase().includes(searchedElement.toLowerCase())) {
//             el.style.backgroundColor = 'yellow';
//         }
//     });
//
//     document.querySelector('#searchField').value = '';
// }

// function solve() {
//     const searchedElement = document.querySelector('#searchField').value;
//     const rowElements = document.querySelectorAll('table:not(tr:first-child) tr');
//
//     rowElements.forEach(row => row.classList.remove("select"));
//
//     if (searchedElement) {
//         rowElements.forEach(row => {
//             const rowText = row.textContent.toLowerCase()
//             if (rowText.includes(searchedElement)) {
//                 row.classList.add("select");
//             }
//         })
//     }
//     document.querySelector('#searchField').value = '';
// }

// function solve() {
//     const searchInput = document.getElementById("searchField");
//     const query = searchInput.value.trim().toLowerCase(); // Sanitize and lower-case the input
//     const rows = Array.from(document.querySelectorAll("tbody tr")); // Get all table rows from tbody
//
//     // Clear any previous selections
//     rows.forEach(row => row.classList.remove("select"));
//
//     if (query) {
//         // Highlight rows containing the search query
//         rows.forEach(row => {
//             const rowText = row.textContent.toLowerCase(); // Convert row content to lowercase for case-insensitive matching
//             if (rowText.includes(query)) {
//                 row.classList.add("select");
//             }
//         });
//     }
//
//     // Clear the input field for the next search
//     searchInput.value = "";
// }

// function solve() {
//     // Вземаме елементите на таблицата и полето за търсене
//     const searchField = document.querySelector("#searchField");
//     const searchValue = searchField.value.trim().toLowerCase();
//     const tableRows = document.querySelectorAll("tbody tr");
//
//     // Премахваме всички предишни селектирани редове
//     tableRows.forEach(row => row.classList.remove("select"));
//
//     // Проверяваме дали има въведен текст за търсене
//     if (searchValue !== "") {
//         tableRows.forEach(row => {
//             const rowText = row.textContent.toLowerCase(); // Текущият текст на реда (в малки букви)
//             if (rowText.includes(searchValue)) {
//                 row.classList.add("select"); // Добавяме клас "select", ако има съвпадение
//             }
//         });
//     }
//
//     // Изчистваме полето за търсене
//     searchField.value = "";
// }