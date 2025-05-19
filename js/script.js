
let indiceActual = 0
const imagenElemento = document.getElementById("imagenCambia")

function cambiarImagen() {
  indiceActual = (indiceActual + 1) % imagenes.length
  imagenElemento.src = imagenes[indiceActual]
}

setInterval(cambiarImagen, 2000)
// Menú hamburguesa para móviles
const hamburger = document.getElementById("hamburger-menu")
const mobileNav = document.getElementById("mobile-nav")

hamburger.addEventListener("click", () => {
  mobileNav.classList.toggle("active")

  // Animar las barras del menú hamburguesa
  const spans = hamburger.querySelectorAll("span")
  spans.forEach((span) => {
    span.classList.toggle("active")
  })
})

// Cerrar el menú al hacer clic en un botón
const mobileButtons = mobileNav.querySelectorAll("button")
mobileButtons.forEach((button) => {
  button.addEventListener("click", () => {
    mobileNav.classList.remove("active")
  })
})

// Ajustar el diseño en función del tamaño de la pantalla
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
window.addEventListener("load", adjustLayout)
window.addEventListener("resize", adjustLayout)

// Funcionalidad de modales de inicio de sesión y registro
const loginModal = document.getElementById("login-modal")
const registerModal = document.getElementById("register-modal")
const loginBtn = document.getElementById("login-btn")
const registerBtn = document.getElementById("register-btn")
const mobileLoginBtn = document.getElementById("mobile-login-btn")
const mobileRegisterBtn = document.getElementById("mobile-register-btn")
const closeLoginBtn = document.getElementById("close-login")
const closeRegisterBtn = document.getElementById("close-register")
const switchToRegister = document.getElementById("switch-to-register")
const switchToLogin = document.getElementById("switch-to-login")
const loginForm = document.getElementById("login-form")
const registerForm = document.getElementById("register-form")

// Abrir modal de inicio de sesión
loginBtn.addEventListener("click", () => {
  loginModal.classList.add("active")
})

mobileLoginBtn.addEventListener("click", () => {
  loginModal.classList.add("active")
  mobileNav.classList.remove("active")
})

// Abrir modal de registro
registerBtn.addEventListener("click", () => {
  registerModal.classList.add("active")
})

mobileRegisterBtn.addEventListener("click", () => {
  registerModal.classList.add("active")
  mobileNav.classList.remove("active")
})

// Cerrar modales
closeLoginBtn.addEventListener("click", () => {
  loginModal.classList.remove("active")
})

closeRegisterBtn.addEventListener("click", () => {
  registerModal.classList.remove("active")
})

// Cerrar modales al hacer clic fuera del contenido
window.addEventListener("click", (e) => {
  if (e.target === loginModal) {
    loginModal.classList.remove("active")
  }
  if (e.target === registerModal) {
    registerModal.classList.remove("active")
  }
})

// Cambiar entre modales
switchToRegister.addEventListener("click", () => {
  loginModal.classList.remove("active")
  registerModal.classList.add("active")
})

switchToLogin.addEventListener("click", () => {
  registerModal.classList.remove("active")
  loginModal.classList.add("active")
})

// Validación de formularios
loginForm.addEventListener("submit", (e) => {
  e.preventDefault()

  const email = document.getElementById("login-email").value
  const password = document.getElementById("login-password").value
  const tipoUsuario = document.getElementById("login-tipo").value
  let isValid = true

  // Validar email
  if (!validateEmail(email)) {
    document.getElementById("login-email-error").style.display = "block"
    isValid = false
  } else {
    document.getElementById("login-email-error").style.display = "none"
  }

  // Validar contraseña
  if (password.length < 6) {
    document.getElementById("login-password-error").style.display = "block"
    isValid = false
  } else {
    document.getElementById("login-password-error").style.display = "none"
  }

  if (isValid) {
    // Simulación de inicio de sesión exitoso
    loginModal.classList.remove("active")

    // Ocultar contenido principal
    document.getElementById("contenido-principal").style.display = "none"

    // Mostrar panel según tipo de usuario
    if (tipoUsuario === "cliente") {
      mostrarPanelCliente(email.split("@")[0]) // Usar la parte del email antes del @ como nombre
      // Mostrar directamente la sección de productos
      mostrarProductos()
    } else if (tipoUsuario === "proveedor") {
      mostrarPanelProveedor(email.split("@")[0])
      // Mostrar directamente la sección de mis herramientas
      mostrarMisHerramientas()
    }
    
  }
})

