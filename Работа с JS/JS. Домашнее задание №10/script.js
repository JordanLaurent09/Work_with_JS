function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;

    this.info = function() {
        console.log(`Название книги - ${this.title}, её автор - ${this.author}, а количество страниц равно ${this.pages}.`);
    }

    this.hasManyPages = function() {
        if (this.pages >= 500) {
            return true;
        }
        return false;
    }
}

function Book(title, author) {
    this.title = title;
    this.author = author;
    this.pages = 0;

    this.info = function() {
        console.log(`Название книги - ${this.title}, её автор - ${this.author}, а количество страниц равно ${this.pages}.`);
    }

    this.hasManyPages = function() {
        if (this.pages >= 500) {
            return true;
        }
        return false;
    }
}

function Book() {
    this.title = "Unknown";
    this.author = "Unknown";
    this.pages = 0;

    this.info = function() {
        console.log(`Название книги - ${this.title}, её автор - ${this.author}, а количество страниц равно ${this.pages}.`);
    }

    this.hasManyPages = function() {
        if (this.pages >= 500) {
            return true;
        }
        return false;
    }
}


let potter = new Book("Поттериана", "Дж. Роулинг", 3363);
let sixtyNine = new Book("69-й год", "Рю Мураками");
let unknownBook = new Book();

potter.info();
console.log(potter.hasManyPages());

sixtyNine.info();
console.log(sixtyNine.hasManyPages());

unknownBook.info();
console.log(unknownBook.hasManyPages());