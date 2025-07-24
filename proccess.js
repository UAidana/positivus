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
const processCards = document.querySelectorAll(".process__block");
const processCheckbox = document.querySelectorAll(".process__checkbox");

console.log(processCards);
console.log(processCheckbox);

const handleAddStyle = (eachCard) => {
  eachCard.classList.toggle("active-card");
};

const toggleCheckbox = (eachCard) => {
  const eachCheckbox = eachCard.querySelector(`input[type="checkbox"]`);
  eachCheckbox.checked = !eachCheckbox.checked;
};

const toggleInput = (eachCard) => {
  const eachInput = eachCard.querySelector(`input[type="checkbox"]`);
  eachInput.addEventListener("click", () => {
    eachCard.classList.toggle("active-card");
  });
};

processCards.forEach((eachCard) =>
  eachCard.addEventListener("click", () => {
    handleAddStyle(eachCard);
    toggleCheckbox(eachCard);
    toggleInput(eachCard);
  })
);

// ! OUR WORKING PROCCESS
