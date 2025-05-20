/**
 * Muestra el panel de administrador y oculta otros elementos
 * @param {string} nombre - Nombre del administrador
 */
export function mostrarPanelAdmin(nombre) {
  // Ocultar contenido principal
  const contenidoPrincipal = document.getElementById("contenido-principal")
  if (contenidoPrincipal) {
    contenidoPrincipal.style.display = "none"
  }

  // Ocultar botones de invitado
  ocultarElemento("botones-invitado")
  ocultarElemento("botones-invitado-movil")

  // Mostrar botones de administrador
  mostrarElemento("cerrar-sesion-admin-btn", "flex")
  mostrarElemento("nombre-admin", "flex")

  // Ocultar paneles de cliente y proveedor
  ocultarElemento("panel-cliente")
  ocultarElemento("panel-proveedor")
  ocultarElemento("mobile-cliente-panel")
  ocultarElemento("mobile-proveedor-panel")
  
  

  // Ocultar botones de navegación
  const elementosAOcultar = [
    "login-btn",
    "register-btn",
    "mobile-login-btn",
    "mobile-register-btn",
    "ofertas-btn",
    "acerca-btn",
    "cliente-nombre",
  ]

  elementosAOcultar.forEach((id) => ocultarElemento(id))

  // Mostrar panel de administrador
  mostrarElemento("panel-admin", "flex")
  mostrarElemento("mobile-admin-panel", "flex")
  mostrarElemento("admin-panel", "block")

  // Actualizar nombre de administrador
  actualizarTextoElemento("nombre-admin", nombre)
  actualizarTextoElemento("mobile-nombre-admin", nombre)

  // Mostrar alerta de bienvenida
  alert(`¡Bienvenido, ${nombre}! Has iniciado sesión como administrador.`)
}

/**
 * Cierra la sesión del administrador y restaura la vista normal
 */
export function cerrarSesionAdmin() {
  // Ocultar panel de administrador
  ocultarElemento("panel-admin")
  ocultarElemento("mobile-admin-panel")
  ocultarElemento("admin-panel")

  // Mostrar botones de invitado
  mostrarElemento("botones-invitado", "flex")
  mostrarElemento("botones-invitado-movil", "block")

  // Mostrar contenido principal
  mostrarElemento("contenido-principal", "block")

  // Mostrar botones de navegación
  const elementosAMostrar = [
    "login-btn",
    "register-btn",
    "mobile-login-btn",
    "mobile-register-btn",
    "ofertas-btn",
    "acerca-btn",
  ]

  elementosAMostrar.forEach((id) => mostrarElemento(id, "block"))

  // Mostrar alerta
  alert("Has cerrado sesión correctamente.")
}

// Funciones auxiliares
function ocultarElemento(id) {
  const elemento = document.getElementById(id)
  if (elemento) {
    elemento.style.display = "none"
  }
}

function mostrarElemento(id, displayValue = "block") {
  const elemento = document.getElementById(id)
  if (elemento) {
    elemento.style.display = displayValue
  }
}

function actualizarTextoElemento(id, texto) {
  const elemento = document.getElementById(id)
  if (elemento) {
    elemento.textContent = texto
  }
}
