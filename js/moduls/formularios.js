// Email validation utility
export function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

export function configurarFormularios() {
  const loginForm = document.getElementById("login-form")
  const registerForm = document.getElementById("register-form")

  if (loginForm) {
    loginForm.addEventListener("submit", handleLoginSubmit)
  }

  if (registerForm) {
    registerForm.addEventListener("submit", handleRegisterSubmit)
  }
}

function handleLoginSubmit(e) {
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
    const loginData = {
      username: email,
      password: password,
    }

    fetch("http://localhost:8080/auth/authenticate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Credenciales incorrectas")
        }
        return response.json()
      })
      .then((data) => {

          console.log("Respuesta del login:", data); 
          localStorage.setItem("token", data.jwt);
          console.log("Token guardado:", localStorage.getItem("token"));

        // Cerrar el modal y mostrar el panel correspondiente
        const loginModal = document.getElementById("login-modal")
        loginModal.classList.remove("active")
        document.getElementById("contenido-principal").style.display = "none"

        if (tipoUsuario === "cliente") {
          import("./panelCliente.js").then((module) => {
            module.mostrarPanelCliente(email.split("@")[0])
            module.mostrarProductos()
          })
        } else if (tipoUsuario === "proveedor") {
          import("./panelProveedor.js").then((module) => {
            module.mostrarPanelProveedor(email.split("@")[0])
            module.mostrarMisHerramientas()
          })
        }
      })
      .catch((error) => {
        console.error("Error:", error)
        alert("Error al iniciar sesión: " + error.message)
      })
  }
}

function handleRegisterSubmit(e) {
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
    // Preparar datos para enviar a la API
    const data = {
      name: name,
      username: email,
      password: password,
      repeatedPassword: confirmPassword,
      // Puedes agregar aquí otros campos que el backend permita (o extender SaveUser)
    }

    // Enviar datos a la API
    fetch("http://localhost:8080/customers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error en la solicitud")
        }
        return response.json()
      })
      .then((data) => {
        // Si el registro fue exitoso, cerrar modal y mostrar panel
        const registerModal = document.getElementById("register-modal")
        registerModal.classList.remove("active")
        document.getElementById("contenido-principal").style.display = "none"

        if (tipoUsuario === "cliente") {
          import("./panelCliente.js").then((module) => {
            module.mostrarPanelCliente(name)
            module.mostrarProductos()
          })
        } else if (tipoUsuario === "proveedor") {
          import("./panelProveedor.js").then((module) => {
            module.mostrarPanelProveedor(name)
            module.mostrarMisHerramientas()
          })
        }
      })
      .catch((error) => {
        console.error("Error:", error)
        alert("Ocurrió un error al registrar el usuario.")
      })
  }
}
