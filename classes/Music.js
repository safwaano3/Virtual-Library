// import the Media class:
let Media = require("./Media");
// create your Music class:
class Music extends Media {
  constructor(title, year, genre, artist, length) {
    super(title, year, genre);
    this.artist = artist;
    this.length = length;
  }

  static shortestAlbum(collection) {
    let temporary = undefined;

    for (let music of collection) {
      if (temporary == undefined || music.length <= temporary.length) {
        temporary = music;
      }
    }

    return temporary;
  }

  summary() {
    return `Title: ${this.title}, Artist: ${this.artist}, Year: ${this.year}, Genre: ${this.genre}, Length: ${this.length} seconds`;
  }
}

// const music1 = new Music("Lemonade", 2016, "R&B", "Beyonce", 3949);
// const music2 = new Music("Renaissance", 2022, "R&B", "Beyonce", 3734);
// const result = Music.shortestAlbum([music1, music2]);
// console.log({ result });

// don't change below
module.exports = Music;
