
  document.addEventListener('DOMContentLoaded', () => 
  {
  fetch('http://localhost:8080/api/Tools')
    .then(res => res.json())
    .then(data => {
      mostrarHerramientas(data, ".productos-container");
      mostrarHerramientas(data, ".ofertas-container"); 
    })
    .catch(err => console.error('❌ Error al cargar herramientas:', err));


  });export function mostrarHerramientas(herramientas, contenedorSelector) {
  const contenedor = document.querySelector(contenedorSelector);
  if (!contenedor) {
    console.error(`❌ No se encontró el contenedor '${contenedorSelector}'`);
    return;
  }

  contenedor.innerHTML = "";
  console.log(herramientas);

  herramientas.forEach(h => {
    const producto = document.createElement('div');
    producto.className = contenedorSelector.includes("ofertas") ? "oferta-card" : "producto-card";

   
    const imagenSrc = h.datosImagen
      ? `data:image/png;base64,${h.datosImagen}`
      : 'img/default.png';

    producto.innerHTML = `
      <img src="${imagenSrc}" alt="${h.name}" class="oferta-img"">
      <h3 class="${contenedorSelector.includes("ofertas") ? "oferta-nombre" : "producto-nombre"}">${h.name}</h3>
      <p class="${contenedorSelector.includes("ofertas") ? "oferta-precio-ahora" : "producto-precio"}">
      <p class="producto-descripcion">${h.descripcion}</p>
        Precio: $${h.costoDiario.toLocaleString('es-CO')} COP x 1 día
      </p>
      <br>
      <button class="reservar-btn" data-tool-id="${h.id}">Reservar</button>
    `;

    contenedor.appendChild(producto);
  });
  document.addEventListener('click', function(e) {
  if (e.target.classList.contains('reservar-btn')) {
    const toolId = e.target.getAttribute('data-tool-id');
    document.getElementById('modal-tool-id').value = toolId;
    document.getElementById('modal').style.display = 'flex';
  }
  if (e.target.id === 'cerrar-modal') {
    document.getElementById('modal').style.display = 'none';
  }
});


document.getElementById('form-reservar').addEventListener('submit', function(e) {
  e.preventDefault();
  const toolId = document.getElementById('modal-tool-id').value;
  const customerId = document.getElementById('modal-customer-id').value;

  fetch('http://localhost:8080/api/reservations', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      tools_id: toolId,
      customer_id: customerId
    
    })
  })
  .then(res => {
    if (res.ok) {
      alert('¡Reserva realizada!');
      document.getElementById('modal-reservar').style.display = 'none';
    } else {
      alert('Error al reservar');
    }
  });
});
document.addEventListener('click', function(e) {

  if (e.target.classList.contains('reservar-btn')) {
   
    alert('Debes iniciar sesión para reservar una herramienta.');
    
    document.getElementById('login-modal').style.display = 'flex';
  }
});


document.getElementById('close-login').onclick = function() {
  document.getElementById('login-modal').style.display = 'none';
};
}