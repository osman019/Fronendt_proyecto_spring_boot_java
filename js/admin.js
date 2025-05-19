// Funcionalidad para el Panel de Administrador

// Navegación entre secciones del panel de administrador
const adminNavItems = document.querySelectorAll(".admin-nav-item")
const adminSections = document.querySelectorAll(".admin-section")

adminNavItems.forEach((item) => {
  item.addEventListener("click", () => {
    const targetSection = item.getAttribute("data-section")

    // Actualizar navegación activa
    adminNavItems.forEach((navItem) => {
      navItem.classList.remove("active")
    })
    item.classList.add("active")

    // Mostrar sección correspondiente
    adminSections.forEach((section) => {
      section.classList.remove("active")
      if (section.id === `admin-${targetSection}`) {
        section.classList.add("active")
      }
    })
  })
})

// Funcionalidad para mostrar/ocultar el panel de administrador
 function mostrarPanelAdmin(nombre) {
  // Ocultar contenido principal
  document.getElementById("contenido-principal").style.display = "none"

  // Ocultar botones de invitado
  if (document.getElementById("botones-invitado")) {
    document.getElementById("botones-invitado").style.display = "none"
  }
  if (document.getElementById("botones-invitado-movil")) {
    document.getElementById("botones-invitado-movil").style.display = "none"
  }
   if (document.getElementById("cerrar-sesion-admin-btn")) {
    document.getElementById("cerrar-sesion-admin-btn").style.display = "flex"
  }

   if (document.getElementById("nombre-admin")) {
    document.getElementById("nombre-admin").style.display = "flex"
  }
  // Ocultar paneles de cliente y proveedor
  if (document.getElementById("panel-cliente")) {
    document.getElementById("panel-cliente").style.display = "none"
  }
  if (document.getElementById("panel-proveedor")) {
    document.getElementById("panel-proveedor").style.display = "none"
  }
  if (document.getElementById("mobile-cliente-panel")) {
    document.getElementById("mobile-cliente-panel").style.display = "none"
  }
  if (document.getElementById("mobile-proveedor-panel")) {
    document.getElementById("mobile-proveedor-panel").style.display = "none"
  }

   if (document.getElementById("mobile-proveedor-panel")) {
    document.getElementById("mobile-proveedor-panel").style.display = "none"
  }
document.getElementById("login-btn").style.display = "none"
  document.getElementById("register-btn").style.display = "none"
  document.getElementById("mobile-login-btn").style.display = "none"
  document.getElementById("mobile-register-btn").style.display = "none"
  document.getElementById("ofertas-btn").style.display = "none"
  document.getElementById("acerca-btn").style.display = "none"
    document.getElementById("cliente-nombre").style.display = "none"

    
     
   
  // Mostrar panel de administrador
  document.getElementById("panel-admin").style.display = "flex"
  document.getElementById("mobile-admin-panel").style.display = "flex"
  

  // Actualizar nombre de administrador
  if (document.getElementById("nombre-admin")) {
    document.getElementById("nombre-admin").textContent = nombre
  }
  if (document.getElementById("mobile-nombre-admin")) {
    document.getElementById("mobile-nombre-admin").textContent = nombre
  }

  // Mostrar el panel completo de administrador
  document.getElementById("admin-panel").style.display = "block"

  // Mostrar alerta de bienvenida
  alert(`¡Bienvenido, ${nombre}! Has iniciado sesión como administrador.`)
}

// Funcionalidad de cerrar sesión para administrador
function cerrarSesionAdmin() {
  // Ocultar panel de administrador
  document.getElementById("panel-admin").style.display = "none"
  document.getElementById("mobile-admin-panel").style.display = "none"
  document.getElementById("admin-panel").style.display = "none"

  // Mostrar botones de invitado
  if (document.getElementById("botones-invitado")) {
    document.getElementById("botones-invitado").style.display = "flex"
  }
  if (document.getElementById("botones-invitado-movil")) {
    document.getElementById("botones-invitado-movil").style.display = "block"
  }

  // Mostrar contenido principal
  document.getElementById("contenido-principal").style.display = "block"

  // Mostrar alerta
  alert("Has cerrado sesión correctamente.")
    document.getElementById("login-btn").style.display = "block"
  document.getElementById("register-btn").style.display = "block"
  document.getElementById("mobile-login-btn").style.display = "block"
  document.getElementById("mobile-register-btn").style.display = "block"
    document.getElementById("ofertas-btn").style.display = "block"
  document.getElementById("acerca-btn").style.display = "block"
}

