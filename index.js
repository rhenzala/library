const container = document.querySelector('.card-container');
const addBookBtn = document.getElementById('addBook');
const addBookModal = document.getElementById('addBookModal');
const addTitle = addBookModal.querySelector('#title');
const addAuthor = addBookModal.querySelector('#author');
const addPages = addBookModal.querySelector('#pages');
const addReadStatus = addBookModal.querySelector('#isRead');
const confirmBtn = addBookModal.querySelector('#confirm');
const errorMsg = addBookModal.querySelector('.error-msg');
const cancelBtn = addBookModal.querySelector('#cancel');

const myLibrary = [];

class Book {
    constructor(title, author, pages, isRead){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = Boolean(isRead);
    }
    toggleReadStatus(){
        this.isRead = !this.isRead;
    }
}

function addBookToLibrary(title, author, pages, isRead){
    isRead = (isRead === 'yes') ? true: false;
    pages = Number(pages);
    const book = new Book(title, author, pages, isRead);

    myLibrary.push(book);
}

function displayBook(){
    const card = document.createElement('div');
    const cardTitle = document.createElement('div');
    const cardAuthor = document.createElement('div');
    const cardPages = document.createElement('div');
    const cardToggle = document.createElement('button');
    const cardDelete = document.createElement('button');
    card.classList.add('card');
    container.appendChild(card);

    myLibrary.forEach((book, index) => {
        card.setAttribute('data-id', index);
        let status = (book.isRead) ? 'READ': 'NOT READ';
        
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
    })
}

container.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete')) {
        const bookCard = event.target.closest('.card');
        const bookIndex = parseInt(bookCard.getAttribute('data-id'));
        myLibrary.splice(bookIndex, 1);
        bookCard.remove();
        const remainingCards = container.querySelectorAll('.card');
        remainingCards.forEach((card, index) => {
            card.setAttribute('data-id', index);
        });
    }
});

container.addEventListener('click', (event) => {
    const bookCard = event.target.closest('.card');
    if (event.target.classList.contains('toggle-button')) {
        const bookIndex = parseInt(bookCard.getAttribute('data-id'));
        const book = myLibrary[bookIndex];

        book.toggleReadStatus();

        const toggleButton = event.target;
        if (book.isRead) {
            toggleButton.textContent = 'READ';
            toggleButton.classList.remove('not-read');
        } else {
            toggleButton.textContent = 'NOT READ';
            toggleButton.classList.add('not-read');
        }
    }
});

addBookBtn.addEventListener('click', () => {
    addBookModal.showModal();
});

confirmBtn.addEventListener('click', (event) => {
    event.preventDefault(); 

    if (!addTitle.value.trim() || !addAuthor.value.trim() || !addPages.value.trim() || !addReadStatus.value) {
        errorMsg.textContent = 'Please fill in all fields before submitting!';
        return;
    }
    else{
        errorMsg.textContent = '';
    }
    addBookToLibrary(addTitle.value, addAuthor.value, addPages.value, addReadStatus.value);
    addBookModal.close();
    displayBook();

    addTitle.value = '';
    addAuthor.value = '';
    addPages.value = '';
    addReadStatus.value = '';
});

cancelBtn.addEventListener('click', () => {
    errorMsg.textContent = '';
})





