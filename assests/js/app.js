/* ================ SHOW MENU =============== */
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/* ========= MENU SHOW ========= */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("left-0");
  });
}

/* ========= MENU HIDDEN ======== */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("left-0");
  });
}
