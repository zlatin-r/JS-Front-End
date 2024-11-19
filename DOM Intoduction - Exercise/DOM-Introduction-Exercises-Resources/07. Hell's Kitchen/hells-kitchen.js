// function solve() {
//     const inputData = JSON.parse(document.querySelector("#inputs textarea").value);
//     const restaurantsData = {};
//     const bestRestaurant = {name: "", avrSalary: 0, highestSalary: 0, personal: {}};
//     const outputRestaurantDataElement = document.querySelector("#bestRestaurant > p")
//     const outputEmployeesDataElement = document.querySelector("#workers > p")
//
//     inputData.forEach(element => {
//         const [restaurantName, personalInfo] = element.split(' - ');
//         const employeesData = personalInfo.split(', ');
//         debugger
//         if (!restaurantsData.hasOwnProperty(restaurantName)) {
//             restaurantsData[restaurantName] = {};
//         }
//
//         employeesData.forEach(employee => {
//             const [name, salary] = employee.split(' ');
//             restaurantsData[restaurantName][name] = parseFloat(salary);
//         });
//
//         const salaries = Object.values(restaurantsData[restaurantName]);
//         const totalSalaries = salaries.reduce((sum, salary) => sum + salary, 0);
//         const avrSalary = parseFloat(totalSalaries / salaries.length).toFixed(2);
//         const highestSalary = Math.max(...salaries).toFixed(2);
//
//         if (bestRestaurant.avrSalary < avrSalary) {
//             bestRestaurant.name = restaurantName;
//             bestRestaurant.avrSalary = avrSalary;
//             bestRestaurant.highestSalary = highestSalary;
//             bestRestaurant.personal = restaurantsData[restaurantName];
//         }
//     });
//
//     const sortedEmployees = Object.entries(bestRestaurant.personal).sort(([, a], [, b]) => b - a);
//     // const sortedEmployees = Object.entries(bestRestaurant.personal).sort((a, b) => b[1] - a[1]);
//
//
//     outputRestaurantDataElement.textContent = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.avrSalary} Best Salary: ${bestRestaurant.highestSalary}`;
//     outputEmployeesDataElement.textContent = sortedEmployees
//         .map(([name, salary]) => `Name: ${name} With Salary: ${salary}`)
//         .join(' ');
// }
//----------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------

function solve() {
    const inputData = JSON.parse(document.querySelector("#inputs textarea").value);
    const restaurantsData = {};
    const bestRestaurant = {name: "", avrSalary: 0, highestSalary: 0, personal: {}};
    const outputRestaurantDataElement = document.querySelector("#bestRestaurant > p")
    const outputEmployeesDataElement = document.querySelector("#workers > p")

    inputData.forEach(element => {
        const [restaurantName, personalInfo] = element.split(' - ');
        const employeesData = personalInfo.split(', ');

        if (!restaurantsData.hasOwnProperty(restaurantName)) {
            restaurantsData[restaurantName] = {};
            restaurantsData[restaurantName]["avgSalary"] = 0;
            restaurantsData[restaurantName]["employees"] = {};
            employeesData.forEach(employee => {                 // TODO write a function
                const [name, salary] = employee.split(' ');
                restaurantsData[restaurantName]["employees"][name] = parseFloat(salary);
            });
        } else {
            employeesData.forEach(employee => {
                const [name, salary] = employee.split(' ');
                restaurantsData[restaurantName]["employees"][name] = parseFloat(salary);
            });
        }

        // const salaries = Object.values(restaurantsData[restaurantName]);
        // const totalSalaries = salaries.reduce((sum, salary) => sum + salary, 0);
        // const avrSalary = parseFloat(totalSalaries / salaries.length).toFixed(2);
        // const highestSalary = Math.max(...salaries).toFixed(2);
        //
        // if (bestRestaurant.avrSalary < avrSalary) {
        //     bestRestaurant.name = restaurantName;
        //     bestRestaurant.avrSalary = avrSalary;
        //     // bestRestaurant.highestSalary = highestSalary;
        //     // bestRestaurant.personal = restaurantsData[restaurantName];
        // }
    });
    debugger
    Object.entries(restaurantsData).forEach(restaurant => {
        console.log(Object.values(restaurant['name']));
        const salaries = Object.values(restaurant[1]["employees"])
        const totalSalaries = salaries.reduce((sum, salary) => sum + salary, 0);
        const restAvgSalary = parseFloat(totalSalaries / salaries.length).toFixed(2);
        console.log(restAvgSalary);
        restaurant.avgSalary = restAvgSalary;
    })

    // const sortedEmployees = Object.entries(bestRestaurant.personal).sort(([, a], [, b]) => b - a);
    // // const sortedEmployees = Object.entries(bestRestaurant.personal).sort((a, b) => b[1] - a[1]);
    //
    //
    // outputRestaurantDataElement.textContent = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.avrSalary} Best Salary: ${bestRestaurant.highestSalary}`;
    // outputEmployeesDataElement.textContent = sortedEmployees
    //     .map(([name, salary]) => `Name: ${name} With Salary: ${salary}`)
    //     .join(' ');
}
