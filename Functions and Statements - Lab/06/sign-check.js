function signCheck(numOne, numTwo, numThree) {
    // const positiveCount = [numOne, numTwo, numThree].filter(num => num > 0).length;
    const negativeCount = [numOne, numTwo, numThree].filter(num => num < 0).length;

    if (negativeCount % 2 === 0) {
        console.log("Positive");
    } else {
        console.log("Negative");
    }
}

signCheck(5, 12, -15);
signCheck(-6, -12, 14);
signCheck(-1, -2, -3);
signCheck(-5, 1, 1);
