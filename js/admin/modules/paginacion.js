/**
 * Configura la funcionalidad de paginación
 */
export function configurarPaginacion() {
  const paginationItems = document.querySelectorAll(".admin-pagination-item")

  if (!paginationItems.length) {
    return
  }

  paginationItems.forEach((item) => {
    item.addEventListener("click", () => {
      const page = item.textContent

      // Actualizar paginación activa
      paginationItems.forEach((pageItem) => {
        pageItem.classList.remove("active")
      })
      item.classList.add("active")

      // Aquí iría la lógica para cargar la página correspondiente
      console.log(`Cargando página ${page}`)
      alert(`Cargando página ${page}`)
    })
  })
}
