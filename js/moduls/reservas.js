export function configurarReservas() {
  // Funcionalidad de los botones de reserva
  const reservarBtns = document.querySelectorAll(".reservar-btn")

  reservarBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Verificar si el usuario está logueado
      const clientePanel = document.getElementById("cliente-panel")

      if (clientePanel && clientePanel.style.display === "block") {
        const nombreProducto =
          btn.parentElement.querySelector(".producto-nombre")?.textContent ||
          btn.parentElement.querySelector(".oferta-nombre")?.textContent

        alert(`Has reservado: ${nombreProducto}. Revisa tu sección de "Mis Reservas" para ver los detalles.`)
      } else {
        alert("Debes iniciar sesión para poder reservar herramientas.")
        const loginModal = document.getElementById("login-modal")
        if (loginModal) loginModal.classList.add("active")
      }
    })
  })

  // Funcionalidad de los botones en las reservas
  configurarBotonesReservas()
}

function configurarBotonesReservas() {
  // Botones de extender reserva
  const btnExtender = document.querySelectorAll(".btn-extender")
  btnExtender.forEach((btn) => {
    btn.addEventListener("click", () => {
      alert("Has solicitado extender tu reserva. Un asesor se pondrá en contacto contigo.")
    })
  })

  // Botones de cancelar reserva
  const btnCancelar = document.querySelectorAll(".btn-cancelar")
  btnCancelar.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (confirm("¿Estás seguro de que deseas cancelar esta reserva?")) {
        alert("Reserva cancelada correctamente.")
        // Aquí iría la lógica para actualizar la UI
      }
    })
  })

  // Botones de factura
  const btnFactura = document.querySelectorAll(".btn-factura")
  btnFactura.forEach((btn) => {
    btn.addEventListener("click", () => {
      alert("Descargando factura...")
    })
  })

  // Botones de reservar nuevamente
  const btnReservarNuevamente = document.querySelectorAll(".btn-reservar-nuevamente")
  btnReservarNuevamente.forEach((btn) => {
    btn.addEventListener("click", () => {
      alert("Redirigiendo al catálogo de productos...")
      import("./panelCliente.js").then((module) => {
        module.mostrarProductos()
      })
    })
  })
}
