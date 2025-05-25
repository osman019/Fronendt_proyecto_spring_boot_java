import { mostrarHerramientasProveedor } from '../api/mostrarHerramientasProveedor.js';

export function configurarPanelProveedor() {
  const proveedorPanel = document.getElementById("proveedor-panel")
  const proveedorNombre = document.getElementById("proveedor-nombre")
  const proveedorDropdown = document.querySelector(".proveedor-dropdown")

  // Configurar cerrar sesión
  const cerrarSesionProveedorBtn = document.getElementById("cerrar-sesion-proveedor-btn")
  const mobileCerrarSesionProveedorBtn = document.getElementById("mobile-cerrar-sesion-proveedor-btn")

  if (cerrarSesionProveedorBtn) {
    cerrarSesionProveedorBtn.addEventListener("click", cerrarSesionProveedor)
  }

  if (mobileCerrarSesionProveedorBtn) {
    mobileCerrarSesionProveedorBtn.addEventListener("click", cerrarSesionProveedor)
  }

  // Configurar mis herramientas
  const misHerramientasBtn = document.getElementById("mis-herramientas-btn")
  const mobileMisHerramientasBtn = document.getElementById("mobile-mis-herramientas-btn")

  if (misHerramientasBtn) {
    misHerramientasBtn.addEventListener("click", mostrarMisHerramientas)
  }

  if (mobileMisHerramientasBtn) {
    mobileMisHerramientasBtn.addEventListener("click", mostrarMisHerramientas)
  }

  // Configurar agregar herramienta
  const agregarHerramientaBtn = document.getElementById("agregar-herramienta-btn")
  const mobileAgregarHerramientaBtn = document.getElementById("mobile-agregar-herramienta-btn")
  const btnAgregarNueva = document.getElementById("btn-agregar-nueva")

  if (agregarHerramientaBtn) {
    agregarHerramientaBtn.addEventListener("click", mostrarAgregarHerramienta)
  }

  if (mobileAgregarHerramientaBtn) {
    mobileAgregarHerramientaBtn.addEventListener("click", mostrarAgregarHerramienta)
  }

  if (btnAgregarNueva) {
    btnAgregarNueva.addEventListener("click", mostrarAgregarHerramienta)
  }

  // Configurar pedidos pendientes
  const pedidosPendientesBtn = document.getElementById("pedidos-pendientes-btn")
  const mobilePedidosPendientesBtn = document.getElementById("mobile-pedidos-pendientes-btn")

  if (pedidosPendientesBtn) {
    pedidosPendientesBtn.addEventListener("click", mostrarPedidosPendientes)
  }

  if (mobilePedidosPendientesBtn) {
    mobilePedidosPendientesBtn.addEventListener("click", mostrarPedidosPendientes)
  }

  // Configurar devoluciones
  const devolucionesBtn = document.getElementById("devoluciones-btn")
  const mobileDevolucionesBtn = document.getElementById("mobile-devoluciones-btn")

  if (devolucionesBtn) {
    devolucionesBtn.addEventListener("click", mostrarDevoluciones)
  }

  if (mobileDevolucionesBtn) {
    mobileDevolucionesBtn.addEventListener("click", mostrarDevoluciones)
  }

  // Mostrar/ocultar dropdown del proveedor
  if (proveedorNombre && proveedorDropdown) {
    proveedorNombre.addEventListener("click", () => {
      proveedorDropdown.classList.toggle("active")
      proveedorNombre.classList.toggle("active")
    })

    // Cerrar dropdown al hacer clic fuera
    document.addEventListener("click", (e) => {
      if (!proveedorNombre.contains(e.target) && !proveedorDropdown.contains(e.target)) {
        proveedorDropdown.classList.remove("active")
        proveedorNombre.classList.remove("active")
      }
    })
  }
}

export function mostrarPanelProveedor(nombre) {
  // Ocultar botones de login y registro
  const elementsToHide = [
    "login-btn",
    "register-btn",
    "mobile-login-btn",
    "mobile-register-btn",
    "ofertas-btn",
    "acerca-btn",
    "cerrar-sesion-admin-btn",
    "nombre-admin",
  ]

  elementsToHide.forEach((id) => {
    const element = document.getElementById(id)
    if (element) element.style.display = "none"
  })

  // Mostrar panel de proveedor
  const proveedorPanel = document.getElementById("proveedor-panel")
  const mobileProveedorPanel = document.getElementById("mobile-proveedor-panel")

  if (proveedorPanel) proveedorPanel.style.display = "block"
  if (mobileProveedorPanel) mobileProveedorPanel.style.display = "flex"

  // Actualizar nombre de proveedor
  const nombreProveedor = document.getElementById("nombre-proveedor")
  const mobileNombreProveedor = document.getElementById("mobile-nombre-proveedor")

  if (nombreProveedor) nombreProveedor.textContent = nombre
  if (mobileNombreProveedor) mobileNombreProveedor.textContent = nombre

  // Mostrar alerta de bienvenida
  alert(`¡Bienvenido, ${nombre}! Has iniciado sesión como proveedor.`)
}