registerForm.addEventListener("submit", (e) => {
  e.preventDefault()

  const name = document.getElementById("register-name").value
  const email = document.getElementById("register-email").value
  const password = document.getElementById("register-password").value
  const confirmPassword = document.getElementById("register-confirm-password").value
  const tipoUsuario = document.getElementById("register-tipo").value
  let isValid = true

  // Validar nombre
  if (name.trim() === "") {
    document.getElementById("register-name-error").style.display = "block"
    isValid = false
  } else {
    document.getElementById("register-name-error").style.display = "none"
  }

  // Validar email
  if (!validateEmail(email)) {
    document.getElementById("register-email-error").style.display = "block"
    isValid = false
  } else {
    document.getElementById("register-email-error").style.display = "none"
  }

  // Validar contraseña
  if (password.length < 6) {
    document.getElementById("register-password-error").style.display = "block"
    isValid = false
  } else {
    document.getElementById("register-password-error").style.display = "none"
  }

  // Validar confirmación de contraseña
  if (password !== confirmPassword) {
    document.getElementById("register-confirm-password-error").style.display = "block"
    isValid = false
  } else {
    document.getElementById("register-confirm-password-error").style.display = "none"
  }

  // Validar teléfono para proveedores
  if (tipoUsuario === "proveedor") {
    const telefono = document.getElementById("register-telefono").value
    if (telefono.trim() === "") {
      document.getElementById("register-telefono-error").style.display = "block"
      isValid = false
    } else {
      document.getElementById("register-telefono-error").style.display = "none"
    }
  }

  if (isValid) {
    // Simulación de registro exitoso
    registerModal.classList.remove("active")

    // Ocultar contenido principal
    document.getElementById("contenido-principal").style.display = "none"

    // Mostrar panel según tipo de usuario
    if (tipoUsuario === "cliente") {
      mostrarPanelCliente(name)
      // Mostrar directamente la sección de productos
      mostrarProductos()
    } else if (tipoUsuario === "proveedor") {
      mostrarPanelProveedor(name)
      // Mostrar directamente la sección de mis herramientas
      mostrarMisHerramientas()
    }
  }
})

// Función para validar email
function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

// Desplazamiento suave a la sección de ofertas
const ofertasBtn = document.getElementById("ofertas-btn")
const mobileOfertasBtn = document.getElementById("mobile-ofertas-btn")
const ofertasSection = document.getElementById("ofertas-especiales")

ofertasBtn.addEventListener("click", () => {
  ofertasSection.scrollIntoView({ behavior: "smooth" })
})

mobileOfertasBtn.addEventListener("click", () => {
  ofertasSection.scrollIntoView({ behavior: "smooth" })
  mobileNav.classList.remove("active")
})

// Desplazamiento suave a la sección Acerca de
const acercaBtn = document.getElementById("acerca-btn")
const mobileAcercaBtn = document.getElementById("mobile-acerca-btn")
const acercaSection = document.getElementById("acerca-de")

acercaBtn.addEventListener("click", () => {
  acercaSection.scrollIntoView({ behavior: "smooth" })
})

mobileAcercaBtn.addEventListener("click", () => {
  acercaSection.scrollIntoView({ behavior: "smooth" })
  mobileNav.classList.remove("active")
})

// Panel de Cliente
const clientePanel = document.getElementById("cliente-panel")
const clienteNombre = document.getElementById("cliente-nombre")
const clienteDropdown = document.querySelector(".cliente-dropdown")
const mobileClientePanel = document.getElementById("mobile-cliente-panel")
const nombreUsuario = document.getElementById("nombre-usuario")
const mobileNombreUsuario = document.getElementById("mobile-nombre-usuario")

// Panel de Proveedor
const proveedorPanel = document.getElementById("proveedor-panel")
const proveedorNombre = document.getElementById("proveedor-nombre")
const proveedorDropdown = document.querySelector(".proveedor-dropdown")
const mobileProveedorPanel = document.getElementById("mobile-proveedor-panel")
const nombreProveedor = document.getElementById("nombre-proveedor")
const mobileNombreProveedor = document.getElementById("mobile-nombre-proveedor")

// Mostrar/ocultar dropdown del cliente
clienteNombre.addEventListener("click", () => {
  clienteDropdown.classList.toggle("active")
  clienteNombre.classList.toggle("active")
})

// Mostrar/ocultar dropdown del proveedor
proveedorNombre.addEventListener("click", () => {
  proveedorDropdown.classList.toggle("active")
  proveedorNombre.classList.toggle("active")
})

