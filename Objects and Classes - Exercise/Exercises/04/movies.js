function solve(input) {
    let movies = [];

    for (let line of input) {
        if (line.includes('addMovie')) {
            let movieName = line.split('addMovie ')[1];
            movies.push({name: movieName});
        } else if (line.includes('directedBy')) {
            let [movieName, director] = line.split(' directedBy ');
            let movie = movies.find(movie => movie.name === movieName);

            if (movie) {
                movie.director = director;
            }
        } else if (line.includes('onDate')) {
            let [movieName, onDate] = line.split(' onDate ');
            let movie = movies.find(movie => movie.name === movieName);

            if (movie) {
                movie.date = onDate;
            }
        }
    }
    movies
        .filter(movie => movie.name && movie.director && movie.date)
        .forEach(movie => console.log(JSON.stringify(movie)));
}


solve([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
])
