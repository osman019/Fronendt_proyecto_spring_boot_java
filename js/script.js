
const imagenes = [
  "img/vista-del-martillo-de-acero-para-trabajos-de-construccion-con-clavos 1.png",
  "img/vista-superior-del-martillo-de-acero-con-otros-elementos-y-herramientas-de-construccion (2) 1.png",
]
let indiceActual = 0
const imagenElemento = document.getElementById("imagenCambia")

function cambiarImagen() {
  indiceActual = (indiceActual + 1) % imagenes.length
  imagenElemento.src = imagenes[indiceActual]
}

setInterval(cambiarImagen, 4000)

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

    // Mostrar panel de cliente y ocultar botones de login/registro
    mostrarPanelCliente(email.split("@")[0]) // Usar la parte del email antes del @ como nombre
  }
})

registerForm.addEventListener("submit", (e) => {
  e.preventDefault()

  const name = document.getElementById("register-name").value
  const email = document.getElementById("register-email").value
  const password = document.getElementById("register-password").value
  const confirmPassword = document.getElementById("register-confirm-password").value
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

  if (isValid) {
    // Simulación de registro exitoso
    registerModal.classList.remove("active")

    // Mostrar panel de cliente y ocultar botones de login/registro
    mostrarPanelCliente(name)
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

// Mostrar/ocultar dropdown del cliente
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

// Función para mostrar el panel de cliente
function mostrarPanelCliente(nombre) {
  // Ocultar botones de login y registro
  document.getElementById("login-btn").style.display = "none"
  document.getElementById("register-btn").style.display = "none"
  document.getElementById("mobile-login-btn").style.display = "none"
  document.getElementById("mobile-register-btn").style.display = "none"

  // Mostrar panel de cliente
  clientePanel.style.display = "block"
  mobileClientePanel.style.display = "flex"

  // Actualizar nombre de usuario
  nombreUsuario.textContent = nombre
  mobileNombreUsuario.textContent = nombre

  // Mostrar alerta de bienvenida
  alert(`¡Bienvenido, ${nombre}! Has iniciado sesión correctamente.`)
}

// Funcionalidad de cerrar sesión
const cerrarSesionBtn = document.getElementById("cerrar-sesion-btn")
const mobileCerrarSesionBtn = document.getElementById("mobile-cerrar-sesion-btn")

cerrarSesionBtn.addEventListener("click", cerrarSesion)
mobileCerrarSesionBtn.addEventListener("click", cerrarSesion)

function cerrarSesion() {
  // Ocultar panel de cliente
  clientePanel.style.display = "none"
  mobileClientePanel.style.display = "none"

  // Mostrar botones de login y registro
  document.getElementById("login-btn").style.display = "block"
  document.getElementById("register-btn").style.display = "block"
  document.getElementById("mobile-login-btn").style.display = "block"
  document.getElementById("mobile-register-btn").style.display = "block"

  // Ocultar secciones del panel
  document.getElementById("panel-productos").style.display = "none"
  document.getElementById("panel-reservas").style.display = "none"

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

// Inicializar la página ocultando las secciones del panel de cliente
document.addEventListener("DOMContentLoaded", () => {
  // Ocultar paneles de cliente al inicio
  clientePanel.style.display = "none"
  mobileClientePanel.style.display = "none"
  panelProductos.style.display = "none"
  panelReservas.style.display = "none"
})
