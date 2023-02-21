/* eslint-disable max-classes-per-file */
// eslint-disable-next-line import/named
import Book from './modules/book.js';
import bookShelt1 from './modules/bookshelf.js';
import './modules/navBar.js';
import { displayTime, time } from './modules/currentTime.js';

const titleInput = document.querySelector('.title-input');
const authorInput = document.querySelector('.author-input');
const form = document.getElementById('forma');

displayTime.textContent = time();
setInterval(() => {
  displayTime.textContent = time();
}, 1000);
form.addEventListener('submit', (event) => {
  const title = titleInput.value;
  const author = authorInput.value;
  const book = new Book(title, author);
  bookShelt1.addBook(book);
  titleInput.value = '';
  authorInput.value = '';
  event.preventDefault();
});