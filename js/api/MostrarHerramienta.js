
document.addEventListener('DOMContentLoaded', () => {
  fetch('http://localhost:8080/api/Tools') 
    .then(res => res.json())
    .then(herramientas => mostrarHerramientas(herramientas))
    .catch(err => console.error('Error cargando herramientas:', err));
});

function mostrarHerramientas(herramientas) {
  const contenedor = document.querySelector('.productos-container');
  contenedor.innerHTML = ''; // Limpiamos los productos de prueba

  herramientas.forEach(h => {
    const producto = document.createElement('div');
    producto.className = 'producto-card';
    producto.setAttribute('data-categoria', h.category.toLowerCase());

    producto.innerHTML = `
      <div class="producto-img-container">
        <img src="${h.datos_imagen}" alt="${h.name}" class="producto-img">
      </div>
      <h3 class="producto-nombre">${h.name}</h3>
      <p class="producto-descripcion">${h.descripcion}</p>
      <p class="producto-precio">$${h.costo_diario.toLocaleString('es-CO')} COP x 1 día</p>
      <button class="reservar-btn">Reservar</button>
    `;

    contenedor.appendChild(producto);
  });
}
