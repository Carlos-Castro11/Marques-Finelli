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
const windowHalf2 = window.innerHeight * 0.8;

function AboutImgAnimation() {
  const imgTop = aboutImg.getBoundingClientRect().top;
  const isImgAboutVisible = imgTop - windowHalf2 < 220;
  const isImgAboutInvisible = imgTop - windowHalf2 > 220;
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

// AD SCROLL
const adImg = document.querySelector(".adImage");

function adImgAnimation() {
  const imgAdTop = adImg.getBoundingClientRect().top;
  const isImgAdVisible = imgAdTop - windowHalf2 < 220;
  const isImgAdInvisible = imgAdTop - windowHalf2 > 220;
  if (isImgAdVisible) adImg.classList.add("animate");
  if (isImgAdInvisible) adImg.classList.remove("animate");
}

window.addEventListener("scroll", adImgAnimation);

const adText = document.querySelector(".adText ");

function adTextAnimation() {
  const adTextTop = adText.getBoundingClientRect().top;
  const isAdTextVisible = adTextTop - windowHalf2 < 220;
  const isAdTextInvisible = adTextTop - windowHalf2 > 220;
  if (isAdTextVisible) adText.classList.add("animate");
  if (isAdTextInvisible) adText.classList.remove("animate");
}

window.addEventListener("scroll", adTextAnimation);

// LOCAL SCROLL
const localT = document.querySelector(".localTitle");
const localP = document.querySelector(".localText");
const map = document.querySelector(".map");

function localTitleAnimation() {
  const localTitleTop = localT.getBoundingClientRect().top;
  const isLocalTitleVisible = localTitleTop - windowHalf2 < 220;
  const isLocalTitleInvisible = localTitleTop - windowHalf2 > 220;
  if (isLocalTitleVisible) localT.classList.add("animate");
  if (isLocalTitleInvisible) localT.classList.remove("animate");
}

window.addEventListener("scroll", localTitleAnimation);

function localTextAnimation() {
  const localTextTop = localP.getBoundingClientRect().top;
  const isLocalTextVisible = localTextTop - windowHalf2 < 220;
  const isLocalTextInvisible = localTextTop - windowHalf2 > 220;
  if (isLocalTextVisible) localP.classList.add("animate");
  if (isLocalTextInvisible) localP.classList.remove("animate");
}

window.addEventListener("scroll", localTextAnimation);

function localMapAnimation() {
  const localMapTop = map.getBoundingClientRect().top;
  const isLocalMapVisible = localMapTop - windowHalf2 < 220;
  const isLocalMapInvisible = localMapTop - windowHalf2 > 220;
  if (isLocalMapVisible) map.classList.add("animate");
  if (isLocalMapInvisible) map.classList.remove("animate");
}

window.addEventListener("scroll", localMapAnimation);

// FOOTER SCROLL

const footer = document.querySelector(".infos");
const devs = document.querySelector(".devs");
const client = document.querySelector(".client");

function footerAnimation() {
  const footerTop = footer.getBoundingClientRect().top;
  const isfooterMapVisible = footerTop - windowHalf2 < 220;
  const isfooterMapInvisible = footerTop - windowHalf2 > 220;
  if (isfooterMapVisible) footer.classList.add("animate");
  if (isfooterMapInvisible) footer.classList.remove("animate");
}

function devsAnimation() {
  const devsTop = devs.getBoundingClientRect().top;
  const isdevsVisible = devsTop - windowHalf2 < 220;
  const isdevsInvisible = devsTop - windowHalf2 > 220;
  if (isdevsVisible) devs.classList.add("animate");
  if (isdevsInvisible) devs.classList.remove("animate");
}

function clientsAnimation() {
  const clientTop = client.getBoundingClientRect().top;
  const isclientVisible = clientTop - windowHalf2 < 220;
  const isclientInvisible = clientTop - windowHalf2 > 220;
  if (isclientVisible) client.classList.add("animate");
  if (isclientInvisible) client.classList.remove("animate");
}

window.addEventListener("scroll", devsAnimation);
window.addEventListener("scroll", clientsAnimation);
window.addEventListener("scroll", footerAnimation);
