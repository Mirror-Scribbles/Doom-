const $TogglesImgMenu = document.querySelector('.toggle-menu');

const $mainUlMenu = document.querySelector('.main-ul');

$TogglesImgMenu.addEventListener('click', () => {
$mainUlMenu.classList.toggle('main-ul--display');
});