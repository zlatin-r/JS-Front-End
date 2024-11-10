function solve(input) {
    let shelfId = '';
    let shelfGenre = '';
    let bookTitle = '';
    let bookAuthor = '';
    let bookGenre = '';
    let bookInfo = '';
    let shelfData = {};

    for (let line of input) {
        if (line.includes('->')) {
            [shelfId, shelfGenre] = line.split(' -> ');
        } else {
            [bookTitle, bookInfo] = line.split(': ');
            [bookAuthor, bookGenre] = line.split(', ');
        }
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
])