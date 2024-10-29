function solve(ticket, age) {
    let result;

    switch (ticket) {
        case 'Weekday':
            if (age >= 0 && age <= 18) result = '12$';
            else if (age > 18 && age <= 64) result = '18$';
            else if (age > 64 && age <= 122) result = '12$';
            else result = 'Error!';
            break;

        case 'Weekend':
            if (age >= 0 && age <= 18) result = '15$';
            else if (age > 18 && age <= 64) result = '20$';
            else if (age > 64 && age <= 122) result = '15$';
            else result = 'Error!';
            break;

        case 'Holiday':
            if (age >= 0 && age <= 18) result = '5$';
            else if (age > 18 && age <= 64) result = '12$';
            else if (age > 64 && age <= 122) result = '10$';
            else result = 'Error!';
            break;

        default:
            result = 'Error!';
    }

    console.log(result);
}

solve('Weekday', 42);  // Expected output: 18$
solve('Weekend', -12);  // Expected output: Error!
solve('Holiday', 15);   // Expected output: 5$
