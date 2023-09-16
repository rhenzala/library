const container = document.querySelector('.card-container');
const addBookBtn = document.getElementById('addBook');
const addBookModal = document.getElementById('addBookModal');
const addTitle = addBookModal.querySelector('#title');
const addAuthor = addBookModal.querySelector('#author');
const addPages = addBookModal.querySelector('#pages');
const addReadStatus = addBookModal.querySelector('#isRead');
const confirmBtn = addBookModal.querySelector('#confirm');


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
    isRead = (isRead === "yes") ? true: false;
    pages = Number(pages);
    const book = new Book(title, author, pages, isRead);

    myLibrary.push(book);
}
// show the add book pop up
addBookBtn.addEventListener("click", () => {
    addBookModal.showModal();
});

// preventDefault is there so as not to submit the form to server
confirmBtn.addEventListener("click", (event) => {
    event.preventDefault(); 
    addBookToLibrary(addTitle.value, addAuthor.value, addPages.value, addReadStatus.value);
    addBookModal.close(addTitle.value);
    addBookModal.close(addAuthor.value);
    addBookModal.close(addPages.value);
    addBookModal.close(addReadStatus.value);
    displayBook();
});

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
        
        cardTitle.classList.add('title');
        cardTitle.textContent = `Title: ${book.title}`;
        card.appendChild(cardTitle);

        cardAuthor.classList.add('author');
        cardAuthor.textContent = `Author: ${book.author}`;
        card.appendChild(cardAuthor);

        cardPages.classList.add('pages')
        cardPages.textContent = `Pages: ${book.pages}`;
        card.appendChild(cardPages);

        cardToggle.classList.add('toggle-button');
        if (!book.isRead){
            cardToggle.classList.add('not-read');
        } 
        else{
            cardToggle.classList.remove('not-read');
        }
        cardToggle.textContent = `${status}`;
        card.appendChild(cardToggle);

        cardDelete.classList.add('delete');
        cardDelete.textContent = `Delete`;
        card.appendChild(cardDelete);
    }
}





