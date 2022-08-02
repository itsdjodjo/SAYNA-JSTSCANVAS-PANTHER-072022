// popup
const open = document.getElementById('open');
const close = document.getElementById('close');
const popupContainer = document.getElementById('popup-container');

open?.addEventListener('click', () => {
    popupContainer.classList.add('active');
});
close.addEventListener('click', () => {
    popupContainer.classList.remove('active');
});
