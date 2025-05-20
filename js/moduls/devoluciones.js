export function configurarDevoluciones() {
  // Modal de reporte de daños
  const reporteDañosModal = document.getElementById("reporte-daños-modal")
  const closeReporteDaños = document.getElementById("close-reporte-danos")
  const reporteDañosForm = document.getElementById("reporte-danos-form")
  const btnReportarDanos = document.querySelectorAll(".btn-reportar-danos")
  const btnAceptarDevolucion = document.querySelectorAll(".btn-aceptar-devolucion")

  // Configurar botones de reportar daños
  if (btnReportarDanos.length > 0) {
    btnReportarDanos.forEach((btn) => {
      btn.addEventListener("click", () => {
        const devolucionCard = btn.closest(".devolucion-card")
        if (!devolucionCard) return

        const devolucionId = devolucionCard.querySelector(".devolucion-id")?.textContent
        if (!devolucionId) return

        const fechaActual = new Date().toLocaleDateString()

        // Llenar el formulario con datos
        const reporteIdDevolucion = document.getElementById("reporte-id-devolucion")
        const reporteFecha = document.getElementById("reporte-fecha")

        if (reporteIdDevolucion) reporteIdDevolucion.value = devolucionId
        if (reporteFecha) reporteFecha.value = fechaActual

        // Mostrar modal
        if (reporteDañosModal) reporteDañosModal.classList.add("active")
      })
    })
  }

  // Cerrar modal de reporte de daños
  if (closeReporteDaños && reporteDañosModal) {
    closeReporteDaños.addEventListener("click", () => {
      reporteDañosModal.classList.remove("active")
    })

    // Cerrar modal al hacer clic fuera
    window.addEventListener("click", (e) => {
      if (e.target === reporteDañosModal) {
        reporteDañosModal.classList.remove("active")
      }
    })
  }

  // Envío del formulario de reporte de daños
  if (reporteDañosForm) {
    reporteDañosForm.addEventListener("submit", (e) => {
      e.preventDefault()

      const descripcion = document.getElementById("reporte-descripcion")?.value
      let isValid = true

      // Validar descripción
      const reporteDescripcionError = document.getElementById("reporte-descripcion-error")
      if (!descripcion || descripcion.trim() === "") {
        if (reporteDescripcionError) reporteDescripcionError.style.display = "block"
        isValid = false
      } else {
        if (reporteDescripcionError) reporteDescripcionError.style.display = "none"
      }

      if (isValid) {
        const reporteIdDevolucion = document.getElementById("reporte-id-devolucion")
        const reporteFecha = document.getElementById("reporte-fecha")

        const devolucionId = reporteIdDevolucion?.value

        // Aquí iría la lógica para guardar el reporte
        alert(`Reporte de daños enviado para la ${devolucionId}`)

        // Cerrar modal
        if (reporteDañosModal) reporteDañosModal.classList.remove("active")

        // Actualizar UI (simulado)
        document.querySelectorAll(".devolucion-card").forEach((card) => {
          const cardDevolucionId = card.querySelector(".devolucion-id")?.textContent
          if (cardDevolucionId === devolucionId) {
            card.setAttribute("data-estado", "dañada")

            const devolucionEstado = card.querySelector(".devolucion-estado")
            if (devolucionEstado) {
              devolucionEstado.textContent = "Con reporte de daños"
              devolucionEstado.className = "devolucion-estado daños"
            }

            // Reemplazar acciones
            const accionesDiv = card.querySelector(".devolucion-acciones")
            if (accionesDiv) {
              accionesDiv.innerHTML = `
                <button class="btn-ver-factura">Ver factura</button>
                <button class="btn-contactar-cliente">Contactar cliente</button>
              `
            }

            // Añadir sección de reporte
            const reporteDiv = document.createElement("div")
            reporteDiv.className = "reporte-daños"
            reporteDiv.innerHTML = `
              <h4>Reporte de daños:</h4>
              <p class="reporte-fecha">Fecha del reporte: ${reporteFecha?.value}</p>
              <p class="reporte-descripcion">${descripcion}</p>
            `

            // Insertar antes de acciones
            if (accionesDiv) {
              card.insertBefore(reporteDiv, accionesDiv)
            }
          }
        })
      }
    })
  }

  // Botones de aceptar devolución
  if (btnAceptarDevolucion.length > 0) {
    btnAceptarDevolucion.forEach((btn) => {
      btn.addEventListener("click", () => {
        const devolucionCard = btn.closest(".devolucion-card")
        if (!devolucionCard) return

        const devolucionId = devolucionCard.querySelector(".devolucion-id")?.textContent
        if (!devolucionId) return

        if (confirm(`¿Confirmas que la ${devolucionId} está en buen estado?`)) {
          // Actualizar UI
          devolucionCard.setAttribute("data-estado", "aceptada")

          const devolucionEstado = devolucionCard.querySelector(".devolucion-estado")
          if (devolucionEstado) {
            devolucionEstado.textContent = "Aceptada"
            devolucionEstado.className = "devolucion-estado aceptada"
          }

          // Reemplazar acciones
          const accionesDiv = devolucionCard.querySelector(".devolucion-acciones")
          if (accionesDiv) {
            accionesDiv.innerHTML = `
              <button class="btn-ver-factura">Ver factura</button>
            `
          }

          alert(`La ${devolucionId} ha sido aceptada como completada.`)
        }
      })
    })
  }
}
