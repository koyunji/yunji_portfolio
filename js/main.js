const toggleBtn = document.querySelector('.navbar_toogleBtn');
const menu = document.querySelector('.navbar_menu');
const language = document.querySelector('.navbar_language');

toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
  language.classList.toggle('active');
});