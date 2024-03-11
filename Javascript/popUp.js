const nextButton = document.querySelector('.next-button');
const exitButton = document.querySelector('.exit-button');
const nextCourse = document.querySelector('.next_course');
const popUp = document.querySelector('.pop-up');

nextCourse.addEventListener('click', () => {
    console.log("clicked");
    popUp.classList.toggle('active');
}) 

nextButton.addEventListener('click', () => {
    console.log("clicked");
    popUp.classList.toggle('active');
})

exitButton.addEventListener('click', () => {
    console.log("clicked");
    popUp.classList.toggle('active');
})