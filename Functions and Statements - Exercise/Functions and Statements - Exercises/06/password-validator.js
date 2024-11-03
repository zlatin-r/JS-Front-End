function solve(password) {

    function isLengthValid(password) {
        return password.length < 6 || password.length > 10
    }

    function isAlphanumeric(str) {
        return /^[a-zA-Z0-9]+$/.test(str);
    }

    function areTwoDigits(str) {
        return /\d{2,}/.test(str);
    }

    if (!isLengthValid(password) && isAlphanumeric(password) && areTwoDigits(password)) {
        console.log('Password is valid')
    }

    if (isLengthValid(password)) {
        console.log('Password must be between 6 and 10 characters')
    }
    if (!isAlphanumeric(password)) {
        console.log('Password must consist only of letters and digits')
    }
    if (!areTwoDigits(password)) {
        console.log('Password must have at least 2 digits')
    }
}

solve('login')
solve('MyPass123')
solve('Pa$s$s')
