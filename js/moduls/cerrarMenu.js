export function cerrarMenu() {
  const mobileNav = document.getElementById("mobile-nav");
  const mobileButtons = mobileNav.querySelectorAll("button");

  mobileButtons.forEach((button) => {
    button.addEventListener("click", () => {
      mobileNav.classList.remove("active");
    });
  });
}
