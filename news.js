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

const windowHalf = window.innerHeight * 0.7;
const windowHalf2 = window.innerHeight * 0.8;

// INTERPRISE SCROLL
const col1 = document.querySelector(".col1");
const col2 = document.querySelector(".col2");

function col1Animation() {
  const col1Top = col1.getBoundingClientRect().top;
  const iscol1Visible = col1Top - windowHalf2 < 220;
  const iscol1Invisible = col1Top - windowHalf2 > 220;
  if (iscol1Visible) col1.classList.add("animate");
  if (iscol1Invisible) col1.classList.remove("animate");
}

col1Animation();
window.addEventListener("scroll", col1Animation);

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

footerAnimation();
devsAnimation();
clientsAnimation();
window.addEventListener("scroll", devsAnimation);
window.addEventListener("scroll", clientsAnimation);
window.addEventListener("scroll", footerAnimation);
