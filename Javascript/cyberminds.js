function scrollDown() {
  const documentHeight = document.documentElement.scrollHeight;
  const scrollAmount = documentHeight * 0.2;

  document.documentElement.scrollTo({
    top: scrollAmount,
    behavior: "smooth",
  });
}

var prevScrollpos = window.scrollY;
window.onscroll = function () {
  var currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
};

function changePageMoreInfo() {
  window.location.href = "./HTML/moreinfo.html";
}

function changePageSupport() {
  window.location.href = "./HTML/support.html";
}

function changePageMission() {
  window.location.href = "./HTML/mission.html";
}

function changePageCustomize() {
  window.location.href = "./HTML/customize.html";
}

function changePageourTeam() {
  window.location.href = "./HTML/ourTeam.html";
}

function changePageContent() {
  window.location.href = "./HTML/course_Contents.html";
}

const parentContainer = document.querySelector(".Parent-container");
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
    console.log(button.class);
    button.style.opacity = "0.8";
    isHover = true;

    button.addEventListener("mouseleave", () => {
      button.style.opacity = "1";
      isHover = false;
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const dotsContainer = document.getElementById("dotsContainer");

  // Number of dots
  const numDots = 100;

  for (let i = 0; i < numDots; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dotsContainer.appendChild(dot);

    // Set random position for each dot
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    dot.style.left = `${posX}%`;
    dot.style.top = `${posY}%`;
  }
});
