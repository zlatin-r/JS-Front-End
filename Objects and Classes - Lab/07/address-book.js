function solve(input) {
    let addressBook = {};

    for (let line of input) {
        let [name, address] = line.split(':');
        addressBook[name] = address;
    }

    let sorted = Object.entries(addressBook);
    sorted.sort((a, b) => a[0].localeCompare(b[0]));

    for (let [key, value] of sorted) {
        console.log(`${key} -> ${value}`);
    }
}

solve(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']
)
