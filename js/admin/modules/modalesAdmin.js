/**
 * Configura los modales del panel de administrador
 */
export function configurarModales() {
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

    // Verificar que los elementos existen antes de agregar eventos
    if (!modal.modal) return

    // Configurar botón de abrir modal
    if (modal.openBtn) {
      modal.openBtn.addEventListener("click", () => {
        modal.modal.classList.add("active")
        
      })
    }

    // Configurar botón de cerrar modal
    if (modal.closeBtn) {
      modal.closeBtn.addEventListener("click", () => {
        modal.modal.classList.remove("active")
      })
    }

    // Configurar botón de cancelar
    if (modal.cancelBtn) {
      modal.cancelBtn.addEventListener("click", () => {
        modal.modal.classList.remove("active")
      })
    }

    // Configurar botón de guardar
    if (modal.saveBtn && modal.form) {
      modal.saveBtn.addEventListener("click", () => {
        // Aquí iría la lógica para guardar el formulario
        alert(`Datos de ${key} guardados correctamente.`)
        modal.modal.classList.remove("active")
      })
    }

    // Cerrar modal al hacer clic fuera del contenido
    modal.modal.addEventListener("click", (e) => {
      if (e.target === modal.modal) {
        modal.modal.classList.remove("active")
      }
    })
  })
}

/**
 * Abre un modal específico para edición
 * @param {string} tipo - Tipo de modal (herramienta, proveedor, cliente)
 * @param {string} id - ID del elemento a editar
 * @param {string} nombre - Nombre del elemento a editar
 */
export function abrirModalEdicion(tipo, id, nombre) {
  const modal = document.getElementById(`modal-${tipo}`)
  if (!modal) return

  // Cambiar el título del modal
  const modalTitle = modal.querySelector(".admin-modal-title")
  if (modalTitle) {
    modalTitle.textContent = `Editar ${tipo.charAt(0).toUpperCase() + tipo.slice(1)}`
  }

  // Aquí se podría llenar el formulario con los datos del elemento
  console.log(`Editando ${tipo}: ${nombre} (${id})`)

  // Mostrar el modal
  modal.classList.add("active")
}
