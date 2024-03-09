function scrollDown() {
  const documentHeight = document.documentElement.scrollHeight;
  const scrollAmount = documentHeight * 0.2;

  document.documentElement.scrollTo({
    top: scrollAmount,
    behavior: "smooth",
  });
}

function redirectToLink(link) {
  window.location.href = link;
}

window.addEventListener("scroll", reveal);
function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 130;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", revealmagically);
function revealmagically() {
  var revealmagicallys = document.querySelectorAll(".revealmagically");
  for (var i = 0; i < revealmagicallys.length; i++) {
    var windowheight = window.innerHeight;
    var revealmagicallytop = revealmagicallys[i].getBoundingClientRect().top;
    var revealpoint2 = 40;

    if (revealmagicallytop < windowheight - revealpoint2) {
      revealmagicallys[i].classList.add("active");
    } else {
      revealmagicallys[i].classList.remove("active");
    }
  }
}

const verticalBox1 = document.querySelector(".verticalbox1");
const verticalBox2 = document.querySelector(".verticalbox2");

verticalBox1.addEventListener("mouseover", () => {
  const imgGreen = document.querySelector(".imggreen");
  imgGreen.style.transform = "scale(1.03)";
});

verticalBox2.addEventListener("mouseover", () => {
  const imgPurple = document.querySelector(".imgpurple");
  imgPurple.style.transform = "scale(1.03)";
});

verticalBox1.addEventListener("mouseout", () => {
  const imgGreen = document.querySelector(".imggreen");
  imgGreen.style.transform = "scale(1)";
});

verticalBox2.addEventListener("mouseout", () => {
  const imgPurple = document.querySelector(".imgpurple");
  imgPurple.style.transform = "scale(1)";
});

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

var prevScrollpos = window.scrollY;
window.onscroll = function () {
  var currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-4em";
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
