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
    var revealpoint2 = 100;

    if (revealmagicallytop < windowheight - revealpoint2) {
      revealmagicallys[i].classList.add("active");
    } else {
      revealmagicallys[i].classList.remove("active");
    }
  }
}

// document.addEventListener("scroll", function () {
//   var section2Container = document.querySelector(".section2-container");
//   var section3 = document.querySelector(".section3");
//   var scrollY = window.scrollY || window.pageYOffset;
//   var documentHeight = document.documentElement.scrollHeight;
//   var scrollThreshold = documentHeight * 0.3; // 20% of the document height
//   var maxTopPosition = 25; // Maximum top position in percentage

//   // Check if the scroll position is beyond the scroll threshold
//   if (scrollY > scrollThreshold) {
//     // Calculate the top position with a maximum value
//     var topPosition = 30;
//     section2Container.style.top = topPosition + "%";
//   } else {
//     // Reset the top position if below the scroll threshold
//     section2Container.style.top = topPosition + "%";
//   }
// });

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
