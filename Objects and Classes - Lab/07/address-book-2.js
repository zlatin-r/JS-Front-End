function solve(input) {
    const addressBook = {};

    input.forEach((entry) => {
        const [name, place] = entry.split(':');
        addressBook[name] = place;
    });

    const addressBookSortable = Object.entries(addressBook);
    addressBookSortable.sort(([keyA], [keyB]) => {
        return keyA.localeCompare(keyB);
    });

    for (const [key, value] of addressBookSortable) {
        console.log(`${key} -> ${value}`);
    }
}

solve(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']
)
