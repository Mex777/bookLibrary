let myLibrary = [];
const list = document.getElementById('list');

/**
 *
 * @param {*} name
 * @param {*} author
 * @param {*} size
 * @param {*} status
 */
function Book(name, author, size, status) {
  this.name = name;
  this.size = size;
  this.status = status;
  this.author = author;
}

/**
 * @param {*} book
 */
function addBook(book) {
  myLibrary.push(book);
  displayBook(book);
}

/**
 * @param {*} book
 */
function displayBook(book) {
  const card = document.createElement('div');
  card.className = 'card';

  const body = document.createElement('div');
  body.className = 'card-body';

  const name = document.createElement('h1');
  name.textContent = book.name;
  name.className = 'card-title';

  const author = document.createElement('h5');
  author.textContent = book.author;
  author.className = 'card-subtitle mb-2 text-muted';

  const size = document.createElement('p');
  size.textContent = book.size + ' pages';
  size.className = 'card-text';

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.className = 'btn btn-danger';
  deleteButton.addEventListener('click', () => {
    myLibrary = myLibrary.filter((el) => el != book);
    list.removeChild(card);
  });

  body.appendChild(name);
  body.appendChild(author);
  body.appendChild(size);
  body.appendChild(deleteButton);
  card.appendChild(body);
  list.appendChild(card);
}

const form = document.getElementById('addBook');
form.addEventListener('submit', (e) => {
  currBook = new Book(bookName.value, author.value, pages.value, false);
  bookName.value = author.value = pages.value = '';
  addBook(currBook);
  e.preventDefault();
});
