const myLibrary = [];

function Book(title, author, pages, read){
    this.title  = title;
    this.author = author;
    this.pages  = pages;
    this.read   = read;
};

// add book object to library array
addBookLibrary = () => {
    
    // get user input
    for (let nInput = 1; nInput <5; nInput++){
        
        switch (nInput){
            case 1:
                title = document.querySelector('.title').value;
                break;
            
            case 2:
                author = document.querySelector('.author').value;
                break;

            case 3:
                pages = document.querySelector('.pages').value;
                break;

            case 4:
                read = document.querySelector('.readStatus').value;
                break;            
        };
    };

    // add input to object
    let book = new Book(title, author, pages, read);
    
    // add book object to library array
    myLibrary.push(book);

    // add book card based on the new input
    createBookCard(title, author, pages, read);
};

// create book card
createBookCard = (title, author, pages, read) => {
    
    // create book card
    let bookCard = document.createElement('div');
    bookCard.setAttribute('class', 'book-card');
    
    // title element
    let bookTitle = document.createElement('div');
    bookTitle.setAttribute('class', 'book-title');
    bookTitle.textContent = title;

    // author element
    let bookAuthor = document.createElement('div');
    bookAuthor.setAttribute('class', 'book-author');
    bookAuthor.textContent = author;

    // pages element
    let bookPages = document.createElement('div');
    bookPages.setAttribute('class', 'book-pages');
    bookPages.textContent = `${pages} pages`

    // read status element
    let bookRead = document.createElement('div');
    bookRead.setAttribute('class', 'book-read');
    bookRead.textContent = `Read status: ${read}`;

    // append book elements to card
    bookCard.appendChild(bookTitle);
    bookCard.appendChild(bookAuthor); 
    bookCard.appendChild(bookPages); 
    bookCard.appendChild(bookRead);
    
    // add to library
    const library = document.querySelector('.library');
    library.appendChild(bookCard);

};


// add event listener
const addButton = document.querySelector(".button-addBook");
addButton.addEventListener('click', addBookLibrary);