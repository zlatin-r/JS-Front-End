function solve(input) {
    let addedInfo = [];
    let data = {};

    for (let line of input) {
        let userName = '';
        let articleTitle = '';

        if (line.includes('user')) {
            userName = line.slice(5);
            if (!addedInfo.includes(userName)) {
                addedInfo.push(userName);
            }
        } else if (line.includes('article')) {
            articleTitle = line.slice(8);
            if (!addedInfo.includes(articleTitle)) {
                addedInfo.push(articleTitle);
            }
        } else {
            let [userName, info] = line.split(' posts on ');
            let [articleTitle, commentInfo] = info.split(': ');
            let [commentTitle, commentContent] = commentInfo.split(', ');

            if (addedInfo.includes(userName) && addedInfo.includes(articleTitle)) {
                if (!data[articleTitle]) data[articleTitle] = {};
                if (!data[articleTitle][userName]) data[articleTitle][userName] = [];

                data[articleTitle][userName].push({commentTitle, commentContent});
            }
        }
    }
    let sortedArticles = Object.entries(data).sort((a, b) =>
            Object.values(b[1]).flat().length - Object.values(a[1]).flat().length);

    let result = "";
    sortedArticles.forEach(([article, usersComments]) => {
        result += `Comments on ${article}\n`;

        Object.keys(usersComments).sort().forEach(user => {
            usersComments[user].forEach(comment => {
                result += `--- From user ${user}: ${comment.commentTitle} - ${comment.commentContent}\n`;
            });
        });
    });
    console.log(result.trim());
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