// Funcionalidad para los modales
const modales = {
  herramienta: {
    modal: document.getElementById("modal-herramienta"),
    openBtn: document.getElementById("btn-agregar-herramienta-admin"),
    closeBtn: document.getElementById("close-modal-herramienta"),
    cancelBtn: document.getElementById("btn-cancelar-herramienta"),
    saveBtn: document.getElementById("btn-guardar-herramienta"),
    form: document.getElementById("form-herramienta"),
  },
  proveedor: {
    modal: document.getElementById("modal-proveedor"),
    openBtn: document.getElementById("btn-agregar-proveedor"),
    closeBtn: document.getElementById("close-modal-proveedor"),
    cancelBtn: document.getElementById("btn-cancelar-proveedor"),
    saveBtn: document.getElementById("btn-guardar-proveedor"),
    form: document.getElementById("form-proveedor"),
  },
  cliente: {
    modal: document.getElementById("modal-cliente"),
    openBtn: document.getElementById("btn-agregar-cliente"),
    closeBtn: document.getElementById("close-modal-cliente"),
    cancelBtn: document.getElementById("btn-cancelar-cliente"),
    saveBtn: document.getElementById("btn-guardar-cliente"),
    form: document.getElementById("form-cliente"),
  },
}

// Configurar eventos para cada modal
Object.keys(modales).forEach((key) => {
  const modal = modales[key]

  if (modal.openBtn) {
    modal.openBtn.addEventListener("click", () => {
      modal.modal.classList.add("active")
    })
  }

  if (modal.closeBtn) {
    modal.closeBtn.addEventListener("click", () => {
      modal.modal.classList.remove("active")
    })
  }

  if (modal.cancelBtn) {
    modal.cancelBtn.addEventListener("click", () => {
      modal.modal.classList.remove("active")
    })
  }

  if (modal.saveBtn && modal.form) {
    modal.saveBtn.addEventListener("click", () => {
      // Aquí iría la lógica para guardar el formulario
      alert(`Datos de ${key} guardados correctamente.`)
      modal.modal.classList.remove("active")
    })
  }

  // Cerrar modal al hacer clic fuera del contenido
  if (modal.modal) {
    modal.modal.addEventListener("click", (e) => {
      if (e.target === modal.modal) {
        modal.modal.classList.remove("active")
      }
    })
  }
})

// Funcionalidad para la vista previa de imagen en el formulario de herramientas
const herramientaImagenAdmin = document.getElementById("herramienta-imagen-admin")
const imagenPreviewAdmin = document.getElementById("imagen-preview-admin")

if (herramientaImagenAdmin && imagenPreviewAdmin) {
  herramientaImagenAdmin.addEventListener("change", (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        imagenPreviewAdmin.innerHTML = `<img src="${e.target.result}" alt="Vista previa" style="max-width: 100%; max-height: 200px;">`
      }
      reader.readAsDataURL(file)
    }
  })
}

// Funcionalidad para los botones de editar en las tablas
const editButtons = document.querySelectorAll(".admin-table-btn.edit")

editButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const row = btn.closest("tr")
    const id = row.querySelector("td:first-child").textContent
    const nombre = row.querySelector("td:nth-child(2)").textContent

    // Determinar qué tipo de elemento se está editando
    let modalType
    if (row.querySelector("td:nth-child(3)").textContent.includes("@")) {
      // Si la tercera columna contiene un @, probablemente sea un cliente o proveedor
      if (btn.closest(".admin-section").id === "admin-proveedores") {
        modalType = "proveedor"
      } else if (btn.closest(".admin-section").id === "admin-clientes") {
        modalType = "cliente"
      }
    } else {
      // De lo contrario, asumimos que es una herramienta
      modalType = "herramienta"
    }

    // Abrir el modal correspondiente
    if (modales[modalType]) {
      // Cambiar el título del modal
      const modalTitle = modales[modalType].modal.querySelector(".admin-modal-title")
      if (modalTitle) {
        modalTitle.textContent = `Editar ${modalType.charAt(0).toUpperCase() + modalType.slice(1)}`
      }

      // Aquí se podría llenar el formulario con los datos del elemento
      alert(`Editando ${modalType}: ${nombre} (${id})`)

      // Mostrar el modal
      modales[modalType].modal.classList.add("active")
    }
  })
})

// Funcionalidad para los botones de eliminar en las tablas
const deleteButtons = document.querySelectorAll(".admin-table-btn.delete")

deleteButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const row = btn.closest("tr")
    const id = row.querySelector("td:first-child").textContent
    const nombre = row.querySelector("td:nth-child(2)").textContent

    if (confirm(`¿Estás seguro de que deseas eliminar ${nombre} (${id})?`)) {
      // Aquí iría la lógica para eliminar el elemento
      row.remove()
      alert(`${nombre} (${id}) ha sido eliminado correctamente.`)
    }
  })
})

// Funcionalidad para los botones de ver detalles en las tablas
const viewButtons = document.querySelectorAll(".admin-table-btn.view")

viewButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const row = btn.closest("tr")
    const id = row.querySelector("td:first-child").textContent
    const nombre = row.querySelector("td:nth-child(2)").textContent

    alert(`Viendo detalles de ${nombre} (${id})`)
    // Aquí iría la lógica para mostrar los detalles del elemento
  })
})

// Funcionalidad para la paginación
const paginationItems = document.querySelectorAll(".admin-pagination-item")

paginationItems.forEach((item) => {
  item.addEventListener("click", () => {
    const page = item.textContent

    // Actualizar paginación activa
    paginationItems.forEach((pageItem) => {
      pageItem.classList.remove("active")
    })
    item.classList.add("active")

    // Aquí iría la lógica para cargar la página correspondiente
    alert(`Cargando página ${page}`)
  })
})

// Funcionalidad para los filtros y búsqueda
const searchInputs = document.querySelectorAll(".admin-search input")
const filterSelects = document.querySelectorAll(".admin-filter select")

searchInputs.forEach((input) => {
  input.addEventListener("input", () => {
    const searchTerm = input.value.toLowerCase()
    const table = input.closest(".admin-section").querySelector(".admin-table")

    if (table) {
      const rows = table.querySelectorAll("tbody tr")

      rows.forEach((row) => {
        let found = false
        const cells = row.querySelectorAll("td")

        cells.forEach((cell) => {
          if (cell.textContent.toLowerCase().includes(searchTerm)) {
            found = true
          }
        })

        if (found) {
          row.style.display = ""
        } else {
          row.style.display = "none"
        }
      })
    }
  })
})

filterSelects.forEach((select) => {
  select.addEventListener("change", () => {
    const filterValue = select.value
    const table = select.closest(".admin-section").querySelector(".admin-table")

    if (table) {
      const rows = table.querySelectorAll("tbody tr")

      rows.forEach((row) => {
        if (filterValue === "todos") {
          row.style.display = ""
        } else {
          const cells = row.querySelectorAll("td")
          let match = false

          cells.forEach((cell) => {
            if (cell.textContent.toLowerCase() === filterValue.toLowerCase()) {
              match = true
            }
          })

          if (match) {
            row.style.display = ""
          } else {
            row.style.display = "none"
          }
        }
      })
    }
  })
})

// Funcionalidad para guardar configuración
const btnGuardarConfig = document.getElementById("btn-guardar-config")

if (btnGuardarConfig) {
  btnGuardarConfig.addEventListener("click", () => {
    alert("Configuración guardada correctamente.")
  })
}

// Inicializar el panel de administrador (para propósitos de demostración)
document.addEventListener("DOMContentLoaded", () => {
  // Agregar evento de inicio de sesión como administrador al formulario de login
  const loginForm = document.getElementById("login-form")

  if (loginForm) {
    const originalSubmitHandler = loginForm.onsubmit

    loginForm.addEventListener("submit", (e) => {
      const email = document.getElementById("login-email").value
      const tipoUsuario = document.getElementById("login-tipo")

      // Si existe un select de tipo de usuario y se ha seleccionado "administrador"
      if (tipoUsuario && tipoUsuario.value === "administrador") {
        e.preventDefault()

        // Cerrar modal de login
        document.getElementById("login-modal").classList.remove("active")

        // Mostrar panel de administrador
        mostrarPanelAdmin(email.split("@")[0])
      } else if (originalSubmitHandler) {
        // Si no es administrador, usar el handler original
        originalSubmitHandler(e)
      }
    })

    // Agregar opción de administrador al select de tipo de cuenta
    const loginTipo = document.getElementById("login-tipo")
    if (loginTipo) {
      const adminOption = document.createElement("option")
      adminOption.value = "administrador"
      adminOption.textContent = "Administrador"
      loginTipo.appendChild(adminOption)
    }
  }

  // También agregar la opción al formulario de registro
  // const registerTipo = document.getElementById("register-tipo")
  // if (registerTipo) {
  //   const adminOption = document.createElement("option")
   //  adminOption.value = "administrador"
   //  adminOption.textContent = "Administrador"
  //   registerTipo.appendChild(adminOption)
 //  }

  // Conectar los botones de cerrar sesión del administrador
  const cerrarSesionAdminBtn = document.getElementById("cerrar-sesion-admin-btn")
  const mobileCerrarSesionAdminBtn = document.getElementById("mobile-cerrar-sesion-admin-btn")

  if (cerrarSesionAdminBtn) {
    cerrarSesionAdminBtn.addEventListener("click", cerrarSesionAdmin)
  }

  if (mobileCerrarSesionAdminBtn) {
    mobileCerrarSesionAdminBtn.addEventListener("click", cerrarSesionAdmin)
  }
})
