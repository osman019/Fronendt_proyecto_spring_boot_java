export function ajustarLayout() {
function adjustLayout() {
  const windowWidth = window.innerWidth
  const imageElement = document.getElementById("imagenCambia")
  const textContainer = document.querySelector(".text-container")

  if (windowWidth <= 768) {
    // Móvil: imagen debajo del texto
    document.querySelector(".cuerpo").style.flexDirection = "column"
    textContainer.style.width = "100%"
  } else if (windowWidth <= 1024) {
    // Tablet: imagen a la derecha
    document.querySelector(".cuerpo").style.flexDirection = "row"
    textContainer.style.width = "50%"
  } else {
    // Desktop: imagen a la derecha
    document.querySelector(".cuerpo").style.flexDirection = "row"
    textContainer.style.width = "50%"
  }
}
    // Ejecutar al cargar y al cambiar el tamaño de la ventana
    window.addEventListener("load", adjustLayout())
    window.addEventListener("resize", adjustLayout())
}