// Cerrar dropdowns al hacer clic fuera
document.addEventListener("click", (e) => {
  if (!clienteNombre.contains(e.target) && !clienteDropdown.contains(e.target)) {
    clienteDropdown.classList.remove("active")
    clienteNombre.classList.remove("active")
  }

  if (!proveedorNombre.contains(e.target) && !proveedorDropdown.contains(e.target)) {
    proveedorDropdown.classList.remove("active")
    proveedorNombre.classList.remove("active")
  }
})

// Función para mostrar el panel de cliente
function mostrarPanelCliente(nombre) {
  // Ocultar botones de login y registro
  document.getElementById("login-btn").style.display = "none"
  document.getElementById("register-btn").style.display = "none"
  document.getElementById("mobile-login-btn").style.display = "none"
  document.getElementById("mobile-register-btn").style.display = "none"
  document.getElementById("ofertas-btn").style.display = "none"
  document.getElementById("acerca-btn").style.display = "none"
    document.getElementById("cliente-nombre").style.display = "none"
 
  // Mostrar panel de cliente
  clientePanel.style.display = "block"
  mobileClientePanel.style.display = "flex"

  // Actualizar nombre de usuario
  nombreUsuario.textContent = nombre
  mobileNombreUsuario.textContent = nombre

  // Mostrar alerta de bienvenida
  alert(`¡Bienvenido, ${nombre}! Has iniciado sesión correctamente.`)
}

// Función para mostrar el panel de proveedor
function mostrarPanelProveedor(nombre) {
  // Ocultar botones de login y registro
  document.getElementById("login-btn").style.display = "none"
  document.getElementById("register-btn").style.display = "none"
  document.getElementById("mobile-login-btn").style.display = "none"
  document.getElementById("mobile-register-btn").style.display = "none"
  document.getElementById("ofertas-btn").style.display = "none"
   document.getElementById("acerca-btn").style.display = "none"

    document.getElementById("cerrar-sesion-admin-btn").style.display = "none"
   document.getElementById("nombre-admin").style.display = "none"

  

  // Mostrar panel de proveedor
  proveedorPanel.style.display = "block"
  mobileProveedorPanel.style.display = "flex"

  // Actualizar nombre de proveedor
  nombreProveedor.textContent = nombre
  mobileNombreProveedor.textContent = nombre

  // Mostrar alerta de bienvenida
  alert(`¡Bienvenido, ${nombre}! Has iniciado sesión como proveedor.`)
}

// Funcionalidad de cerrar sesión para cliente
const cerrarSesionBtn = document.getElementById("cerrar-sesion-btn")
const mobileCerrarSesionBtn = document.getElementById("mobile-cerrar-sesion-btn")

cerrarSesionBtn.addEventListener("click", cerrarSesionCliente)
mobileCerrarSesionBtn.addEventListener("click", cerrarSesionCliente)

function cerrarSesionCliente() {
  // Ocultar panel de cliente
  clientePanel.style.display = "none"
  mobileClientePanel.style.display = "none"

  // Mostrar botones de login y registro
  document.getElementById("login-btn").style.display = "block"
  document.getElementById("register-btn").style.display = "block"
  document.getElementById("mobile-login-btn").style.display = "block"
  document.getElementById("mobile-register-btn").style.display = "block"
    document.getElementById("ofertas-btn").style.display = "block"
  document.getElementById("acerca-btn").style.display = "block"


  // Ocultar secciones del panel
  document.getElementById("panel-productos").style.display = "none"
  document.getElementById("panel-reservas").style.display = "none"

  // Mostrar contenido principal
  document.getElementById("contenido-principal").style.display = "block"

  // Mostrar alerta
  alert("Has cerrado sesión correctamente.")
}

// Funcionalidad de cerrar sesión para proveedor
const cerrarSesionProveedorBtn = document.getElementById("cerrar-sesion-proveedor-btn")
const mobileCerrarSesionProveedorBtn = document.getElementById("mobile-cerrar-sesion-proveedor-btn")

cerrarSesionProveedorBtn.addEventListener("click", cerrarSesionProveedor)
mobileCerrarSesionProveedorBtn.addEventListener("click", cerrarSesionProveedor)

