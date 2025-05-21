export function configurarMenuHamburguesa() {
  const hamburgerBtn = document.getElementById("hamburger-btn")
  const mobileNav = document.getElementById("mobile-nav")

  if (hamburgerBtn && mobileNav) {
    hamburgerBtn.addEventListener("click", () => {
      mobileNav.classList.toggle("active")
    })
  }
}
