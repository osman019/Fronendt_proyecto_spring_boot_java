/**
 * Configura los botones de registro para abrir el modal correspondiente
 */
export function modalRegistro() {
  try {
    console.log("Configurando modal de registro...")

    const registerBtns = document.querySelectorAll("#register-btn, #mobile-register-btn")
    const registerModal = document.getElementById("register-modal")

    if (!registerModal) {
      console.warn("No se encontró el modal de registro")
      return
    }

    if (registerBtns.length === 0) {
      console.warn("No se encontraron botones de registro")
      return
    }

    registerBtns.forEach((btn) => {
      if (btn) {
        console.log("Agregando evento click a botón de registro:", btn)
        btn.addEventListener("click", () => {
          console.log("Botón de registro clickeado, abriendo modal")
          registerModal.classList.add("active")
        })
      }
    })

    console.log("Modal de registro configurado correctamente")
  } catch (error) {
    console.error("Error al configurar modal de registro:", error)
  }
}
