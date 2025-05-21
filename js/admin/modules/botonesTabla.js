import { abrirModalEdicion } from "./modalesAdmin.js"

/**
 * Configura los botones de las tablas (editar, eliminar, ver detalles)
 */
export function configurarBotonesTabla() {
  configurarBotonesEditar()
  configurarBotonesEliminar()
  configurarBotonesVer()
}

/**
 * Configura los botones de editar en las tablas
 */
function configurarBotonesEditar() {
  const editButtons = document.querySelectorAll(".admin-table-btn.edit")

  editButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const row = btn.closest("tr")
      if (!row) return

      const id = row.querySelector("td:first-child")?.textContent
      const nombre = row.querySelector("td:nth-child(2)")?.textContent

      if (!id || !nombre) return

      // Determinar qué tipo de elemento se está editando
      let modalType
      const terceraColumna = row.querySelector("td:nth-child(3)")?.textContent

      if (terceraColumna && terceraColumna.includes("@")) {
        // Si la tercera columna contiene un @, probablemente sea un cliente o proveedor
        const seccionId = btn.closest(".admin-section")?.id

        if (seccionId === "admin-proveedores") {
          modalType = "proveedor"
        } else if (seccionId === "admin-clientes") {
          modalType = "cliente"
        }
      } else {
        // De lo contrario, asumimos que es una herramienta
        modalType = "herramienta"
      }

      // Abrir el modal correspondiente
      if (modalType) {
        abrirModalEdicion(modalType, id, nombre)
      }
    })
  })
}

/**
 * Configura los botones de eliminar en las tablas
 */
function configurarBotonesEliminar() {
  const deleteButtons = document.querySelectorAll(".admin-table-btn.delete")

  deleteButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const row = btn.closest("tr")
      if (!row) return

      const id = row.querySelector("td:first-child")?.textContent
      const nombre = row.querySelector("td:nth-child(2)")?.textContent

      if (!id || !nombre) return

      if (confirm(`¿Estás seguro de que deseas eliminar ${nombre} (${id})?`)) {
        // Aquí iría la lógica para eliminar el elemento
        row.remove()
        alert(`${nombre} (${id}) ha sido eliminado correctamente.`)
      }
    })
  })
}

/**
 * Configura los botones de ver detalles en las tablas
 */
function configurarBotonesVer() {
  const viewButtons = document.querySelectorAll(".admin-table-btn.view")

  viewButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const row = btn.closest("tr")
      if (!row) return

      const id = row.querySelector("td:first-child")?.textContent
      const nombre = row.querySelector("td:nth-child(2)")?.textContent

      if (!id || !nombre) return

      alert(`Viendo detalles de ${nombre} (${id})`)
      // Aquí iría la lógica para mostrar los detalles del elemento
    })
  })
}
