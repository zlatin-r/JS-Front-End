function solve(input) {
    const grades = {};
    const regex = /Student name:\s([A-Za-z]+),\sGrade:\s(\d+),\sGraduated with an average score:\s([\d.]+)/;

    for (let line of input) {
        let match = line.match(regex);

        if (match) {
            let name = match[1];
            let grade = match[2];
            let avgScore = parseFloat(match[3]);

            if (avgScore > 3) {
                grade++

                if (!grades.hasOwnProperty(grade)) {
                    grades[grade] = {'list of students': [name], 'grades': [avgScore]};
                } else {
                    grades[grade]['list of students'].push(name);
                    grades[grade]['grades'].push(avgScore);
                }
            }
        }
    }
    let sortedByGrades = Object.entries(grades).sort((a, b) => a[1] - (b[1]));

    for (let [grade] of sortedByGrades) {
        console.log(`${grade} Grade`);
        console.log('List of students:', grades[grade]['list of students'].join(', '));

        let arrLength = grades[grade]['grades'].length;
        let arrSum = grades[grade]['grades'].reduce((a, b) => a + b, 0);
        let avgAnnualScore = arrSum / arrLength;

        console.log('Average annual score from last year:', avgAnnualScore.toFixed(2));
        console.log();
    }
}

solve([
        "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
        "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
        "Student name: George, Grade: 8, Graduated with an average score: 2.83",
        "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
        "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
        "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
        "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
        "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
        "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
        "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
        "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
        "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
    ]
);
