function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.text = this.title      + ', ' 
                + this.author   + ', '
                + this.pages    + ', '
                + this.read     + '.';
    this.info = () => {
        return this.text;
    };
}