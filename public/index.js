const menu = document.querySelector("#burger");
const nav = document.querySelector("nav ul");

menu.addEventListener("click", () => {
  nav.classList.toggle("hidden");
});
