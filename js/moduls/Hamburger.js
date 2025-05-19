export function configurarMenuHamburguesa() {
    const hamburger = document.getElementById("hamburger-menu")
    const mobileNav = document.getElementById("mobile-nav")

    hamburger.addEventListener("click", () => {
        mobileNav.classList.toggle("active")

        // Animar las barras del menú hamburguesa
        const spans = hamburger.querySelectorAll("span")
        spans.forEach((span) => {
            span.classList.toggle("active")
        })
    })
}