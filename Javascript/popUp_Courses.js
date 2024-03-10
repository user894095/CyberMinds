const c11div = document.querySelector('.c11trigger');
const c12div = document.querySelector('.c12trigger');
const exitButton = document.querySelector('.exit-button');
const popUp = document.querySelector('.pop-up');

c11div.addEventListener('click', () => {
    popUp.classList.toggle('active');
}) 

c12div.addEventListener('click', () => {
    popUp.classList.toggle('active');
})

exitButton.addEventListener('click', () => {
    popUp.classList.toggle('active');
})