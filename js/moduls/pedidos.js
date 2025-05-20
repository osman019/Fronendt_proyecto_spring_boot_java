export function configurarPedidos() {
  // Funcionalidad para los botones de aprobar/rechazar pedidos
  const btnAprobar = document.querySelectorAll(".btn-aprobar")
  const btnRechazar = document.querySelectorAll(".btn-rechazar")

  btnAprobar.forEach((btn) => {
    btn.addEventListener("click", () => {
      const pedidoCard = btn.closest(".pedido-card")
      if (!pedidoCard) return

      const pedidoId = pedidoCard.querySelector(".pedido-id")?.textContent
      if (!pedidoId) return

      if (confirm(`¿Estás seguro de que deseas aprobar el ${pedidoId}?`)) {
        const pedidoEstado = pedidoCard.querySelector(".pedido-estado")
        if (pedidoEstado) {
          pedidoEstado.textContent = "Aprobado"
          pedidoEstado.className = "pedido-estado aprobado"
        }

        pedidoCard.setAttribute("data-estado", "aprobado")

        // Reemplazar botones
        const pedidoAcciones = pedidoCard.querySelector(".pedido-acciones")
        if (pedidoAcciones) {
          pedidoAcciones.innerHTML = `
            <button class="btn-detalles">Ver detalles</button>
            <button class="btn-contactar">Contactar cliente</button>
          `
        }

        alert(`${pedidoId} aprobado correctamente.`)
      }
    })
  })

  btnRechazar.forEach((btn) => {
    btn.addEventListener("click", () => {
      const pedidoCard = btn.closest(".pedido-card")
      if (!pedidoCard) return

      const pedidoId = pedidoCard.querySelector(".pedido-id")?.textContent
      if (!pedidoId) return

      if (confirm(`¿Estás seguro de que deseas rechazar el ${pedidoId}?`)) {
        const pedidoEstado = pedidoCard.querySelector(".pedido-estado")
        if (pedidoEstado) {
          pedidoEstado.textContent = "Rechazado"
          pedidoEstado.className = "pedido-estado rechazado"
        }

        pedidoCard.setAttribute("data-estado", "rechazado")

        // Reemplazar botones
        const pedidoAcciones = pedidoCard.querySelector(".pedido-acciones")
        if (pedidoAcciones) {
          pedidoAcciones.innerHTML = `
            <button class="btn-detalles">Ver detalles</button>
          `
        }

        alert(`${pedidoId} rechazado.`)
      }
    })
  })
}
