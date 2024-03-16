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

        // update book card ID based on read-status input
        // this will affect card styling
        switch (read){
            case "Not Read":
                bookCard.setAttribute('id', 'notRead');
                break;

            case "In Progress":
                bookCard.setAttribute('id', 'inProgress');
                break;

            case "Read":
                bookCard.setAttribute('id', 'read');
                break;
        };
    
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

    // create wrapper for all book info and append info to wrapper
    let infoWrapper = document.createElement('div');
    infoWrapper.setAttribute('class', 'card-info-wrapper');

    infoWrapper.appendChild(bookTitle);
    infoWrapper.appendChild(bookAuthor); 
    infoWrapper.appendChild(bookPages); 
    infoWrapper.appendChild(bookRead);

    // create action icon element
    let imgDelete = document.createElement('img');
    imgDelete.setAttribute('src', 'assets/close.png');
    imgDelete.setAttribute('class', 'delete');

    let imgInfo = document.createElement('img');
    imgInfo.setAttribute('src', 'assets/info.png');
    imgInfo.setAttribute('class', 'status');

    let imgUp = document.createElement('img');
    imgUp.setAttribute('src', 'assets/up.png');
    imgUp.setAttribute('class', 'up');

    let imgDown = document.createElement('img');
    imgDown.setAttribute('src', 'assets/down.png');
    imgDown.setAttribute('class', 'down');

    // create wrapper for action item and append icon to wrapper
    let actionWrapper = document.createElement('div');
    actionWrapper.setAttribute('class', 'card-action-wrapper');

    actionWrapper.appendChild(imgDelete);
    actionWrapper.appendChild(imgInfo);
    actionWrapper.appendChild(imgUp);
    actionWrapper.appendChild(imgDown);

    // append wrappers to card element
    bookCard.appendChild(infoWrapper);
    bookCard.appendChild(actionWrapper);

    // add to library
    const library = document.querySelector('.library');
    library.appendChild(bookCard);

};


// add event listener
const addButton = document.querySelector(".button-addBook");
addButton.addEventListener('click', addBookLibrary);