function grade(score) {
    if (score < 3) {
        return 'Fail (2)'
    } else if (score >= 3 && score < 3.5) {
        return `Poor (${score.toFixed(2)})`
    } else if (score >= 3.5 && score < 4.5) {
        return `Good (${score.toFixed(2)})`
    } else if (score >= 4.5 && score < 5.5) {
        return `Very good (${score.toFixed(2)})`
    } else if (score >= 5.5) {
        return `Excellent (${score.toFixed(2)})`
    }
}

console.log(grade(3.33))
console.log(grade(4.50))
console.log(grade(2.99))
