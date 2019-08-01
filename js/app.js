document.addEventListener('DOMContentLoaded', () => {
  const readingList = document.querySelector('#reading-list');

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', (e) => {
    console.dir(e.target);
    e.preventDefault();
    const newDiv = document.createElement('div');
    newDiv.classList.add('list-item');

    const titleHeader = document.createElement('h2');
    titleHeader.textContent = e.target.title.value;
    const authorEntry = document.createElement('h3');
    authorEntry.textContent = e.target.author.value;
    const categoryEntry = document.createElement('h4');
    categoryEntry.textContent = e.target.category.value;

    newDiv.appendChild(titleHeader);
    newDiv.appendChild(authorEntry);
    newDiv.appendChild(categoryEntry);
    readingList.appendChild(newDiv);

    e.target.reset();
  });

  const deleteButton = document.querySelector('#delete-all');
  deleteButton.addEventListener('click', (e) => {
    while (readingList.firstChild) {
      readingList.removeChild(readingList.firstChild);
    }
  });
});