export function cerrarSesionProveedor() {
  // Ocultar panel de proveedor
  const proveedorPanel = document.getElementById("proveedor-panel")
  const mobileProveedorPanel = document.getElementById("mobile-proveedor-panel")

  if (proveedorPanel) proveedorPanel.style.display = "none"
  if (mobileProveedorPanel) mobileProveedorPanel.style.display = "none"

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
  const panelsToHide = [
    "panel-mis-herramientas",
    "panel-agregar-herramienta",
    "panel-pedidos-pendientes",
    "panel-devoluciones",
  ]

  panelsToHide.forEach((id) => {
    const panel = document.getElementById(id)
    if (panel) panel.style.display = "none"
  })

  // Mostrar contenido principal
  const contenidoPrincipal = document.getElementById("contenido-principal")
  if (contenidoPrincipal) contenidoPrincipal.style.display = "block"

  // Mostrar alerta
  alert("Has cerrado sesión correctamente.")
}

export function mostrarMisHerramientas() {
  // Ocultar otras secciones del panel
  const panelsToHide = ["panel-agregar-herramienta", "panel-pedidos-pendientes"]

  panelsToHide.forEach((id) => {
    const panel = document.getElementById(id)
    if (panel) panel.style.display = "none"
  })

  // Mostrar sección de mis herramientas
  const panelMisHerramientas = document.getElementById("panel-mis-herramientas")
  if (panelMisHerramientas) {
    panelMisHerramientas.style.display = "block"
    panelMisHerramientas.scrollIntoView({ behavior: "smooth" })
  }
mostrarHerramientasProveedor();
  // Cerrar dropdown en versión desktop
  const proveedorDropdown = document.querySelector(".proveedor-dropdown")
  if (proveedorDropdown) proveedorDropdown.classList.remove("active")

  // Cerrar menú móvil si está abierto
  const mobileNav = document.getElementById("mobile-nav")
  if (mobileNav) mobileNav.classList.remove("active")
}

export function mostrarAgregarHerramienta() {
  // Ocultar otras secciones del panel
  const panelsToHide = ["panel-mis-herramientas", "panel-pedidos-pendientes"]

  panelsToHide.forEach((id) => {
    const panel = document.getElementById(id)
    if (panel) panel.style.display = "none"
  })

  // Mostrar sección de agregar herramienta
  const panelAgregarHerramienta = document.getElementById("panel-agregar-herramienta")
  if (panelAgregarHerramienta) {
    panelAgregarHerramienta.style.display = "block"
    panelAgregarHerramienta.scrollIntoView({ behavior: "smooth" })
  }

  // Cerrar dropdown en versión desktop
  const proveedorDropdown = document.querySelector(".proveedor-dropdown")
  if (proveedorDropdown) proveedorDropdown.classList.remove("active")

  // Cerrar menú móvil si está abierto
  const mobileNav = document.getElementById("mobile-nav")
  if (mobileNav) mobileNav.classList.remove("active")
}

export function mostrarPedidosPendientes() {
  // Ocultar otras secciones del panel
  const panelsToHide = ["panel-mis-herramientas", "panel-agregar-herramienta"]

  panelsToHide.forEach((id) => {
    const panel = document.getElementById(id)
    if (panel) panel.style.display = "none"
  })

  // Mostrar sección de pedidos pendientes
  const panelPedidosPendientes = document.getElementById("panel-pedidos-pendientes")
  if (panelPedidosPendientes) {
    panelPedidosPendientes.style.display = "block"
    panelPedidosPendientes.scrollIntoView({ behavior: "smooth" })
  }

  // Cerrar dropdown en versión desktop
  const proveedorDropdown = document.querySelector(".proveedor-dropdown")
  if (proveedorDropdown) proveedorDropdown.classList.remove("active")

  // Cerrar menú móvil si está abierto
  const mobileNav = document.getElementById("mobile-nav")
  if (mobileNav) mobileNav.classList.remove("active")
}

export function mostrarDevoluciones() {
  // Ocultar otras secciones del panel
  const panelsToHide = ["panel-mis-herramientas", "panel-agregar-herramienta", "panel-pedidos-pendientes"]

  panelsToHide.forEach((id) => {
    const panel = document.getElementById(id)
    if (panel) panel.style.display = "none"
  })

  // Mostrar sección de devoluciones
  const panelDevoluciones = document.getElementById("panel-devoluciones")
  if (panelDevoluciones) {
    panelDevoluciones.style.display = "block"
    panelDevoluciones.scrollIntoView({ behavior: "smooth" })
  }

  // Cerrar dropdown en versión desktop
  const proveedorDropdown = document.querySelector(".proveedor-dropdown")
  if (proveedorDropdown) proveedorDropdown.classList.remove("active")

  // Cerrar menú móvil si está abierto
  const mobileNav = document.getElementById("mobile-nav")
  if (mobileNav) mobileNav.classList.remove("active")
}