function cerrarSesionProveedor() {
  // Ocultar panel de proveedor
  proveedorPanel.style.display = "none"
  mobileProveedorPanel.style.display = "none"

  // Mostrar botones de login y registro
  document.getElementById("login-btn").style.display = "block"
  document.getElementById("register-btn").style.display = "block"
  document.getElementById("mobile-login-btn").style.display = "block"
  document.getElementById("mobile-register-btn").style.display = "block"
     document.getElementById("acerca-btn").style.display = "block"
  document.getElementById("ofertas-btn").style.display = "block"

  // Ocultar secciones del panel
  document.getElementById("panel-mis-herramientas").style.display = "none"
  document.getElementById("panel-agregar-herramienta").style.display = "none"
  document.getElementById("panel-pedidos-pendientes").style.display = "none"
  document.getElementById("panel-devoluciones").style.display = "none"

  // Mostrar contenido principal
  document.getElementById("contenido-principal").style.display = "block"

  // Mostrar alerta
  alert("Has cerrado sesión correctamente.")
}

// Funcionalidad de Ver Productos
const verProductosBtn = document.getElementById("ver-productos-btn")
const mobileVerProductosBtn = document.getElementById("mobile-ver-productos-btn")
const panelProductos = document.getElementById("panel-productos")

verProductosBtn.addEventListener("click", mostrarProductos)
mobileVerProductosBtn.addEventListener("click", mostrarProductos)

function mostrarProductos() {
  // Ocultar otras secciones del panel
  document.getElementById("panel-reservas").style.display = "none"

  // Mostrar sección de productos
  panelProductos.style.display = "block"
  panelProductos.scrollIntoView({ behavior: "smooth" })

  // Cerrar dropdown en versión desktop
  clienteDropdown.classList.remove("active")

  // Cerrar menú móvil si está abierto
  mobileNav.classList.remove("active")
}

// Funcionalidad de Mis Reservas
const misReservasBtn = document.getElementById("mis-reservas-btn")
const mobileMisReservasBtn = document.getElementById("mobile-mis-reservas-btn")
const panelReservas = document.getElementById("panel-reservas")

misReservasBtn.addEventListener("click", mostrarReservas)
mobileMisReservasBtn.addEventListener("click", mostrarReservas)

function mostrarReservas() {
  // Ocultar otras secciones del panel
  document.getElementById("panel-productos").style.display = "none"

  // Mostrar sección de reservas
  panelReservas.style.display = "block"
  panelReservas.scrollIntoView({ behavior: "smooth" })

  // Cerrar dropdown en versión desktop
  clienteDropdown.classList.remove("active")

  // Cerrar menú móvil si está abierto
  mobileNav.classList.remove("active")
}

// Funcionalidad de Mis Herramientas (Proveedor)
const misHerramientasBtn = document.getElementById("mis-herramientas-btn")
const mobileMisHerramientasBtn = document.getElementById("mobile-mis-herramientas-btn")
const panelMisHerramientas = document.getElementById("panel-mis-herramientas")

misHerramientasBtn.addEventListener("click", mostrarMisHerramientas)
mobileMisHerramientasBtn.addEventListener("click", mostrarMisHerramientas)

function mostrarMisHerramientas() {
  // Ocultar otras secciones del panel
  document.getElementById("panel-agregar-herramienta").style.display = "none"
  document.getElementById("panel-pedidos-pendientes").style.display = "none"

  // Mostrar sección de mis herramientas
  panelMisHerramientas.style.display = "block"
  panelMisHerramientas.scrollIntoView({ behavior: "smooth" })

  // Cerrar dropdown en versión desktop
  proveedorDropdown.classList.remove("active")

  // Cerrar menú móvil si está abierto
  mobileNav.classList.remove("active")
}

// Funcionalidad de Agregar Herramienta (Proveedor)
const agregarHerramientaBtn = document.getElementById("agregar-herramienta-btn")
const mobileAgregarHerramientaBtn = document.getElementById("mobile-agregar-herramienta-btn")
const panelAgregarHerramienta = document.getElementById("panel-agregar-herramienta")
const btnAgregarNueva = document.getElementById("btn-agregar-nueva")

agregarHerramientaBtn.addEventListener("click", mostrarAgregarHerramienta)
mobileAgregarHerramientaBtn.addEventListener("click", mostrarAgregarHerramienta)
btnAgregarNueva.addEventListener("click", mostrarAgregarHerramienta)

function mostrarAgregarHerramienta() {
  // Ocultar otras secciones del panel
  document.getElementById("panel-mis-herramientas").style.display = "none"
  document.getElementById("panel-pedidos-pendientes").style.display = "none"

  // Mostrar sección de agregar herramienta
  panelAgregarHerramienta.style.display = "block"
  panelAgregarHerramienta.scrollIntoView({ behavior: "smooth" })

  // Cerrar dropdown en versión desktop
  proveedorDropdown.classList.remove("active")

  // Cerrar menú móvil si está abierto
  mobileNav.classList.remove("active")
}

