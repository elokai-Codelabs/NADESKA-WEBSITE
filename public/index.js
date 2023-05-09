const menu = document.querySelector("#burger");
const nav = document.querySelector("nav ul");

menu.addEventListener("click", () => {
  nav.classList.toggle("hidden");
  menu.classList.toggle("hidden");
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 1024) {
    nav.classList.remove("hidden");
    menu.classList.add("hidden");
  } else {
    nav.classList.add("hidden");
    menu.classList.remove("hidden");
  }
});
