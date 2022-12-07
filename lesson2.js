const hamburder = document.querySelector(".burgermenu");
const navMenu = document.querySelector(".nav-menu1");

hamburder.addEventListener("click", () => {
    hamburder.classList.toggle("active");
    navMenu.classList.toggle("active");
})