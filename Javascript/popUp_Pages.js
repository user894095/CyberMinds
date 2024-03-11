const next_course = document.querySelector(".next_course");
const exitButton = document.querySelector(".exit-button");
const popUp = document.querySelector(".pop-up");
const section = document.querySelector(".section");

next_course.addEventListener("click", () => {
  popUp.classList.toggle("active");
});

exitButton.addEventListener("click", () => {
  popUp.classList.toggle("active");
  popUp.style.opacity = "0";
});
