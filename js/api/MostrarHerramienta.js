
document.addEventListener('DOMContentLoaded', () => 
{
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

  contenedor.innerHTML = ""; // Limpiar contenido previo

  herramientas.forEach(h => {
    const producto = document.createElement('div');
    producto.className = contenedorSelector.includes("ofertas") ? "oferta-card" : "producto-card"; // Adaptar estilo según sección

    producto.innerHTML = `
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
}
