import './style/index.css'

const btnCloseMenu = document.querySelector('#btnCloseMenu');
const btnOpenMenu = document.querySelector('#btnOpenMenu');

const sideMenuMobile = document.querySelector('.side-menu_mobile');
const sideMenu = document.querySelector('.side-menu');

const containerInput = document.querySelector('.search__container-input');
const inputImg = document.querySelector('.search__input-img');

// открываем меню
btnOpenMenu.addEventListener('click', () => {
  sideMenuMobile.style = 'display: none';
  sideMenu.style = 'display: block';
})

// закрываем меню
btnCloseMenu.addEventListener('click', () => {
  sideMenu.style = 'display: none';
  sideMenuMobile.style = 'display: block';
})

// обработка поиска при скроле. Если хотим уйти position: sticy, необходимо добавить position: fixed
window.addEventListener("scroll", () =>{
  if (pageYOffset > 50) {
    containerInput.classList.add('_top-input');
    if (window.screen.availWidth < 440) {
      inputImg.classList.add('_hidden');
    }
    console.log(window.screen.availWidth)
  } else {
    containerInput.classList.remove('_top-input');
    inputImg.classList.remove('_hidden');
  }
});
