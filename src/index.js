import './style/index.css'

const btnCloseMenu = document.querySelector('#btnCloseMenu');
const btnOpenMenu = document.querySelector('#btnOpenMenu');

const sideMenuMobile = document.querySelector('.side-menu_mobile');
const sideMenu = document.querySelector('.side-menu');

btnOpenMenu.addEventListener('click', () => {
    sideMenuMobile.style = 'display: none';
    sideMenu.style = 'display: block';
})

btnCloseMenu.addEventListener('click', () => {
    sideMenu.style = 'display: none';
    sideMenuMobile.style = 'display: block';
})


console.log('Ghbdtm!!!')