function solve() {
    const inputData = JSON.parse(document.querySelector("#inputs textarea").value);
    const restaurantsData = {};
    const bestRestaurant = {name: "", highestSalary: 0, personal: {}};
    const outputRestaurantDataElement = document.querySelector("#bestRestaurant > p");
    const outputEmployeesDataElement = document.querySelector("#workers > p");

    inputData.forEach(element => {
        const [restaurantName, personalInfo] = element.split(' - ');
        const employeesData = personalInfo.split(', ');

        if (!restaurantsData.hasOwnProperty(restaurantName)) {
            restaurantsData[restaurantName] = {};
            restaurantsData[restaurantName]["employees"] = {};
        }
        employeesData.forEach(employee => {
            const [name, salary] = employee.split(' ');
            restaurantsData[restaurantName]["employees"][name] = parseFloat(salary);
        });
    });

    Object.entries(restaurantsData).forEach(([restaurant, data]) => {
        const salaries = Object.values(data.employees);
        const totalSalaries = salaries.reduce((sum, salary) => sum + salary, 0);
        const avgSalary = (totalSalaries / salaries.length).toFixed(2);
        const highestSalary = Math.max(...salaries).toFixed(2);

        if (Number(avgSalary) > Number(bestRestaurant.avgSalary)) {
            bestRestaurant.name = restaurant;
            bestRestaurant.avgSalary = avgSalary;
            bestRestaurant.highestSalary = highestSalary;
            bestRestaurant.personal = data.employees;
        }
    });

    const sortedEmployees = Object.entries(bestRestaurant.personal)
        .sort(([, a], [, b]) => b - a);    // .sort((a, b) => b[1] - a[1]);

    outputRestaurantDataElement.textContent = `Name: ${bestRestaurant.name} `;
    outputRestaurantDataElement.textContent += `Average Salary: ${bestRestaurant.avgSalary} `;
    outputRestaurantDataElement.textContent += `Best Salary: ${bestRestaurant.highestSalary}`;

    outputEmployeesDataElement.textContent = sortedEmployees
        .map(([name, salary]) => `Name: ${name} With Salary: ${salary}`)
        .join(' ');
}


// function solve() {
//
//     const input = document.querySelector('#inputs textarea').value;
//
//     const outputBestRestEl = document.querySelector('#outputs #bestRestaurant p');
//     const outputWorkersEl = document.querySelector('#outputs #workers p');
//
//     if ( ! input ) return;
//
//     console.log(input);
//
//     const restaurants = JSON.parse(input)
//         .reduce((acc, entry) => {
//
//             const [ name, workersData ] = entry.split(' - ');
//
//             const workers = workersData.split(', ')
//                 .map(workerData => {
//
//                     const [ name, salary ] = workerData.split(' ');
//
//                     return { name, salary: Number(salary) }
//                 });
//
//             acc[name] ??= { workers: [] }
//             acc[name].workers.push(...workers);
//
//             return acc;
//
//         }, {})
//
//     console.log(restaurants);
//
//     function getAvgSalary(restaurantsData) {
//         const allSalaries = restaurantsData.workers.reduce((allSalaries, w) => allSalaries + w.salary, 0);
//         return allSalaries / restaurantsData.workers.length;
//     }
//
//     const [ bestRestaurantsKey ] = Object.keys(restaurants)
//         .sort((a, b) => getAvgSalary(restaurants[b]) - getAvgSalary(restaurants[a]));
//
//     const bestWorkers = restaurants[bestRestaurantsKey].workers
//         .toSorted((a, b) => b.salary - a.salary);
//
//     outputBestRestEl.textContent = `Name: ${bestRestaurantsKey} `;
//     outputBestRestEl.textContent += `Average Salary: ${getAvgSalary(restaurants[bestRestaurantsKey]).toFixed(2)} `
//     outputBestRestEl.textContent += `Best Salary: ${bestWorkers[0].salary.toFixed(2)}`;
//
//     outputWorkersEl.textContent = bestWorkers.map(w => `Name: ${w.name} With Salary: ${w.salary}`).join(' ');
//
// }
