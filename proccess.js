// !NAVBAR
const links = document.querySelectorAll(".burger__link");
links.forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelector("#burger").checked = false;
  });
});

const overlay = document.querySelector(".overlay");
overlay.addEventListener("click", () => {
  document.querySelector("#burger").checked = false;
});

// !NAVBAR

// ! TEAM
const button = document.getElementById("team__button");
const hiddenCard1 = document.getElementById("hidden1");
const hiddenCard2 = document.getElementById("hidden2");

button.addEventListener("click", function () {
  hiddenCard1.classList.toggle("showAll");
  hiddenCard2.classList.toggle("showAll");

  if (hiddenCard1.classList.contains("showAll")) {
    button.textContent = "Hide some";
  } else {
    button.textContent = "See all team";
  }
});

// ! TEAM
// ! OUR WORKING PROCCESS

const processCard = document.querySelector(".process__block");

// console.log(processCard);

processCard.addEventListener("click", () => {
  processCard.classList.toggle("active-card");
});
// ! OUR WORKING PROCCESS
