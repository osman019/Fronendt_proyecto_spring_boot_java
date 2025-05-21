export function cerrarMenu() {
  const menuButtons = document.querySelectorAll("#mobile-nav a")
  const mobileNav = document.getElementById("mobile-nav")

  if (menuButtons.length > 0 && mobileNav) {
    menuButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        mobileNav.classList.remove("active")
      })
    })
  }
}
