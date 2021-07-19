const toggleButton = document.getElementById("toggle-btn");
const navBar = document.getElementById("navbar");
toggleButton.addEventListener("click", () => {
  navBar.classList.toggle("active");
});
