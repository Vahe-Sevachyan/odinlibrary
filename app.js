const bookDisplay = document.querySelector(".book-display");
const createNewBookBtn = document.querySelector(".create-book-btn");
const saveBookBtn = document.querySelector(".save-bookBtn");
const bookTitleInput = document.querySelector(".title-input");
const bookPagesInput = document.querySelector(".pages-input");
const bookAuthorInput = document.querySelector(".author-input");
const bookIsRead = document.querySelector("#readBook");
const modal = document.querySelector(".modal");
const closeModalBtn = document.querySelector(".close-modal-btn");
let myLibrary = [];

function NewBook(title, author, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.id = Math.floor(Math.random() * 999999999999 + 1);
  this.read = read;
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
  const read = bookIsRead.checked;
  const newBook = new NewBook(bookTitle, bookAuthor, bookPages, read);
  myLibrary.push(newBook);
  displayBooks();
  clearInputs();
  // closeModal();
}

function clearInputs() {
  bookTitleInput.value = "";
  bookAuthorInput.value = "";
  bookPagesInput.value = " ";
}
saveBookBtn.addEventListener("click", extractBookInfoFromInput);

// function addBookToLibrary(title, author, pages, read) {
//   const bookContainer = document.createElement("div");
//   const bookTitle = document.createElement("span");
//   const bookAuthor = document.createElement("span");
//   const bookPage = document.createElement("span");
//   const readBook = document.createElement("span");

// }
function displayBooks() {
  myLibrary.forEach((book, index) => {
    const bookContainer = document.createElement("div");
    bookContainer.classList.add("book-container");

    const bookTitle = document.createElement("h3");
    bookTitle.classList.add("book-title");
    bookTitle.innerHTML = `Title: ${book.title}`;

    const bookAuthor = document.createElement("p");
    bookAuthor.classList.add("book-author");
    bookAuthor.innerHTML = `Author: ${book.author}`;

    const bookPages = document.createElement("p");
    bookPages.classList.add("book-pages ");
  });
}

myLibrary.forEach((book, index) => {
  // myLibrary.push(newBook);
  // bookContainer.append(bookTitle, bookAuthor, bookPage, readBook);
  // bookDisplay.appendChild(bookContainer);
  // bookTitle.textContent = book.title;
  // bookAuthor.textContent = book.author;
  // bookPage.textContent = book.pages;
  // readBook.textContent = book.read;
});
