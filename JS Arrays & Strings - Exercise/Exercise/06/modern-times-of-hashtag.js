function solve(text) {
    let regex = /#([a-zA-Z]+(\W|$))/g;
    let matches = text.match(regex).map(match => match.slice(1, match.length).trim());
    console.log(matches.join('\n'));
}


solve('Nowadays everyone uses # to tag a #special word in #socialMedia')
solve('The symbol # is known #variously in English-speaking #regions as the #number sign')
