function solve(ticket, age) {
    let result

    switch (ticket) {
        case 'Weekday':
            if (0 <= age && age <= 18) {
                result = '12$';
                break;
            } else if (18 < age && age <= 64) {
                result = '18$';
                break;
            } else if (64 < age && age <= 122) {
                result = '12$';
                break;
            } else {
                result = 'Error!';
                break;
            }
        case 'Weekend':
            if (0 <= age && age <= 18) {
                result = '15$';
                break;
            } else if (18 < age && age <= 64) {
                result = '20$';
                break;
            } else if (64 < age  && age <= 122) {
                result = '15$';
                break;
            } else {
                result = 'Error!';
                break;
            }
        case 'Holiday':
            if (0 <= age && age <= 18) {
                result = '5$'
                break;
            } else if (18 < age && age <= 64) {
                result = '12$';
                break;
            } else if (64 < age && age <= 122) {
                result = '10$'
            } else {
                result = 'Error!';
            }
    }
    console.log(result)
}

solve('Weekday', -1);
solve('Weekend', -1);
solve('Holiday', 15);
