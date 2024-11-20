function solve() {
    const inputData = JSON.parse(document.querySelector("#inputs textarea").value);
    const restaurantsData = {};
    const bestRestaurant = {name: "", highestSalary: 0, personal: {}};
    const outputRestaurantDataElement = document.querySelector("#bestRestaurant > p")
    const outputEmployeesDataElement = document.querySelector("#workers > p")

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

    const sortedEmployees = Object.entries(bestRestaurant.personal).sort(([, a], [, b]) => b - a);
    // const sortedEmployees = Object.entries(bestRestaurant.personal).sort((a, b) => b[1] - a[1]);

    outputRestaurantDataElement.textContent = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.avgSalary} Best Salary: ${bestRestaurant.highestSalary}`;
    outputEmployeesDataElement.textContent = sortedEmployees
        .map(([name, salary]) => `Name: ${name} With Salary: ${salary}`)
        .join(' ');
}
