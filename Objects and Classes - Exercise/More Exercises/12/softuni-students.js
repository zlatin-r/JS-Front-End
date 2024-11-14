function solve(input) {
    let courses = {};
    const userNameRegex = /^(\w+)\[/;
    const creditsRegex = /\[(\d+)\]/;
    const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/;

    input.forEach(line => {
        if (line.includes(':')) {
            let [courseName, capacity] = line.split(': ');
            if (!courses.hasOwnProperty(courseName)) {
                courses[courseName] = {};
                courses[courseName]['capacity'] = Number(capacity);
                courses[courseName]['students'] = [];
            } else {
                courses[courseName]['capacity'] += Number(capacity);
            }
        } else {
            let userName = line.match(userNameRegex)[1];
            let userCredits = line.match(creditsRegex)[1];
            let userEmail = line.match(emailRegex)[0];
            let courseName = line.split(' ').pop();

            if (courses.hasOwnProperty(courseName) && courses[courseName]['capacity'] > 0) {
                courses[courseName]['students'].push({name: userName, credits: userCredits, email: userEmail});
                courses[courseName]['capacity']--;
            }
        }
    });
    console.log(courses);
}

solve([
    'JavaBasics: 2',
    'user1[25] with email user1@user.com joins C#Basics',
    'C#Advanced: 3',
    'JSCore: 4',
    'user2[30] with email user2@user.com joins C#Basics',
    'user13[50] with email user13@user.com joins JSCore',
    'user1[25] with email user1@user.com joins JSCore',
    'user8[18] with email user8@user.com joins C#Advanced',
    'user6[85] with email user6@user.com joins JSCore',
    'JSCore: 2',
    'user11[3] with email user11@user.com joins JavaBasics',
    'user45[105] with email user45@user.com joins JSCore',
    'user007[20] with email user007@user.com joins JSCore',
    'user700[29] with email user700@user.com joins JSCore',
    'user900[88] with email user900@user.com joins JSCore'
]);