// Funcionalidad de Pedidos Pendientes (Proveedor)
const pedidosPendientesBtn = document.getElementById("pedidos-pendientes-btn")
const mobilePedidosPendientesBtn = document.getElementById("mobile-pedidos-pendientes-btn")
const panelPedidosPendientes = document.getElementById("panel-pedidos-pendientes")

pedidosPendientesBtn.addEventListener("click", mostrarPedidosPendientes)
mobilePedidosPendientesBtn.addEventListener("click", mostrarPedidosPendientes)

function mostrarPedidosPendientes() {
  // Ocultar otras secciones del panel
  document.getElementById("panel-mis-herramientas").style.display = "none"
  document.getElementById("panel-agregar-herramienta").style.display = "none"

  // Mostrar sección de pedidos pendientes
  panelPedidosPendientes.style.display = "block"
  panelPedidosPendientes.scrollIntoView({ behavior: "smooth" })

  // Cerrar dropdown en versión desktop
  proveedorDropdown.classList.remove("active")

  // Cerrar menú móvil si está abierto
  mobileNav.classList.remove("active")
}

// Funcionalidad de Devoluciones (Proveedor)
const devolucionesBtn = document.getElementById("devoluciones-btn")
const mobileDevolucionesBtn = document.getElementById("mobile-devoluciones-btn")
const panelDevoluciones = document.getElementById("panel-devoluciones")

if (devolucionesBtn && mobileDevolucionesBtn) {
  devolucionesBtn.addEventListener("click", mostrarDevoluciones)
  mobileDevolucionesBtn.addEventListener("click", mostrarDevoluciones)
}

function mostrarDevoluciones() {
  // Ocultar otras secciones del panel
  document.getElementById("panel-mis-herramientas").style.display = "none"
  document.getElementById("panel-agregar-herramienta").style.display = "none"
  document.getElementById("panel-pedidos-pendientes").style.display = "none"

  // Mostrar sección de devoluciones
  panelDevoluciones.style.display = "block"
  panelDevoluciones.scrollIntoView({ behavior: "smooth" })

  // Cerrar dropdown en versión desktop
  proveedorDropdown.classList.remove("active")

  // Cerrar menú móvil si está abierto
  mobileNav.classList.remove("active")
}

// Filtrado de devoluciones
const filtroDevoluciones = document.getElementById("filtro-devoluciones")
const buscarDevolucion = document.getElementById("buscar-devolucion")
const devolucionCards = document.querySelectorAll(".devolucion-card")

if (filtroDevoluciones && buscarDevolucion) {
  filtroDevoluciones.addEventListener("change", filtrarDevoluciones)
  buscarDevolucion.addEventListener("input", filtrarDevoluciones)
}

function filtrarDevoluciones() {
  const estadoSeleccionado = filtroDevoluciones.value
  const textoBusqueda = buscarDevolucion.value.toLowerCase()

  devolucionCards.forEach((card) => {
    const estado = card.getAttribute("data-estado")
    const id = card.querySelector(".devolucion-id").textContent.toLowerCase()
    const cliente = card.querySelector(".devolucion-info").textContent.toLowerCase()

    const coincideEstado = estadoSeleccionado === "todos" || estado === estadoSeleccionado
    const coincideBusqueda = id.includes(textoBusqueda) || cliente.includes(textoBusqueda)

    if (coincideEstado && coincideBusqueda) {
      card.style.display = "block"
    } else {
      card.style.display = "none"
    }
  })
}

// Modal de reporte de daños
const reporteDañosModal = document.getElementById("reporte-daños-modal")
const closeReporteDaños = document.getElementById("close-reporte-danos")
const reporteDañosForm = document.getElementById("reporte-danos-form")
const btnReportarDanos = document.querySelectorAll(".btn-reportar-danos")
const btnAceptarDevolucion = document.querySelectorAll(".btn-aceptar-devolucion")

// Configurar botones de reportar daños
if (btnReportarDanos.length > 0) {
  btnReportarDanos.forEach((btn) => {
    btn.addEventListener("click", () => {
      const devolucionCard = btn.closest(".devolucion-card")
      const devolucionId = devolucionCard.querySelector(".devolucion-id").textContent
      const fechaActual = new Date().toLocaleDateString()

      // Llenar el formulario con datos
      document.getElementById("reporte-id-devolucion").value = devolucionId
      document.getElementById("reporte-fecha").value = fechaActual

      // Mostrar modal
      reporteDañosModal.classList.add("active")
    })
  })
}

