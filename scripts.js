const menu = document.querySelector('.menu');
const navItem = document.querySelectorAll('.nav_item');
const nav = document.querySelector('nav');

menu.addEventListener('click', () => {
  nav.classList.add('open-nav');
})

navItem.forEach(item => item.addEventListener('click', () => {
  nav.classList.remove('open-nav');
}))