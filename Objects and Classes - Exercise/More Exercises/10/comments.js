function solve(input) {
    let users = [];
    let articles = [];
    let data = {};

    for (let line of input) {
        let userName = '';
        let articleTitle = '';

        if (line.includes('user')) {
            userName = line.slice(5);
            if (!users.includes(userName)) {
                users.push(userName);
            }
        } else if (line.includes('article')) {
            articleTitle = line.slice(8);
            if (!articles.includes(articleTitle)) {
                articles.push(articleTitle);
            }
        } else {
            let [userName, info] = line.split(' posts on ');
            let [articleTitle, commentInfo] = info.split(' : ');
            let [commentTitle, commentContent] = commentInfo.split(', ');

            if (users.includes(userName) && articles.includes(articleTitle)) {
                data[articleTitle] = {userName: userName, commentTitle: commentTitle, commentContent: commentContent};
            }
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