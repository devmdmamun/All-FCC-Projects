const toggleButton = document.getElementById("toggle-btn");
const navBar = document.getElementById("nav-bar");
toggleButton.addEventListener("click", () => {
  navBar.classList.toggle("active");
});
