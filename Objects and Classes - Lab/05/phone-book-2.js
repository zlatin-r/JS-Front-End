function phoneBook(input) {
    const phoneBook = {};

    input.forEach((item) => {
        const [name, number] = item.split(' ');
        phoneBook[name] = number;
    });

    for (let key in phoneBook) {
        console.log(`${key} -> ${phoneBook[key]}`);
    }
}

phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']
);
