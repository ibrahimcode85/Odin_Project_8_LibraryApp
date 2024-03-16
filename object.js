const myLibrary = [];

function Book(title, author, pages, read){
    this.title  = title;
    this.author = author;
    this.pages  = pages;
    this.read   = read;
};

// temporary user input
const title = 'A Field Guide to Lies';
const author = 'Daniel K. Levitin';
const pages = 292;
const read = 'In Progress';

// add input to object
let book = new Book(title, author, pages, read);

// add book object to library array
addBookLibrary = () => {myLibrary.push(book)};

// add event listener
const addButton = document.querySelector(".addBook");
addButton.addEventListener('click', addBookLibrary);