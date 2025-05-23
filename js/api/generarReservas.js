document.addEventListener('DOMContentLoaded', function () {
  // Listener para abrir/cerrar el modal
  document.addEventListener('click', function (e) {
    if (e.target.classList.contains('reservar-btn')) {
      const toolId = e.target.getAttribute('data-tool-id');
      document.getElementById('modal-tool-id').value = toolId;
      document.getElementById('modal-reservar').style.display = 'flex';
    }
    if (e.target.id === 'cerrar-modal') {
      document.getElementById('modal-reservar').style.display = 'none';
    }
  });

  // Enviar la reserva
  const form = document.getElementById('form-reservar');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      console.log('¡Evento submit capturado!');
      const toolId = document.getElementById('modal-tool-id').value;
      const customerId = localStorage.getItem("userId");
      const fechaReserva = document.getElementById('fecha-reserva').value;
      const fechaDevolucion = document.getElementById('fecha-devolucion').value;

      console.log('toolId:', toolId);
      console.log('customerId:', customerId);
      console.log('fechaReserva:', fechaReserva);
      console.log('fechaDevolucion:', fechaDevolucion);
      if (!toolId || !customerId || !fechaReserva || !fechaDevolucion) {
        alert('Faltan datos para la reserva.');
        return;
      }

      fetch('http://localhost:8080/api/Reservations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',

        },
        body: JSON.stringify({
          toolsId: { id: toolId },
          customerId: { id: customerId },
          fechaReserva: fechaReserva,
          fechaDevolucion: fechaDevolucion
        })
      })
        .then(res => {
          if (res.ok) {
            alert('¡Reserva realizada!');
            document.getElementById('modal-reservar').style.display = 'none';
          } else {
            alert('Error al reservar');
          }
        })
        .catch(err => {
          alert('Error de red o del servidor');
          console.error(err);
        });
    });
  }
});