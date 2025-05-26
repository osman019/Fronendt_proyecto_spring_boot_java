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

    configurarNavegacionAdmin()
    configurarModales()
    configurarImagenPreview()
    configurarBotonesTabla()
    configurarPaginacion()
    configurarFiltros()
    configurarConfiguracion()

    document.addEventListener("click", (e) => {
      if (e.target?.id === "cerrar-sesion-admin-btn" || e.target?.id === "mobile-cerrar-sesion-admin-btn") {
        cerrarSesionAdmin()
      }
    })

    // NO iniciar sesión automáticamente, solo inicializar la interfaz limpia

    console.log("Todos los módulos de administrador inicializados correctamente")
  } catch (error) {
    console.error("Error al inicializar los módulos de administrador:", error)
  }
})




// Exportar funciones que pueden ser necesarias en otros módulos
export { mostrarPanelAdmin, cerrarSesionAdmin }
