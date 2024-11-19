function solve() {
    const inputData = JSON.parse(document.querySelector("#inputs textarea").value);
    console.log(inputData);
    const restaurantsData = {};

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
    });
}