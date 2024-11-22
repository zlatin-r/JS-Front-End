function colorize() {
    const rows = document.querySelectorAll('table tbody tr:nth-of-type(even)');
    rows.forEach(cell => cell.style.backgroundColor = 'Teal');
}
