const knap = document.querySelector(".burgerKnap");
const links = document.querySelector(".navLinks");

knap.addEventListener("click", toggleMenu);

function toggleMenu() {
  console.log("toggleMenu");
  links.classList.toggle("skjult");
}
