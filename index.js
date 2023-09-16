const container = document.querySelector('.card-container');
const addBookBtn = document.getElementById('addBook');

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
addBookToLibrary("How To Not", "Someone", 78, true)
addBookToLibrary("Lorem Ipsum", "Lorem", 842, true)
addBookToLibrary("How I created Linux", "Linus Tech Tips", 690, false)
addBookToLibrary("brrrrt brrrt", "A-10", 420, true)

function displayBook(){
    const card = document.createElement('div');
    const cardTitle = document.createElement('div');
    const cardAuthor = document.createElement('div');
    const cardPages = document.createElement('div');
    const cardToggle = document.createElement('button');
    const cardDelete = document.createElement('button');

    card.classList.add('card');
    container.appendChild(card);

    for (let book of myLibrary){
        let status = (book.isRead) ? "READ": "NOT READ";
        
        cardTitle.classList.add('title')
        cardTitle.textContent = `Title: ${book.title}`;
        card.appendChild(cardTitle);

        cardAuthor.classList.add('author')
        cardAuthor.textContent = `Author: ${book.author}`;
        card.appendChild(cardAuthor);

        cardPages.classList.add('pages')
        cardPages.textContent = `Pages: ${book.pages}`;
        card.appendChild(cardPages);

        cardToggle.classList.add('toggle-button');
        cardToggle.textContent = `${status}`;
        card.appendChild(cardToggle);

        cardDelete.classList.add('delete')
        cardDelete.textContent = `Delete`;
        card.appendChild(cardDelete);
    }
}

displayBook();



