document.addEventListener("DOMContentLoaded", function () {
  const numberOfCircles = 300; // You can adjust the number of circles

  const circlesContainer = document.getElementById("circles-container");

  for (let i = 0; i < numberOfCircles; i++) {
    const circle = document.createElement("li");

    // Randomize properties
    circle.style.left = `${Math.random() * 97}%`;
    circle.style.width = `${Math.random() * 0.5}em`;
    var width = circle.style.width;
    circle.style.height = width;
    circle.style.opacity = `${Math.random() * 100}%`;
    circle.style.animationDelay = `${Math.random() * 3}s`;
    var randomDuration = Math.random() * 20;
    if (randomDuration < 2) {
      randomDuration = randomDuration + 4;
    }
    circle.style.animationDuration = `${randomDuration}s`;
    console.log(randomDuration);
    circlesContainer.appendChild(circle);
  }
});
