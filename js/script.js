

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
    // Aquí iría la lógica de inicio de sesión
    alert("Inicio de sesión exitoso")
    loginModal.classList.remove("active")
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
    // Aquí iría la lógica de registro
    alert("Registro exitoso")
    registerModal.classList.remove("active")
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
