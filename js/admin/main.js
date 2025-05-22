// Importar todos los módulos de administrador
import { configurarNavegacionAdmin } from "./modules/navegacionAdmin.js"
import { mostrarPanelAdmin, cerrarSesionAdmin } from "./modules/panelAdmin.js"
import { configurarModales } from "./modules/modalesAdmin.js"
import { configurarImagenPreview } from "./modules/imagenPreview.js"
import { configurarBotonesTabla } from "./modules/botonesTabla.js"
import { configurarPaginacion } from "./modules/paginacion.js"
import { configurarFiltros } from "./modules/filtros.js"
import { configurarConfiguracion } from "./modules/configuracion.js"

// Inicializar todos los módulos de administrador cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
  try {
    console.log("Inicializando módulos de administrador...")

    // Configurar navegación entre secciones
    configurarNavegacionAdmin()

    // Configurar modales
    configurarModales()

    // Configurar vista previa de imagen
    configurarImagenPreview()

    // Configurar botones de tabla
    configurarBotonesTabla()

    // Configurar paginación
    configurarPaginacion()

    // Configurar filtros y búsqueda
    configurarFiltros()

    // Configurar guardado de configuración
    configurarConfiguracion()

    // Configurar inicio de sesión como administrador
    configurarInicioSesionAdmin()

    // Configurar botones de cerrar sesión
    configurarCerrarSesion()

    console.log("Todos los módulos de administrador inicializados correctamente")
  } catch (error) {
    console.error("Error al inicializar los módulos de administrador:", error)
  }
})

// Configurar botones de cerrar sesión
function configurarCerrarSesion() {
  const cerrarSesionAdminBtn = document.getElementById("cerrar-sesion-admin-btn")
  const mobileCerrarSesionAdminBtn = document.getElementById("mobile-cerrar-sesion-admin-btn")

  if (cerrarSesionAdminBtn) {
    cerrarSesionAdminBtn.addEventListener("click", cerrarSesionAdmin)
  }

  if (mobileCerrarSesionAdminBtn) {
    mobileCerrarSesionAdminBtn.addEventListener("click", cerrarSesionAdmin)
  }
}

// Exportar funciones que pueden ser necesarias en otros módulos
export { mostrarPanelAdmin, cerrarSesionAdmin }
