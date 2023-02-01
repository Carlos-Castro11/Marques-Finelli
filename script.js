import Slide from "./Slide/Slide.js";
const container = document.getElementById("slide");
const elements = document.getElementById("slide-elements");
const controls = document.getElementById("slide-controls");
if (container && elements && controls && elements.children.length) {
  const slide = new Slide(
    container,
    Array.from(elements.children),
    controls,
    3000
  );
}

const imgOn = document.querySelector(".imgContainer img");
const imgGallery = document.querySelectorAll(".imgContainer ul li img");
imgGallery.forEach((e) => {
  e.addEventListener("click", () => {
    const src = e.getAttribute("src");
    imgOn.setAttribute("src", src);
  });
});
