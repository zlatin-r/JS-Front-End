function solve(input) {
    let courses = {};
    let courseName = '';
    let credits = 0;
    let capacity = 0;
    let userName = '';
    let studentEmail = '';
    const userNameRegex = /^(\w+)\[/;
    const creditsRegex = /\[(\d+)\]/;
    const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/;

    for (let line of input) {
        if (line.includes('email')) {
            studentEmail = line.match(emailRegex)[0];
            userName = line.match(userNameRegex)[1];
            credits = Number(line.match(creditsRegex)[1]);
            courseName = line.split(' ').pop();

            if (courses.hasOwnProperty(courseName) && courses[courseName]['capacity'] > 0) {
                courses[courseName]['capacity']--;
                courses[courseName][userName] = {};
                courses[courseName][userName]["credits"] = credits;
                courses[courseName][userName]["email"] = studentEmail;
            }

        } else {
            [courseName, capacity] = line.split(': ')
            if (!courses[courseName]) {
                courses[courseName] = {};
                courses[courseName]['capacity'] = Number(capacity);
            } else {
                courses[courseName]['capacity'] += Number(capacity);
            }
        }
    }
    const sortedCoursesArray = Object.entries(courses)
        .sort(([, a], [, b]) => {
            const aUserCount = Object.keys(a).length - 1;
            const bUserCount = Object.keys(b).length - 1;
            return bUserCount - aUserCount;
        });
    const sortedCoursesWithSortedUsers = sortedCoursesArray
        .map(([courseName, courseDetails]) => {
        const users = Object.entries(courseDetails)
            .filter(([key]) => key !== 'capacity')
            .sort(([, a], [, b]) => b.credits - a.credits);
        const sortedCourse = {
            capacity: courseDetails.capacity,
            ...Object.fromEntries(users)
        };
        return [courseName, sortedCourse];
    });
    const sortedCourses = Object.fromEntries(sortedCoursesWithSortedUsers);

    console.log(sortedCourses);
    // console.log(sortedCoursesWithSortedUsers)
    // for (let [k, v] of Object.entries(sortedCoursesWithSortedUsers)) {
    //     console.log(`${k}: ${v['capacity']} places left`);
    //     Object.entries(v).forEach(([name, grade]) => {
    //
    //         console.log(`${name}`)
    //     })

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
