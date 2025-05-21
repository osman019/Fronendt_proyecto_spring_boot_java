export function configurarNavegacion() {
  configurarNavegacionOfertas()
  configurarNavegacionAcerca()
}

function configurarNavegacionOfertas() {
  const ofertasBtn = document.getElementById("ofertas-btn")
  const mobileOfertasBtn = document.getElementById("mobile-ofertas-btn")
  const ofertasSection = document.getElementById("ofertas-especiales")
  const mobileNav = document.getElementById("mobile-nav")

  if (ofertasBtn && ofertasSection) {
    ofertasBtn.addEventListener("click", () => {
      ofertasSection.scrollIntoView({ behavior: "smooth" })
    })
  }

  if (mobileOfertasBtn && ofertasSection && mobileNav) {
    mobileOfertasBtn.addEventListener("click", () => {
      ofertasSection.scrollIntoView({ behavior: "smooth" })
      mobileNav.classList.remove("active")
    })
  }
}

function configurarNavegacionAcerca() {
  const acercaBtn = document.getElementById("acerca-btn")
  const mobileAcercaBtn = document.getElementById("mobile-acerca-btn")
  const acercaSection = document.getElementById("acerca-de")
  const mobileNav = document.getElementById("mobile-nav")

  if (acercaBtn && acercaSection) {
    acercaBtn.addEventListener("click", () => {
      acercaSection.scrollIntoView({ behavior: "smooth" })
    })
  }

  if (mobileAcercaBtn && acercaSection && mobileNav) {
    mobileAcercaBtn.addEventListener("click", () => {
      acercaSection.scrollIntoView({ behavior: "smooth" })
      mobileNav.classList.remove("active")
    })
  }
}
