function solve() {
    const inputData = JSON.parse(document.querySelector("#inputs textarea").value);
    const restaurantsData = {};
    const bestRestaurant = {name: "", avrSalary: 0, highestSalary: 0, personal: {}};

    inputData.forEach(element => {
        const [restaurantName, personalInfo] = element.split(' - ');
        const employeesData = personalInfo.split(', ');

        if (!restaurantsData.hasOwnProperty(restaurantName)) {
            restaurantsData[restaurantName] = {};
        }

        employeesData.forEach(employee => {
            const [name, salary] = employee.split(' ');

            if (!restaurantsData[restaurantName].hasOwnProperty(name)) {
                restaurantsData[restaurantName][name] = parseFloat(salary);
            } else {
                restaurantsData[restaurantName][name] += parseFloat(salary);
            }
        });

        const salaries = Object.values(restaurantsData[restaurantName]);
        const totalSalaries = salaries.reduce((sum, salary) => sum + salary, 0);
        const avrSalary = parseFloat(totalSalaries / salaries.length).toFixed(2);
        const highestSalary = Math.max(...salaries).toFixed(2)

        if (bestRestaurant.avrSalary < avrSalary) {
            bestRestaurant.name = restaurantName;
            bestRestaurant.avrSalary = avrSalary;
            bestRestaurant.highestSalary = highestSalary;
            bestRestaurant.personal = restaurantsData[restaurantName];
        }
    });
    console.log(`Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.avrSalary} Best Salary: ${bestRestaurant.highestSalary}`);

}
