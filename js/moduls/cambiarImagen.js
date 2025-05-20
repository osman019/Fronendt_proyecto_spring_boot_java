export function cambiarImagen() {
  // Implementación de cambio de imagen de fondo
  const backgroundImages = ["/img/background1.jpg", "/img/background2.jpg", "/img/background3.jpg"]

  let currentImageIndex = 0
  const heroSection = document.querySelector(".hero-section")

  if (heroSection) {
    // Cambiar imagen cada 5 segundos
    setInterval(() => {
      currentImageIndex = (currentImageIndex + 1) % backgroundImages.length
      heroSection.style.backgroundImage = `url(${backgroundImages[currentImageIndex]})`
    }, 5000)
  }
}
