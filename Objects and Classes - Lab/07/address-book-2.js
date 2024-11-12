function solve(input) {
    const entries = Object.entries(input);
    entries.sort((a, b) => a.localeCompare(b));

    entries.forEach(([k, v]) =>
    {
        console.log(k,v)
    })
}

solve(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']
)
