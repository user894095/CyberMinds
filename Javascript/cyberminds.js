function scrollDown() {
  const documentHeight = document.documentElement.scrollHeight;
  const scrollAmount = documentHeight * 0.1;

  document.documentElement.scrollTo({
    top: scrollAmount,
    behavior: "smooth",
  });
}

function changePageMoreInfo() {
  window.location.href = "./HTML/moreinfo.html";
}

function changePagePrivacy() {
  window.location.href = "./HTML/privacy.html";
}

function changePageDashboard() {
  window.location.href = "./HTML/dashboard.html";
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

function changePagesignIn() {
  window.location.href = "./HTML/signIn.html";
}

function changePagenewAccount() {
  window.location.href = "./HTML/newAccount.html";
}

function changePagesignOut() {
  window.location.href = "./HTML/signout.html";
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
