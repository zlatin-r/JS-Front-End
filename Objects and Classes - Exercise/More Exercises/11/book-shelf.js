function solve(input) {
    let shelfData = {};
    let addedData = {};
    let shelfId = '';
    let shelfGenre = '';
    let bookTitle = '';
    let bookAuthor = '';
    let bookGenre = '';
    let bookInfo = '';

    for (let line of input) {
        if (line.includes('->')) {
            [shelfId, shelfGenre] = line.split(' -> ');

            if (!Object.values(addedData).includes(shelfId)) {
                addedData[shelfGenre] = shelfId;
                shelfData[shelfGenre] = {};
            }
        } else {
            [bookTitle, bookInfo] = line.split(': ');
            [bookAuthor, bookGenre] = bookInfo.split(', ');
            if (shelfData[bookGenre]) {
                shelfData[bookGenre][bookTitle] = bookAuthor;
            }
        }
    }
    let sortedShelfData = Object.entries(shelfData)
        .sort((a, b) => a[0].length - b[0].length);

    for (let [k, v] of sortedShelfData) {
        console.log(`${addedData[k]} ${k}: ${Object.keys(v).length}`);
        Object.entries(v).forEach(([title, author]) => console.log(`--> ${title}: ${author}`));
    }
}

solve([
    '1 -> history',
    '1 -> action',
    'Death in Time: Criss Bell, mystery',
    '2 -> mystery',
    '3 -> sci-fi',
    'Child of Silver: Bruce Rich, mystery',
    'Hurting Secrets: Dustin Bolt, action',
    'Future of Dawn: Aiden Rose, sci-fi',
    'Lions and Rats: Gabe Roads, history',
    '2 -> romance',
    'Effect of the Void: Shay B, romance',
    'Losing Dreams: Gail Starr, sci-fi',
    'Name of Earth: Jo Bell, sci-fi',
    'Pilots of Stone: Brook Jay, history'
]);
