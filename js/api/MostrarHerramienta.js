
document.addEventListener('DOMContentLoaded', () => 
{
fetch('http://localhost:8080/api/Tools')
  .then(res => res.json())
  .then(herramientas => {
    console.log("Datos obtenidos:", herramientas); //  Verifica que los datos llegan
    mostrarHerramientas(herramientas);
    console.log("📌 Se ha llamado a mostrarHerramientas()");
  })
  .catch(err => console.error('Error cargando herramientas:', err));

});

 export function mostrarHerramientas(herramientas) {
  const contenedor = document.querySelector('.productos-container');
  if (!contenedor) {
    console.error("❌ No se encontró el contenedor '.productos-container'");
    return;
  }

  console.log("📌 Mostrando herramientas en el DOM...");

  contenedor.innerHTML = ""; // Limpiar contenido previo

  herramientas.forEach(h => {
    console.log("➕ Agregando herramienta:", h.name); // Verifica que se está procesando cada herramienta

    const producto = document.createElement('div');
    producto.className = 'producto-card';

    producto.innerHTML = `
      <h3 class="producto-nombre">${h.name}</h3>
      <p class="producto-descripcion">${h.descripcion}</p>
      <p class="producto-precio">$${h.costoDiario.toLocaleString('es-CO')} COP x 1 día</p>
       <button class="reservar-btn">Reservar</button>
    `;

    contenedor.appendChild(producto);
  });

  console.log("✅ Elementos agregados al DOM.");
}
