const bookDisplay = document.querySelector(".book-display");
const createNewBookBtn = document.querySelector(".create-book-btn");
const saveBookBtn = document.querySelector(".save-bookBtn");
const bookTitleInput = document.querySelector(".title-input");
const bookPagesInput = document.querySelector(".pages-input");
const bookAuthorInput = document.querySelector(".author-input");
const bookIsRead = document.querySelector("#readBook");
const modal = document.querySelector(".modal");
const closeModalBtn = document.querySelector(".close-modal-btn");
// const container = document.querySelector(".container");
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
saveBookBtn.addEventListener("click", extractBookInfoFromInput);

function extractBookInfoFromInput() {
  const bookTitle = bookTitleInput.value;
  const bookAuthor = bookAuthorInput.value;
  const bookPages = bookPagesInput.value;
  const read = bookIsRead.checked;
  const newBook = new NewBook(bookTitle, bookAuthor, bookPages, read);
  myLibrary.push(newBook);
  displayBooks();
  clearInputs();
  closeModal();
}

function clearInputs() {
  bookTitleInput.value = "";
  bookAuthorInput.value = "";
  bookPagesInput.value = " ";
}

function displayBooks() {
  bookDisplay.innerHTML = "";
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
    bookPages.classList.add("book-pages");
    bookPages.innerHTML = `Pages: ${book.pages}`;

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.classList.add("delete-button");

    deleteButton.addEventListener("click", () => {
      myLibrary.splice(index, 1);
      displayBooks();
    });
    bookContainer.append(bookTitle, bookAuthor, bookPages, deleteButton);
    bookDisplay.appendChild(bookContainer);
  });
}
