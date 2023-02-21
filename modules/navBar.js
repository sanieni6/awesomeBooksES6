const listButton = document.querySelector('#list');
const addButton = document.querySelector('#new');
const contactButton = document.querySelector('#contact');
const listSection = document.querySelector('.displayed-books');
const addSection = document.querySelector('.book-form');
const contactSection = document.querySelector('.contact-info');
const sectionTitle = document.querySelector('#title-books');

window.onload = () => {
  addSection.classList.add('hidden');
  contactSection.classList.add('hidden');
  listButton.style.color = '#0000FF';
};

listButton.addEventListener('click', () => {
  addSection.classList.add('hidden');
  contactSection.classList.add('hidden');
  listSection.classList.add('display');
  listSection.classList.remove('hidden');
  sectionTitle.classList.remove('hidden');
  listButton.style.color = '#0000ff';
  contactButton.style.color = '#000';
  addButton.style.color = '#000';
});
addButton.addEventListener('click', () => {
  listSection.classList.add('hidden');
  addSection.classList.remove('hidden');
  contactSection.classList.add('hidden');
  sectionTitle.classList.add('hidden');
  listButton.style.color = '#000';
  addButton.style.color = '#0000ff';
  contactButton.style.color = '#000';
});
contactButton.addEventListener('click', () => {
  listSection.classList.add('hidden');
  addSection.classList.add('hidden');
  contactSection.classList.remove('hidden');
  sectionTitle.classList.add('hidden');
  listButton.style.color = '#000';
  addButton.style.color = '#000';
  contactButton.style.color = '#0000ff';
});