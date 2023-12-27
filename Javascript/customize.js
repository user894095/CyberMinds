function changepagetoHomeScreen() {
  window.location.href = "../index.html";
}

const parentContainer = document.querySelector(".Parent-container");
const firstBox = document.querySelector(".first-box");
const buttonsInFirstBox = firstBox.querySelectorAll("button");
const colorWheels = document.querySelectorAll(".color-wheel");
let isClicked = false;
let isHover = false;

colorWheels.forEach((colorWheel) => {
  colorWheel.addEventListener("click", () => {
    if (!isClicked) {
      const colorWheelClicked = colorWheel.id;
      changeStyles(colorWheelClicked);
      colorWheel.style.opacity = "0.2";
      isClicked = true;

      setTimeout(() => {
        colorWheel.style.opacity = "1";
        isClicked = false;
      }, 50);
    }
  });
});

colorWheels.forEach((colorWheel) => {
  colorWheel.addEventListener("mouseenter", () => {
    colorWheel.style.opacity = "0.8";
    isHover = true;

    colorWheel.addEventListener("mouseleave", () => {
      colorWheel.style.opacity = "1";
      isHover = false;
    });
  });
});

function changeStyles(colorWheelClicked) {
  if (colorWheelClicked === "color-wheel1") {
    parentContainer.style.backgroundColor = "rgb(255, 136, 56)";
    firstBox.style.backgroundColor = "rgb(123, 2, 2)";
    buttonsInFirstBox.forEach((button) => {
      const gradient = `
      linear-gradient(51deg,
        rgb(255, 8, 0) 0%,
        rgb(255, 165, 61) 50%,
        rgb(255, 136, 0) 70%,
        rgb(255, 103, 2) 90%,
        rgb(255, 77, 0) 115%,
        rgb(255, 8, 0) 145%,
        rgb(204, 51, 0) 160%,
        rgb(123, 2, 2) 180%
      )`;

      button.style.background = gradient;
    });
  }
  if (colorWheelClicked === "color-wheel2") {
    parentContainer.style.backgroundColor = "   rgb(254, 233, 94)";
    firstBox.style.backgroundColor = " rgb(255, 136, 0)";
    buttonsInFirstBox.forEach((button) => {
      const gradient = `
      linear-gradient(51deg,
        rgb(234, 255, 0) 0%,
        rgb(255, 165, 61) 50%,
        rgb(255, 136, 0) 70%,
        rgb(255, 103, 2) 90%,
        rgb(255, 136, 0) 115%,
        rgb(255, 136, 0) 145%,
        rgb(255, 216, 107) 160%,
        rgb(234, 255, 0) 180%
      )`;

      button.style.background = gradient;
    });
  }
  if (colorWheelClicked === "color-wheel3") {
    parentContainer.style.backgroundColor = "rgb(42, 249, 23)";
    firstBox.style.backgroundColor = "rgb(42, 249, 23)";
    backButton.style.background =
      "linear-gradient(51deg, rgba(42, 249, 23, 0.903), rgba(42, 249, 23, 0.762), rgb(42, 249, 23), rgba(42, 249, 23, 0.778), rgba(42, 249, 23, 0.305)";
  }
  if (colorWheelClicked === "color-wheel4") {
    console.log(`yes`);
  }
  if (colorWheelClicked === "color-wheel5") {
    console.log(`yes`);
  }
  if (colorWheelClicked === "color-wheel6") {
    console.log(`yes`);
  }
  if (colorWheelClicked === "color-wheel7") {
    console.log(`yes`);
  }
  if (colorWheelClicked === "color-wheel8") {
    console.log(`yes`);
  }
}

const buttonsInWholething = parentContainer.querySelectorAll("button");
let isClicked23 = false;
let isHover23 = false;

buttonsInWholething.forEach((button) => {
  button.addEventListener("click", () => {
    if (!isClicked) {
      button.style.opacity = "0.1";
      isClicked = true;

      setTimeout(() => {
        button.style.opacity = "1";
        isClicked = false;
      }, 50);
    }
  });
});

buttonsInWholething.forEach((button) => {
  button.addEventListener("mouseenter", () => {
    button.style.opacity = "0.8";
    isHover = true;

    button.addEventListener("mouseleave", () => {
      button.style.opacity = "1";
      isHover = false;
    });
  });
});