// Cerrar modal de reporte de daños
if (closeReporteDaños) {
  closeReporteDaños.addEventListener("click", () => {
    reporteDañosModal.classList.remove("active")
  })

  // Cerrar modal al hacer clic fuera
  window.addEventListener("click", (e) => {
    if (e.target === reporteDañosModal) {
      reporteDañosModal.classList.remove("active")
    }
  })
}

// Envío del formulario de reporte de daños
if (reporteDañosForm) {
  reporteDañosForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const descripcion = document.getElementById("reporte-descripcion").value
    let isValid = true

    // Validar descripción
    if (descripcion.trim() === "") {
      document.getElementById("reporte-descripcion-error").style.display = "block"
      isValid = false
    } else {
      document.getElementById("reporte-descripcion-error").style.display = "none"
    }

    if (isValid) {
      const devolucionId = document.getElementById("reporte-id-devolucion").value

      // Aquí iría la lógica para guardar el reporte
      alert(`Reporte de daños enviado para la ${devolucionId}`)

      // Cerrar modal
      reporteDañosModal.classList.remove("active")

      // Actualizar UI (simulado)
      document.querySelectorAll(".devolucion-card").forEach((card) => {
        if (card.querySelector(".devolucion-id").textContent === devolucionId) {
          card.setAttribute("data-estado", "dañada")
          card.querySelector(".devolucion-estado").textContent = "Con reporte de daños"
          card.querySelector(".devolucion-estado").className = "devolucion-estado daños"

          // Reemplazar acciones
          const accionesDiv = card.querySelector(".devolucion-acciones")
          accionesDiv.innerHTML = `
            <button class="btn-ver-factura">Ver factura</button>
            <button class="btn-contactar-cliente">Contactar cliente</button>
          `

          // Añadir sección de reporte
          const reporteDiv = document.createElement("div")
          reporteDiv.className = "reporte-daños"
          reporteDiv.innerHTML = `
            <h4>Reporte de daños:</h4>
            <p class="reporte-fecha">Fecha del reporte: ${document.getElementById("reporte-fecha").value}</p>
            <p class="reporte-descripcion">${descripcion}</p>
          `

          // Insertar antes de acciones
          card.insertBefore(reporteDiv, accionesDiv)
        }
      })
    }
  })
}

// Botones de aceptar devolución
if (btnAceptarDevolucion.length > 0) {
  btnAceptarDevolucion.forEach((btn) => {
    btn.addEventListener("click", () => {
      const devolucionCard = btn.closest(".devolucion-card")
      const devolucionId = devolucionCard.querySelector(".devolucion-id").textContent

      if (confirm(`¿Confirmas que la ${devolucionId} está en buen estado?`)) {
        // Actualizar UI
        devolucionCard.setAttribute("data-estado", "aceptada")
        devolucionCard.querySelector(".devolucion-estado").textContent = "Aceptada"
        devolucionCard.querySelector(".devolucion-estado").className = "devolucion-estado aceptada"

        // Reemplazar acciones
        const accionesDiv = devolucionCard.querySelector(".devolucion-acciones")
        accionesDiv.innerHTML = `
          <button class="btn-ver-factura">Ver factura</button>
        `

        alert(`La ${devolucionId} ha sido aceptada como completada.`)
      }
    })
  })
}

// Filtrado de productos
const filtroCategoria = document.getElementById("filtro-categoria")
const buscarProducto = document.getElementById("buscar-producto")
const productoCards = document.querySelectorAll(".producto-card")

filtroCategoria.addEventListener("change", filtrarProductos)
buscarProducto.addEventListener("input", filtrarProductos)

function filtrarProductos() {
  const categoriaSeleccionada = filtroCategoria.value
  const textoBusqueda = buscarProducto.value.toLowerCase()

  productoCards.forEach((card) => {
    const categoria = card.getAttribute("data-categoria")
    const nombre = card.querySelector(".producto-nombre").textContent.toLowerCase()
    const descripcion = card.querySelector(".producto-descripcion").textContent.toLowerCase()

    const coincideCategoria = categoriaSeleccionada === "todos" || categoria === categoriaSeleccionada
    const coincideBusqueda = nombre.includes(textoBusqueda) || descripcion.includes(textoBusqueda)

    if (coincideCategoria && coincideBusqueda) {
      card.style.display = "flex"
    } else {
      card.style.display = "none"
    }
  })
}

// Filtrado de herramientas (Proveedor)
const filtroEstado = document.getElementById("filtro-estado")
const buscarHerramienta = document.getElementById("buscar-herramienta")
const herramientaCards = document.querySelectorAll(".herramienta-card")

