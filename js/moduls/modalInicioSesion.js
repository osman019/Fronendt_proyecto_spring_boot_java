/**
 * Configura los botones de inicio de sesión para abrir el modal correspondiente
 */
export function modalInicioSesion() {
  try {
    console.log("Configurando modal de inicio de sesión...")

    const loginBtns = document.querySelectorAll("#login-btn, #mobile-login-btn")
    const loginModal = document.getElementById("login-modal")

    if (!loginModal) {
      console.warn("No se encontró el modal de inicio de sesión")
      return
    }

    if (loginBtns.length === 0) {
      console.warn("No se encontraron botones de inicio de sesión")
      return
    }

    loginBtns.forEach((btn) => {
      if (btn) {
        console.log("Agregando evento click a botón de inicio de sesión:", btn)
        btn.addEventListener("click", () => {
          console.log("Botón de inicio de sesión clickeado, abriendo modal")
          loginModal.classList.add("active")
        })
      }
    })

    console.log("Modal de inicio de sesión configurado correctamente")
  } catch (error) {
    console.error("Error al configurar modal de inicio de sesión:", error)
  }
}
