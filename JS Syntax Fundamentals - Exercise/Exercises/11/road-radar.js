function solve(speed, area) {
    let result = ''
    let diff = 0
    let limit = 0
    let status = ''

    if (area === 'motorway') {
        limit = 130
    } else if (area === 'interstate') {
        limit = 90
    } else if (area === 'city') {
        limit = 50
    } else if (area === 'residential') {
        limit = 20
    }

    if (speed <= limit) {
        result = `Driving ${speed} km/h in a ${limit} zone`
    } else {
        diff = speed - limit;
        if (diff <= 20) {
            status = 'speeding'
        } else if (diff <= 40) {
            status = 'excessive speeding'
        } else {
            status = 'reckless driving'
        }
        result = `The speed is ${diff} km/h faster than the allowed speed of ${limit} - ${status}`
    }
    console.log(result)
}

solve(40, 'city')
solve(21, 'residential')
solve(120, 'interstate')
solve(200, 'motorway')