if (filtroEstado && buscarHerramienta) {
  filtroEstado.addEventListener("change", filtrarHerramientas)
  buscarHerramienta.addEventListener("input", filtrarHerramientas)
}

function filtrarHerramientas() {
  const estadoSeleccionado = filtroEstado.value
  const textoBusqueda = buscarHerramienta.value.toLowerCase()

  herramientaCards.forEach((card) => {
    const estado = card.getAttribute("data-estado")
    const nombre = card.querySelector(".herramienta-nombre").textContent.toLowerCase()
    const categoria = card.querySelector(".herramienta-categoria").textContent.toLowerCase()

    const coincideEstado = estadoSeleccionado === "todos" || estado === estadoSeleccionado
    const coincideBusqueda = nombre.includes(textoBusqueda) || categoria.includes(textoBusqueda)

    if (coincideEstado && coincideBusqueda) {
      card.style.display = "flex"
    } else {
      card.style.display = "none"
    }
  })
}

// Filtrado de pedidos (Proveedor)
const filtroPedidos = document.getElementById("filtro-pedidos")
const buscarPedido = document.getElementById("buscar-pedido")
const pedidoCards = document.querySelectorAll(".pedido-card")

if (filtroPedidos && buscarPedido) {
  filtroPedidos.addEventListener("change", filtrarPedidos)
  buscarPedido.addEventListener("input", filtrarPedidos)
}

function filtrarPedidos() {
  const estadoSeleccionado = filtroPedidos.value
  const textoBusqueda = buscarPedido.value.toLowerCase()

  pedidoCards.forEach((card) => {
    const estado = card.getAttribute("data-estado")
    const id = card.querySelector(".pedido-id").textContent.toLowerCase()
    const cliente = card.querySelector(".pedido-cliente").textContent.toLowerCase()

    const coincideEstado = estadoSeleccionado === "todos" || estado === estadoSeleccionado
    const coincideBusqueda = id.includes(textoBusqueda) || cliente.includes(textoBusqueda)

    if (coincideEstado && coincideBusqueda) {
      card.style.display = "block"
    } else {
      card.style.display = "none"
    }
  })
}

// Funcionalidad de los botones de reserva
const reservarBtns = document.querySelectorAll(".reservar-btn")

reservarBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Verificar si el usuario está logueado
    if (clientePanel.style.display === "block") {
      const nombreProducto =
        btn.parentElement.querySelector(".producto-nombre")?.textContent ||
        btn.parentElement.querySelector(".oferta-nombre")?.textContent

      alert(`Has reservado: ${nombreProducto}. Revisa tu sección de "Mis Reservas" para ver los detalles.`)
    } else {
      alert("Debes iniciar sesión para poder reservar herramientas.")
      loginModal.classList.add("active")
    }
  })
})

// Funcionalidad de los botones en las reservas
const btnExtender = document.querySelectorAll(".btn-extender")
const btnCancelar = document.querySelectorAll(".btn-cancelar")
const btnFactura = document.querySelectorAll(".btn-factura")
const btnReservarNuevamente = document.querySelectorAll(".btn-reservar-nuevamente")

btnExtender.forEach((btn) => {
  btn.addEventListener("click", () => {
    alert("Has solicitado extender tu reserva. Un asesor se pondrá en contacto contigo.")
  })
})

btnCancelar.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (confirm("¿Estás seguro de que deseas cancelar esta reserva?")) {
      alert("Reserva cancelada correctamente.")
      // Aquí iría la lógica para actualizar la UI
    }
  })
})

btnFactura.forEach((btn) => {
  btn.addEventListener("click", () => {
    alert("Descargando factura...")
  })
})

btnReservarNuevamente.forEach((btn) => {
  btn.addEventListener("click", () => {
    alert("Redirigiendo al catálogo de productos...")
    mostrarProductos()
  })
})

// Funcionalidad para el formulario de agregar herramienta
const formAgregarHerramienta = document.getElementById("form-agregar-herramienta")
const btnCancelarAgregar = document.getElementById("btn-cancelar-agregar")
const btnAddSpec = document.getElementById("btn-add-spec")
const specsContainer = document.getElementById("specs-container")
const imagenPreview = document.getElementById("imagen-preview")
const herramientaImagen = document.getElementById("herramienta-imagen")

if (btnCancelarAgregar) {
  btnCancelarAgregar.addEventListener("click", () => {
    mostrarMisHerramientas()
  })
}

