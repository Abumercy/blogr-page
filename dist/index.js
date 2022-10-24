const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector("#menu");

hamburger.addEventListener("click", (e) => {
  hamburger.classList.toggle("active");
  menu.classList.toggle("active");
});

document.querySelectorAll("span").forEach((n) =>
  n.addEventListener("click", (e) => {
    hamburger.classList.remove("active");
    menu.classList.remove("active");
  })
);