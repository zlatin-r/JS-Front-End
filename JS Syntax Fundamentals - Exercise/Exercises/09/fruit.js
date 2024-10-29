function solve(fruit, weight, price) {
    let kilos = weight / 1000
    let total_price = price * kilos;

    console.log(`I need $${total_price.toFixed(2)} to buy ${kilos.toFixed(2)} kilograms ${fruit}.`)
}

solve('orange', 2500, 1.80)
solve('apple', 1563, 2.35)
