import { Book } from "./Book.js";
import { EBook } from "./EBook.js";

const book1 = new Book(
    "Harry Potter",
    "J.K. Rowling",
    1997
);

const book2 = new Book(
    "1984",
    "George Orwell",
    1949
);

const ebook1 = new EBook(
    "The Hobbit",
    "J.R.R. Tolkien",
    1937,
    "PDF"
);

book1.printInfo();
book2.printInfo();
ebook1.printInfo();

const books = [book1, book2, ebook1];

const oldestBook = Book.findOldestBook(books);

console.log("Oldest book:");
oldestBook.printInfo();

const ebook2 = EBook.fromBook(book1, "EPUB");

console.log("EBook created from Book:");
ebook2.printInfo();