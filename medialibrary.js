class Media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }

    get title() {
        return this._title;
    }

    get isCheckedOut() {
        return this._isCheckedOut;
    }

    get ratings() {
        return this._ratings;
    }

    toggleCheckOutStatus() {
        if (this.isCheckedOut === this.isCheckedOut) {
            this.isCheckedOut = !this.isCheckedOut;
        }
    }

    getAverageRating() {
        const average = this.ratings.reduce(function (previousvalue, currentvalue) {
            return previousvalue + currentvalue;
        });
        return average / this.ratings.length;
    }

    set isCheckedOut(newStatus) {
        this._isCheckedOut = newStatus;
    }

    addRating(newRating) {
        this._ratings.push(newRating);
    }
}


class Book extends Media {
    constructor(title, author, pages) {
        super(title);
        this._author = author;
        this._pages = pages;

    }

    get author() {
        return this._author;
    }

    get pages() {
        return this._pages;
    }


}

class Movie extends Media {
    constructor(title, director, runTime) {
        super(title);
        this._director = director;
        this._runTime = runTime;
    }

    get director() {
        return this._director;
    }

    get runTime() {
        return this._runTime;
    }
}

const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);

historyOfEverything.toggleCheckOutStatus();

console.log(historyOfEverything.isCheckedOut);

historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);

console.log(historyOfEverything.getAverageRating());

const speed = new Movie('Speed', 'Jan de Bont', 116);

speed.toggleCheckOutStatus();

console.log(speed.isCheckedOut);

speed.addRating(1);
speed.addRating(1);
speed.addRating(5);

console.log(speed.getAverageRating());

