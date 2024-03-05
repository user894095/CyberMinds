function scrollDown() {
  const documentHeight = document.documentElement.scrollHeight;
  const scrollAmount = documentHeight * 0.2;

  document.documentElement.scrollTo({
    top: scrollAmount,
    behavior: "smooth",
  });
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
