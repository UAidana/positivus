const slider = document.querySelector(".testimonials__cards");
const wrappers = document.querySelectorAll(".wrapper");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const navDots = document.querySelectorAll(".testimonials__navigation");

let currentIndex = 0;

function updateActiveDot() {
  navDots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentIndex);
  });
}

function scrollToSlide(index) {
  if (index < 0 || index >= wrappers.length) return;
  currentIndex = index;
  const wrapperWidth = wrappers[0].offsetWidth;
  slider.scrollTo({
    left: wrapperWidth * currentIndex,
    behavior: "smooth",
  });
  updateActiveDot();
}

prevButton.addEventListener("click", () => {
  if (currentIndex > 0) {
    scrollToSlide(currentIndex - 1);
  }
});

nextButton.addEventListener("click", () => {
  if (currentIndex < wrappers.length - 1) {
    scrollToSlide(currentIndex + 1);
  }
});

navDots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    scrollToSlide(index);
  });
});

slider.addEventListener("scroll", () => {
  const wrapperWidth = wrappers[0].offsetWidth;
  const scrollLeft = slider.scrollLeft;
  currentIndex = Math.round(scrollLeft / wrapperWidth);
  updateActiveDot();
});

// Initialize first dot as active
updateActiveDot();
