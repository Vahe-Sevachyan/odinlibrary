const bookDisplay = document.querySelector(".book-display");
const createNewBookBtn = document.querySelector(".create-book-btn");
const saveBookBtn = document.querySelector(".save-bookBtn");
const bookPagesInput = document.querySelector(".pages-input");
const bookAuthorInput = document.querySelector(".author-input");
const bookTitleInput = document.querySelector(".title-input");
const modal = document.querySelector(".modal");
const closeModalBtn = document.querySelector(".close-modal-btn");
let myLibrary = [];

function NewBook(title, author, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.id = Math.floor(Math.random() * 999999999999 + 1);
  this.read = read;
  this.info = function () {
    return `${this.title} ${this.author} ${this.pages} ${this.read}`;
  };
}

createNewBookBtn.addEventListener("click", function () {
  modal.style.display = "block";
});

function closeModal() {
  modal.style.display = "none";
}

closeModalBtn.addEventListener("click", closeModal);

function extractBookInfoFromInput() {
  const bookTitle = bookTitleInput.value;
  const bookAuthor = bookAuthorInput.value;
  const bookPages = bookPagesInput.value;
  const read = null;
  addBookToLibrary(bookTitle, bookAuthor, bookPages, read);
}

saveBookBtn.addEventListener("click", extractBookInfoFromInput);

function addBookToLibrary(title, author, pages, read) {
  const newBook = new NewBook(title, author, pages, read);
  myLibrary = [...myLibrary, newBook];
  myLibrary.forEach((book) => {
    console.log(book.id);
  });
}
