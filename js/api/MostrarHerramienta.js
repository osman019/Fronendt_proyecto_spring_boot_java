

document.addEventListener('DOMContentLoaded', () => {
  fetch('http://localhost:8080/api/Tools')
    .then(res => res.json())
    .then(data => {
      mostrarHerramientas(data, ".productos-container");
      mostrarHerramientas(data, ".ofertas-container");

    })
    .catch(err => console.error('❌ Error al cargar herramientas:', err));
});

export function mostrarHerramientas(herramientas, contenedorSelector) {
  const contenedor = document.querySelector(contenedorSelector);
  if (!contenedor) {
    console.error(`❌ No se encontró el contenedor '${contenedorSelector}'`);
    return;
  }

  contenedor.innerHTML = "";
  herramientas.forEach(h => {
    const producto = document.createElement('div');
    producto.className = contenedorSelector.includes("ofertas") ? "oferta-card" : "producto-card";

    const imagenSrc = h.datosImagen
      ? `data:image/png;base64,${h.datosImagen}`
      : 'img/default.png';

    // Solo mensaje en ofertas, solo botón en productos
    let extraHtml = '';
    if (contenedorSelector === '.ofertas-container') {
      extraHtml = `<div class="mensaje-inicia-sesion">Inicia sesión para reservar</div>`;
    } else {
      extraHtml = `<button class="reservar-btn" data-tool-id="${h.id}">Reservar</button>`;
    }

    producto.innerHTML = `
      <img src="${imagenSrc}" alt="${h.name}" class="oferta-img">
      <h3 class="${contenedorSelector.includes("ofertas") ? "oferta-nombre" : "producto-nombre"}">${h.name}</h3>
      <p class="producto-descripcion">${h.descripcion}</p>
      <p class="category">${h.category}</p>
      <p class="${contenedorSelector.includes("ofertas") ? "oferta-precio-ahora" : "producto-precio"}">
        Precio: $${h.costoDiario.toLocaleString('es-CO')} COP x 1 día
      </p>
      <br>
      ${extraHtml}
    `;

    contenedor.appendChild(producto);
  });
}

// Listener para el botón reservar SOLO en la sección de clientes
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('reservar-btn')) {
    const toolId = e.target.getAttribute('data-tool-id');
    document.getElementById('modal-tool-id').value = toolId;
    document.getElementById('modal-reservar').style.display = 'flex';
  }
  if (e.target.id === 'cerrar-modal') {
    document.getElementById('modal-reservar').style.display = 'none';
  }
});
export function actualizarHerramientas() {
  fetch('http://localhost:8080/api/Tools')
    .then(res => res.json())
    .then(data => {
      mostrarHerramientas(data, ".productos-container");
      mostrarHerramientas(data, ".ofertas-container");
    })
    .catch(err => console.error('❌ Error al cargar herramientas:', err));
}




