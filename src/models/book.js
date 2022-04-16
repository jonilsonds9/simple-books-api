import { v4 as uuidv4 } from 'uuid';

class Book {

    constructor({name, pages, year, isbn}) {
        this.id = uuidv4();
        this.name = name;
        this.pages = pages;
        this.year = year;
        this.isbn = isbn;
    }
}

export default Book;
