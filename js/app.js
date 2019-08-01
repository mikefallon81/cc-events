document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');
  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.dir(e.target);
  });
});
