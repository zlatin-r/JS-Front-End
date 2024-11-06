function solve(input) {
    let employees = [];

    class Employee {
        constructor(name) {
            this.name = name;
            this.personalNumber = name.length;
        }
    }

    for (let name of input) {
        employees.push(new Employee(name));
    }

    for (let employee of employees) {
        console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNumber}`);
    }
}

solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
])
