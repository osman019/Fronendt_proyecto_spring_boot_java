/**
 * Configura la vista previa de imagen en el formulario de herramientas
 */
export function configurarImagenPreview() {
  const herramientaImagenAdmin = document.getElementById("herramienta-imagen-admin")
  const imagenPreviewAdmin = document.getElementById("imagen-preview-admin")

  if (!herramientaImagenAdmin || !imagenPreviewAdmin) {
    return
  }

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
