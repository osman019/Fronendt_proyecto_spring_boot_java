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
              <th>Factura</th>
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
            <td>${r.facturas || ''}</td>
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

// Llama la función al cargar la página
document.addEventListener('DOMContentLoaded', mostrarReservas);