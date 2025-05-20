/**
 * Configura el cierre de modales al hacer clic fuera del contenido
 */
export function CerrarmodalesFuera() {
  try {
    console.log("Configurando cierre de modales al hacer clic fuera...")

    const modals = document.querySelectorAll(".modal")

    if (modals.length === 0) {
      console.warn("No se encontraron modales")
      return
    }

    modals.forEach((modal) => {
      if (modal) {
        console.log("Agregando evento click a modal para cerrar al hacer clic fuera:", modal)
        modal.addEventListener("click", (e) => {
          // Si el clic fue directamente en el modal (fondo) y no en su contenido
          if (e.target === modal) {
            console.log("Clic fuera del contenido del modal, cerrando:", modal)
            modal.classList.remove("active")
          }
        })
      }
    })

    console.log("Cierre de modales al hacer clic fuera configurado correctamente")
  } catch (error) {
    console.error("Error al configurar cierre de modales al hacer clic fuera:", error)
  }
}
