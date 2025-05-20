export function configurarPanelCliente() {
  const clientePanel = document.getElementById("cliente-panel")
  const clienteNombre = document.getElementById("cliente-nombre")
  const clienteDropdown = document.querySelector(".cliente-dropdown")

  // Configurar cerrar sesión
  const cerrarSesionBtn = document.getElementById("cerrar-sesion-btn")
  const mobileCerrarSesionBtn = document.getElementById("mobile-cerrar-sesion-btn")

  if (cerrarSesionBtn) {
    cerrarSesionBtn.addEventListener("click", cerrarSesionCliente)
  }

  if (mobileCerrarSesionBtn) {
    mobileCerrarSesionBtn.addEventListener("click", cerrarSesionCliente)
  }

  // Configurar ver productos
  const verProductosBtn = document.getElementById("ver-productos-btn")
  const mobileVerProductosBtn = document.getElementById("mobile-ver-productos-btn")

  if (verProductosBtn) {
    verProductosBtn.addEventListener("click", mostrarProductos)
  }

  if (mobileVerProductosBtn) {
    mobileVerProductosBtn.addEventListener("click", mostrarProductos)
  }

  // Configurar mis reservas
  const misReservasBtn = document.getElementById("mis-reservas-btn")
  const mobileMisReservasBtn = document.getElementById("mobile-mis-reservas-btn")

  if (misReservasBtn) {
    misReservasBtn.addEventListener("click", mostrarReservas)
  }

  if (mobileMisReservasBtn) {
    mobileMisReservasBtn.addEventListener("click", mostrarReservas)
  }

  // Mostrar/ocultar dropdown del cliente
  if (clienteNombre && clienteDropdown) {
    clienteNombre.addEventListener("click", () => {
      clienteDropdown.classList.toggle("active")
      clienteNombre.classList.toggle("active")
    })

    // Cerrar dropdown al hacer clic fuera
    document.addEventListener("click", (e) => {
      if (!clienteNombre.contains(e.target) && !clienteDropdown.contains(e.target)) {
        clienteDropdown.classList.remove("active")
        clienteNombre.classList.remove("active")
      }
    })
  }
}

export function mostrarPanelCliente(nombre) {
  // Ocultar botones de login y registro
  const elementsToHide = [
    "login-btn",
    "register-btn",
    "mobile-login-btn",
    "mobile-register-btn",
    "ofertas-btn",
    "acerca-btn",
    "cliente-nombre",
  ]

  elementsToHide.forEach((id) => {
    const element = document.getElementById(id)
    if (element) element.style.display = "none"
  })

  // Mostrar panel de cliente
  const clientePanel = document.getElementById("cliente-panel")
  const mobileClientePanel = document.getElementById("mobile-cliente-panel")

  if (clientePanel) clientePanel.style.display = "block"
  if (mobileClientePanel) mobileClientePanel.style.display = "flex"

  // Actualizar nombre de usuario
  const nombreUsuario = document.getElementById("nombre-usuario")
  const mobileNombreUsuario = document.getElementById("mobile-nombre-usuario")

  if (nombreUsuario) nombreUsuario.textContent = nombre
  if (mobileNombreUsuario) mobileNombreUsuario.textContent = nombre

  // Mostrar alerta de bienvenida
  alert(`¡Bienvenido, ${nombre}! Has iniciado sesión correctamente.`)
}

export function cerrarSesionCliente() {
  // Ocultar panel de cliente
  const clientePanel = document.getElementById("cliente-panel")
  const mobileClientePanel = document.getElementById("mobile-cliente-panel")

  if (clientePanel) clientePanel.style.display = "none"
  if (mobileClientePanel) mobileClientePanel.style.display = "none"

  // Mostrar botones de login y registro
  const elementsToShow = [
    "login-btn",
    "register-btn",
    "mobile-login-btn",
    "mobile-register-btn",
    "ofertas-btn",
    "acerca-btn",
  ]

  elementsToShow.forEach((id) => {
    const element = document.getElementById(id)
    if (element) element.style.display = "block"
  })

  // Ocultar secciones del panel
  const panelProductos = document.getElementById("panel-productos")
  const panelReservas = document.getElementById("panel-reservas")

  if (panelProductos) panelProductos.style.display = "none"
  if (panelReservas) panelReservas.style.display = "none"

  // Mostrar contenido principal
  const contenidoPrincipal = document.getElementById("contenido-principal")
  if (contenidoPrincipal) contenidoPrincipal.style.display = "block"

  // Mostrar alerta
  alert("Has cerrado sesión correctamente.")
}

export function mostrarProductos() {
  // Ocultar otras secciones del panel
  const panelReservas = document.getElementById("panel-reservas")
  if (panelReservas) panelReservas.style.display = "none"

  // Mostrar sección de productos
  const panelProductos = document.getElementById("panel-productos")
  if (panelProductos) {
    panelProductos.style.display = "block"
    panelProductos.scrollIntoView({ behavior: "smooth" })
  }

  // Cerrar dropdown en versión desktop
  const clienteDropdown = document.querySelector(".cliente-dropdown")
  if (clienteDropdown) clienteDropdown.classList.remove("active")

  // Cerrar menú móvil si está abierto
  const mobileNav = document.getElementById("mobile-nav")
  if (mobileNav) mobileNav.classList.remove("active")
}

export function mostrarReservas() {
  // Ocultar otras secciones del panel
  const panelProductos = document.getElementById("panel-productos")
  if (panelProductos) panelProductos.style.display = "none"

  // Mostrar sección de reservas
  const panelReservas = document.getElementById("panel-reservas")
  if (panelReservas) {
    panelReservas.style.display = "block"
    panelReservas.scrollIntoView({ behavior: "smooth" })
  }

  // Cerrar dropdown en versión desktop
  const clienteDropdown = document.querySelector(".cliente-dropdown")
  if (clienteDropdown) clienteDropdown.classList.remove("active")

  // Cerrar menú móvil si está abierto
  const mobileNav = document.getElementById("mobile-nav")
  if (mobileNav) mobileNav.classList.remove("active")
}
