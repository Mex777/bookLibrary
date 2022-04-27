let myLibrary = [];
const list = document.getElementById('list');

/**
 *
 * @param {*} name
 * @param {*} author
 * @param {*} size
 * @param {*} hasRead
 */
function Book(name, author, size, hasRead) {
  this.name = name;
  this.size = size;
  this.hasRead = hasRead;
  this.author = author;
  this.toggleRead = () => {
    this.hasRead = !this.hasRead;
  };
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
  card.className = 'card text-center';

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

  const status = document.createElement('input');
  status.type = 'checkbox';
  status.role = 'switch';
  status.className = 'form-check-input card-text';
  status.checked = book.hasRead;
  status.addEventListener('change', () => {
    book.toggleRead();
  });

  const footer = document.createElement('div');
  footer.className = 'card-footer text-end';

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
  body.appendChild(status);
  footer.appendChild(deleteButton);
  card.appendChild(body);
  card.appendChild(footer);
  list.appendChild(card);
}

const form = document.getElementById('addBook');
form.addEventListener('submit', (e) => {
  currBook = new Book(
      bookName.value, author.value, pages.value, readTheBook.checked,
  );
  bookName.value = author.value = pages.value = '';
  readTheBook.checked = false;
  addBook(currBook);
  e.preventDefault();
});
