const myLibrary = [];

function Book(title, author, pages, isRead){
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.isRead = Boolean(isRead)
}
Book.prototype.read = function(){
    this.isRead = true
}

function addBookToLibrary(title, author, pages, isRead){
    const book = new Book(title, author, pages, isRead);

    myLibrary.push(book);
}

function displayBook(){
    
}

addBookToLibrary("nigger", "retard", 78, false)
console.log(myLibrary)