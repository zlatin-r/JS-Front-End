function isPalindrome(number) {
    let original = number.toString();
    let reversed = original.split('').reverse().join('');
    return original === reversed;
}

function checkPalindromes(numbers) {
    for (let number of numbers) {
        console.log(isPalindrome(number) ? "true" : "false");
    }
}

let numbersArray = [323, 1001, 123, 454, 789];
checkPalindromes(numbersArray);
