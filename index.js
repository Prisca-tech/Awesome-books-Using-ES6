import UI from './modules/uiClass.js';
import addBooks from './addBooks.js';
import { DateTime } from './modules/luxon.js';

addBooks();

const date = document.querySelector('.date');
date.innerHTML = DateTime.now().toLocaleString(DateTime.DATETIME_MED);

document.addEventListener('DOMContentLoaded', UI.displayBooks);
// adding navigation buttons
const list = document.querySelector('#list-btn');
const addNew = document.querySelector('#add-btn');
const contacts = document.querySelector('#contact-btn');
const addBook = document.querySelector('#new-book');
const contactForm = document.querySelector('#contact');
const bookSections = document.querySelector('#all-books');

// adding events

list.addEventListener('click', () => {
  addBook.classList.add('inactive');
  contactForm.classList.add('inactive');
  bookSections.classList.remove('inactive');
});

addNew.addEventListener('click', () => {
  addBook.classList.remove('inactive');
  bookSections.classList.add('inactive');
  contactForm.classList.add('inactive');
});

contacts.addEventListener('click', () => {
  contactForm.classList.remove('inactive');
  bookSections.classList.add('inactive');
  addBook.classList.add('inactive');
});
