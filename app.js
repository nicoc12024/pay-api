const menuBtn = document.querySelector(".menu-btn");
const menuBar = document.querySelector(".menu-bar");
const layout = document.querySelector(".layout");
const menuBarLi = document.querySelectorAll(".menu-bar li");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
  menuBar.classList.toggle("active");
  layout.classList.toggle("active");
});

menuBarLi.forEach((item) => {
  item.addEventListener("click", () => {
    menuBtn.classList.toggle("open");
    menuBar.classList.toggle("active");
    layout.classList.toggle("active");
  });
});
