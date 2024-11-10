function solve(input) {
    let users = [];
    let articles = [];
    let information = {};

    for (let line of input) {
        if (line.includes('user')) {
            let userName = line.slice(5)
            information[userName] = {};
        } else if (line.includes('article')) {
            let article = line.slice(8)
            console.log(article);
        } else {
            let [userName, info] = line.split(' posts on ');
            let [articleTitle, commentInfo] = info.split(' : ');
            let [commentTitle, commentContent] = commentInfo.split(', ');
        }
    }
}

solve([
    'user aUser123',
    'someUser posts on someArticle: NoTitle, stupidComment',
    'article Books',
    'article Movies',
    'article Shopping',
    'user someUser',
    'user uSeR4',
    'user lastUser',
    'uSeR4 posts on Books: I like books, I do really like them',
    'uSeR4 posts on Movies: I also like movies, I really do',
    'someUser posts on Shopping: title, I go shopping every day',
    'someUser posts on Movies: Like, I also like movies very much'
])