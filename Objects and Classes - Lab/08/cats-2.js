function solve(arr) {
    let cats = [];

    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        speak() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    arr.forEach(element => {
        const [name, age] = element.split(' ');
        cats.push(new Cat(name, age));
    })

    for (let cat of cats) {
        cat.speak();
    }
}

solve([
    'Candy 1',
    'Poppy 3',
    'Nyx 2'
]);
