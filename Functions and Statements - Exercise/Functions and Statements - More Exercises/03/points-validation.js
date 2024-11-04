function solve(points) {
    const [x1, y1, x2, y2] = points;

    function calculateDistance(x1, y1, x2, y2) {
        return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    }

    function isValidDistance(distance) {
        return Number.isInteger(distance);
    }

    let distance1 = calculateDistance(x1, y1, 0, 0);
    let distance2 = calculateDistance(x2, y2, 0, 0);
    let distance3 = calculateDistance(x1, y1, x2, y2);

    console.log(`{${x1}, ${y1}} to {0, 0} is ${isValidDistance(distance1) ? "valid" : "invalid"}`);
    console.log(`{${x2}, ${y2}} to {0, 0} is ${isValidDistance(distance2) ? "valid" : "invalid"}`);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${isValidDistance(distance3) ? "valid" : "invalid"}`);
}

solve([3, 0, 0, 4])
solve([2, 1, 1, 1])
