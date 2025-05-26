export function mostrarReservas() {
  const userId = localStorage.getItem('userId');
  if (!userId) {
    document.getElementById('reservas-lista').innerHTML = '<p>Debes iniciar sesión para ver tus reservas.</p>';
    return;
  }

  fetch(`http://localhost:8080/api/Reservations/user/${userId}`, {
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
  })
    .then(res => {
      if (!res.ok) {
        throw new Error('HTTP status ' + res.status);
      }
      return res.json();
    })
    .then(reservas => {
      if (!reservas.length) {
        document.getElementById('reservas-lista').innerHTML = '<p>No tienes reservas.</p>';
        return;
      }

      let html = `
        <table class="tabla-reservas">
          <thead>
            <tr>
              <th>ID</th>
              <th>Fecha Reserva</th>
              <th>Fecha Devolución</th>
              <th>Herramienta</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
      `;
      reservas.forEach(r => {
        html += `
          <tr>
            <td>${r.id}</td>
            <td>${r.fechaReserva || r.fecha_reserva || ''}</td>
            <td>${r.fechaDevolucion || r.fecha_devolucion || ''}</td>
            <td>${r.toolsId?.name || r.tools_id || ''}</td>

            <td>
              <button class="boton-cancelar" onclick="cancelarReserva(${r.id})">Cancelar</button>
              <button class="boton-factura" onclick="descargarFactura(${r.id})">Factura</button>
            </td>
          </tr>
        `;
      });
      html += '</tbody></table>';
      document.getElementById('reservas-lista').innerHTML = html;
    })
    .catch(err => {
      document.getElementById('reservas-lista').innerHTML = '<p>Error al cargar reservas.</p>';
      console.error('Error al cargar reservas:', err);
    });
}

function cancelarReserva(idReserva) {
  if (!confirm("¿Estás seguro de cancelar esta reserva?")) return;

  fetch(`http://localhost:8080/api/Reservations/${idReserva}`, {
    method: 'DELETE',
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('token') 
    }
  })
    .then(res => {
      if (!res.ok) throw new Error("Error al cancelar la reserva");
      return res.json();
    })
    .then(data => {
      alert("Reserva cancelada correctamente");
      mostrarReservas(); 
    })
    .catch(err => {
      alert("No se pudo cancelar la reserva");
      console.error(err);
    });
}

function descargarFactura(reservationId) {
  fetch(`http://localhost:8080/api/Reservations/${reservationId}/pdf`, {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('token'),
      'Accept': 'application/pdf',
    },
    credentials: 'include'
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Error al obtener la factura');
    }
    return response.blob();
  })
  .then(blob => {
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Reserva_${reservationId}.pdf`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    window.URL.revokeObjectURL(url);
  })
  .catch(error => {
    console.error('Error:', error);
    alert('No se pudo descargar la factura. Intenta de nuevo.');
  });
}

window.cancelarReserva = cancelarReserva;
window.descargarFactura = descargarFactura;
document.addEventListener('DOMContentLoaded', mostrarReservas);
