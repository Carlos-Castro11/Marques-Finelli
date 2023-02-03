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

// MOBILE MENU
const button_mobile = document.querySelector(".navMobile");
const menu_mobile = document.querySelector(".navList");
const menu_items = document.querySelectorAll(".navItem");
const page = document.querySelector("#main");
let menuOpen = false;

function showMenuMobile() {
  if (!menuOpen) {
    menu_mobile.classList.add("show_mobile");
    button_mobile.classList.add("animation");
    page.classList.add("black");
    menuOpen = true;
  } else {
    menu_mobile.classList.remove("show_mobile");
    button_mobile.classList.remove("animation");
    page.classList.remove("black");
    menuOpen = false;
  }
}

function removeMenuMobile() {
  menu_mobile.classList.remove("show_mobile");
  button_mobile.classList.remove("animation");
  page.classList.remove("black");
  menuOpen = false;
}

menu_items.forEach((item) => {
  item.addEventListener("click", removeMenuMobile);
});

button_mobile.addEventListener("click", showMenuMobile);
page.addEventListener("click", removeMenuMobile);

// ABOUT SCROLL
const windowHalf = window.innerHeight * 0.7;
const aboutImg = document.querySelector(".imageAbout");
const windowHalf2 = window.innerHeight * 0.93;

function AboutImgAnimation() {
  const imgTop = aboutImg.getBoundingClientRect().top;
  const isImgAboutVisible = imgTop - windowHalf2 < 220;
  const isImgAboutInvisible = imgTop - windowHalf2 > 220;
  console.log(isImgAboutInvisible);
  if (isImgAboutVisible) aboutImg.classList.add("animate");
  if (isImgAboutInvisible) aboutImg.classList.remove("animate");
}

AboutImgAnimation();
window.addEventListener("scroll", AboutImgAnimation);

const aboutText = document.querySelector(".aboutText ");

function aboutTextAnimation() {
  const textTop = aboutText.getBoundingClientRect().top;
  const isAboutTextVisible = textTop - windowHalf2 < 220;
  const isAboutTextInvisible = textTop - windowHalf2 > 220;
  if (isAboutTextVisible) aboutText.classList.add("animate");
  if (isAboutTextInvisible) aboutText.classList.remove("animate");
}

aboutTextAnimation();
window.addEventListener("scroll", aboutTextAnimation);
