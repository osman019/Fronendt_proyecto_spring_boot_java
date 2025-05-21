export function configurarHerramientas() {
  const formAgregarHerramienta = document.getElementById("form-agregar-herramienta")
  const btnCancelarAgregar = document.getElementById("btn-cancelar-agregar")
  const btnAddSpec = document.getElementById("btn-add-spec")
  const specsContainer = document.getElementById("specs-container")
  const imagenPreview = document.getElementById("imagen-preview")
  const herramientaImagen = document.getElementById("herramienta-imagen")

  // Configurar botón de cancelar
  if (btnCancelarAgregar) {
    btnCancelarAgregar.addEventListener("click", () => {
      import("./panelProveedor.js").then((module) => {
        module.mostrarMisHerramientas()
      })
    })
  }

  // Configurar botón de agregar especificación
  if (btnAddSpec && specsContainer) {
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
  if (herramientaImagen && imagenPreview) {
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
      import("./panelProveedor.js").then((module) => {
        module.mostrarMisHerramientas()
      })
    })
  }
}
