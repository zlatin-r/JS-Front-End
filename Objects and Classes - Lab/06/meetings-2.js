function meetings(input) {
    const meetings = {};

    input.forEach(line => {
        const [day, name] = line.split(' ')
        if (!meetings.hasOwnProperty(day)) {
            meetings[day] = name;
            console.log(`Scheduled for ${day}`);
        } else {
            console.log(`Conflict on ${day}!`);
        }
    });
    Object.keys(meetings).forEach(key => {
        console.log(`${key} - ${meetings[key]}`);
    });
}

meetings(['Friday Bob',
    'Saturday Ted',
    'Monday Bill',
    'Monday John',
    'Wednesday George']
);
