const hamburger = document.querySelector("#hamburger");
// const closeburger = document.querySelector("#close")
const menu = document.querySelector("#menu");
const menus = document.querySelector("#menu-links");


hamburger.addEventListener("click", () => {
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
});

hamburger.addEventListener("click", () => {
  if (menus.classList.contains("hidden")) {
    menus.classList.remove("hidden");
  } else {
    menus.classList.add("hidden");
  }
});
