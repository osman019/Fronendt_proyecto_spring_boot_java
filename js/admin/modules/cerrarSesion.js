import { cerrarSesionAdmin } from "./panelAdmin.js"

export function configurarCerrarSesion() {
  console.log("Configurando botón de cerrar sesión...")

  const cerrarSesionAdminBtn = document.getElementById("cerrar-sesion-admin-btn")
  const mobileCerrarSesionAdminBtn = document.getElementById("mobile-cerrar-sesion-admin-btn")

  if (cerrarSesionAdminBtn) {
    console.log("Botón escritorio encontrado")
    cerrarSesionAdminBtn.addEventListener("click", cerrarSesionAdmin)
  }

  if (mobileCerrarSesionAdminBtn) {
    console.log("Botón móvil encontrado")
    mobileCerrarSesionAdminBtn.addEventListener("click", cerrarSesionAdmin)
  }
}
