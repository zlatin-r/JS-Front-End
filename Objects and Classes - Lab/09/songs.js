function solve(input) {
    let songsList = [];
    let n = input.shift();
    let typeList = input.pop();

    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }

    for (let line of input) {
        let [songType, songName, songTime] = line.split('_');
        let song = new Song(songType, songName, songTime);
        songsList.push(song);
    }

    if (typeList === 'all') {
        songsList.forEach((i) => console.log(i.name));
    } else {
        let filtered = songsList.filter((i) => i.type === typeList);
        filtered.forEach((i) => console.log(i.name));
    }
}

solve([
    3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite'
]);