if (btnAddSpec) {
  btnAddSpec.addEventListener("click", () => {
    const specItem = document.createElement("div")
    specItem.className = "spec-item"
    specItem.innerHTML = `
      <input type="text" placeholder="Característica" class="spec-key">
      <input type="text" placeholder="Valor" class="spec-value">
      <button type="button" class="btn-remove-spec">×</button>
    `
    specsContainer.appendChild(specItem)

    // Agregar evento al botón de eliminar
    const btnRemoveSpec = specItem.querySelector(".btn-remove-spec")
    btnRemoveSpec.addEventListener("click", () => {
      specItem.remove()
    })
  })
}

// Agregar evento a los botones de eliminar especificación existentes
document.querySelectorAll(".btn-remove-spec").forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.closest(".spec-item").remove()
  })
})

// Vista previa de imagen
if (herramientaImagen) {
  herramientaImagen.addEventListener("change", (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        imagenPreview.innerHTML = `<img src="${e.target.result}" alt="Vista previa" style="max-width: 100%; max-height: 200px;">`
      }
      reader.readAsDataURL(file)
    }
  })
}

// Envío del formulario de agregar herramienta
if (formAgregarHerramienta) {
  formAgregarHerramienta.addEventListener("submit", (e) => {
    e.preventDefault()

    // Aquí iría la lógica para procesar el formulario
    alert("Herramienta agregada correctamente")
    mostrarMisHerramientas()
  })
}

// Funcionalidad para los botones de aprobar/rechazar pedidos
const btnAprobar = document.querySelectorAll(".btn-aprobar")
const btnRechazar = document.querySelectorAll(".btn-rechazar")

btnAprobar.forEach((btn) => {
  btn.addEventListener("click", () => {
    const pedidoCard = btn.closest(".pedido-card")
    const pedidoId = pedidoCard.querySelector(".pedido-id").textContent

    if (confirm(`¿Estás seguro de que deseas aprobar el ${pedidoId}?`)) {
      pedidoCard.querySelector(".pedido-estado").textContent = "Aprobado"
      pedidoCard.querySelector(".pedido-estado").className = "pedido-estado aprobado"
      pedidoCard.setAttribute("data-estado", "aprobado")

      // Reemplazar botones
      const pedidoAcciones = pedidoCard.querySelector(".pedido-acciones")
      pedidoAcciones.innerHTML = `
        <button class="btn-detalles">Ver detalles</button>
        <button class="btn-contactar">Contactar cliente</button>
      `

      alert(`${pedidoId} aprobado correctamente.`)
    }
  })
})

btnRechazar.forEach((btn) => {
  btn.addEventListener("click", () => {
    const pedidoCard = btn.closest(".pedido-card")
    const pedidoId = pedidoCard.querySelector(".pedido-id").textContent

    if (confirm(`¿Estás seguro de que deseas rechazar el ${pedidoId}?`)) {
      pedidoCard.querySelector(".pedido-estado").textContent = "Rechazado"
      pedidoCard.querySelector(".pedido-estado").className = "pedido-estado rechazado"
      pedidoCard.setAttribute("data-estado", "rechazado")

      // Reemplazar botones
      const pedidoAcciones = pedidoCard.querySelector(".pedido-acciones")
      pedidoAcciones.innerHTML = `
        <button class="btn-detalles">Ver detalles</button>
      `

      alert(`${pedidoId} rechazado.`)
    }
  })
})

// Inicializar la página ocultando las secciones del panel
document.addEventListener("DOMContentLoaded", () => {
  // Ocultar paneles de cliente y proveedor al inicio
  clientePanel.style.display = "none"
  mobileClientePanel.style.display = "none"
  proveedorPanel.style.display = "none"
  mobileProveedorPanel.style.display = "none"

  // Ocultar secciones de panel
  document.getElementById("panel-productos").style.display = "none"
  document.getElementById("panel-reservas").style.display = "none"
  document.getElementById("panel-mis-herramientas").style.display = "none"
  document.getElementById("panel-agregar-herramienta").style.display = "none"
  document.getElementById("panel-pedidos-pendientes").style.display = "none"
  document.getElementById("panel-devoluciones").style.display = "none"

  // Configurar el cambio de tipo de cuenta en registro
  if (document.getElementById("register-tipo")) {
    document.getElementById("register-tipo").addEventListener("change", function () {
      const telefonoContainer = document.querySelector(".telefono-container")
      if (this.value === "proveedor") {
        telefonoContainer.style.display = "block"
      } else {
        telefonoContainer.style.display = "none"
      }
    })
  }
})
