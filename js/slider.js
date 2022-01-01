const slider = document.getElementById("slider");
const btnLeft = document.getElementById("btn-left");
const btnRight = document.getElementById("btn-right");
let sliders = document.querySelectorAll(".slider-item");

const sliderLast = sliders[sliders.length - 1];
slider.prepend(sliderLast);

const nextLeft = () => {
  let slidersClick = document.querySelectorAll(".slider-item");
  const sliderLastClick = slidersClick[slidersClick.length - 1];
  console.log(sliderLastClick);
  slider.classList.add("container-slider--Left");
  setTimeout(() => {
    slider.classList.remove("container-slider--Left");
    slider.prepend(sliderLastClick);
  }, 500);
};

const nextRight = () => {
  let slidersClick = document.querySelectorAll(".slider-item");
  const sliderFirstClick = slidersClick[0];
  console.log(sliderFirstClick);
  slider.classList.add("container-slider--Right");
  setTimeout(() => {
    slider.classList.remove("container-slider--Right");
    slider.append(sliderFirstClick);
  }, 500);
};

btnLeft.addEventListener("click", () => {
  nextLeft();
});

btnRight.addEventListener("click", (e) => {
  e.preventDefault();
  nextRight();
});

setInterval(() => {
  nextRight();
}, 5000);
