export function ajustarLayout() {
  // Función para ajustar el diseño en función del tamaño de la pantalla
  function adjustLayout() {
    const width = window.innerWidth

    // Ejemplo de ajuste basado en el ancho de la pantalla
    if (width < 768) {
      // Ajustes para móviles
      document.querySelectorAll(".desktop-only").forEach((el) => {
        el.style.display = "none"
      })
      document.querySelectorAll(".mobile-only").forEach((el) => {
        el.style.display = "block"
      })
    } else {
      // Ajustes para desktop
      document.querySelectorAll(".desktop-only").forEach((el) => {
        el.style.display = "block"
      })
      document.querySelectorAll(".mobile-only").forEach((el) => {
        el.style.display = "none"
      })
    }
  }

  // Ejecutar al cargar la página
  adjustLayout()

  // Ejecutar cuando cambie el tamaño de la ventana
  window.addEventListener("resize", adjustLayout)
}
