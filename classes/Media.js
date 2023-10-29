class Media {
    // Static property to keep track of the instance count of Media class
    static totalMediaCount = 0;
  
    /**
     * Create a piece of media
     * @param {string} title
     * @param {number} year
     * @param {string} genre
     */
    constructor(title, year, genre) {
      this.title = title;
      this.year = year;
      this.genre = genre;
  
      // Increment the instance count each time a new instance is created
      Media.totalMediaCount++;
    }
  
    summary() {
      return `Title: ${this.title}, Year: ${this.year}, Genre: ${this.genre}`;
    }
  }
module.exports = Media;
