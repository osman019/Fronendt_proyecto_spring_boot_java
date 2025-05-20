/**
 * Configura los botones para cerrar modales
 */
export function CerrarModales() {
  try {
    console.log("Configurando botones para cerrar modales...")

    const closeButtons = document.querySelectorAll(".close-modal")

    if (closeButtons.length === 0) {
      console.warn("No se encontraron botones para cerrar modales")
      return
    }

    closeButtons.forEach((btn) => {
      if (btn) {
        console.log("Agregando evento click a botón para cerrar modal:", btn)
        btn.addEventListener("click", () => {
          // Encontrar el modal padre
          const modal = btn.closest(".modal")
          if (modal) {
            console.log("Cerrando modal:", modal)
            modal.classList.remove("active")
          }
        })
      }
    })

    // Configurar cambio entre modales
    const switchToRegister = document.getElementById("switch-to-register")
    const switchToLogin = document.getElementById("switch-to-login")
    const loginModal = document.getElementById("login-modal")
    const registerModal = document.getElementById("register-modal")

    if (switchToRegister && loginModal && registerModal) {
      switchToRegister.addEventListener("click", () => {
        loginModal.classList.remove("active")
        registerModal.classList.add("active")
      })
    }

    if (switchToLogin && loginModal && registerModal) {
      switchToLogin.addEventListener("click", () => {
        registerModal.classList.remove("active")
        loginModal.classList.add("active")
      })
    }

    console.log("Botones para cerrar modales configurados correctamente")
  } catch (error) {
    console.error("Error al configurar botones para cerrar modales:", error)
  }
}
