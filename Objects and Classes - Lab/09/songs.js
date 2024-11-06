function solve(input) {
    let songsList = []
    let n = input.shift()
    let typeList = input.pop()

    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }

    for (let line of input) {
        let [songType, songName, songTime] = line.split('_')
        songsList.push(new Song(songType, songName, songTime));
    }


}

solve([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']
)