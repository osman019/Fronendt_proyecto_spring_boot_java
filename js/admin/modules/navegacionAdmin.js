/**
 * Configura la navegación entre secciones del panel de administrador
 */
export function configurarNavegacionAdmin() {
  const adminNavItems = document.querySelectorAll(".admin-nav-item")
  const adminSections = document.querySelectorAll(".admin-section")

  if (!adminNavItems.length || !adminSections.length) {
    return
  }

  adminNavItems.forEach((item) => {
    item.addEventListener("click", () => {
      const targetSection = item.getAttribute("data-section")
      if (!targetSection) return

      // Actualizar navegación activa
      adminNavItems.forEach((navItem) => {
        navItem.classList.remove("active")
      })
      item.classList.add("active")

      // Mostrar sección correspondiente
      adminSections.forEach((section) => {
        section.classList.remove("active")
        if (section.id === `admin-${targetSection}`) {
          section.classList.add("active")
        }
      })
    })
  })
}
