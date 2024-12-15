function solve(arr) {
    const n = Number(arr.shift());
    const farmers = {};

    for (let i = 0; i < n; i++) {
        const [farmerName, workArea, tasks] = arr.shift().split(' ');
        farmers[farmerName] = {workArea: workArea, tasks: tasks.split(',')};
    }

    let command = arr.shift();

    while (command !== 'End') {
        const parts = command.split(' / ');
        const action = parts[0];
        const name = parts[1];

        if (action === 'Execute') {
            const workArea = parts[2];
            const task = parts[3];

            if (farmers[name].workArea === workArea && farmers[name].tasks.includes(task)) {
                console.log(`${name} has executed the task: ${task}!`);
            } else {
                console.log(`${name} cannot execute the task: ${task}.`);
            }
        } else if (action === 'Change Area') {
            const newWorkArea = parts[2];

            farmers[name].workArea = newWorkArea;

            console.log(`${name} has changed their work area to: ${newWorkArea}`)
        } else if (action === 'Learn Task') {
            const newTask = parts[2];

            if (farmers[name].tasks.includes(newTask)) {
                console.log(`${name} already knows how to perform ${newTask}.`)
            } else {
                farmers[name].tasks.push(newTask);
                console.log(`${name} has learned a new task: ${newTask}.`)
            }
        }
        command = arr.shift();
    }
    Object.entries(farmers).forEach(([name, data]) => {
        console.log(`Farmer: ${name}, Area: ${data.workArea}, Tasks: ${data.tasks.sort().join(', ')}`);
    })
}

solve([
        "2",
        "John garden watering,weeding",
        "Mary barn feeding,cleaning",
        "Execute / John / garden / watering",
        "Execute / Mary / garden / feeding",
        "Learn Task / John / planting",
        "Execute / John / garden / planting",
        "Change Area / Mary / garden",
        "Execute / Mary / garden / cleaning",
        "End"
    ]
);
