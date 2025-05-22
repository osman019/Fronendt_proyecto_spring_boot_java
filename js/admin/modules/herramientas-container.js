document.addEventListener('DOMContentLoaded', () => {
  const contenedor = document.querySelector('.herramientas-container');
  if (!contenedor) {
    console.error("❌ No se encontró el contenedor '.productos-container'");
    return;
  }

  const token = localStorage.getItem("token"); // ✅ obtener token correctamente
  const userId = parseInt(localStorage.getItem("userId")); // también recuperamos el userId si lo necesitas

  if (!token || !userId) {
    alert("⚠️ Sesión expirada o no iniciada. Por favor inicia sesión.");
    return;
  }

  fetch('http://localhost:8080/api/Tools', {
    headers: {
      'Authorization': `Bearer ${token}` // ✅ enviar token en el encabezado
    }
  })
    .then(res => {
      if (!res.ok) {
        throw new Error(`HTTP ${res.status} - ${res.statusText}`);
      }
      return res.json();
    })
    .then(herramientas => {
      console.log("📦 Datos obtenidos:", herramientas);
      mostrarHerramientas(herramientas, contenedor, userId);
    })
    .catch(err => console.error('❌ Error cargando herramientas:', err));
});

function mostrarHerramientas(herramientas, contenedor, userId) {
  console.log("📌 Mostrando herramientas en el DOM...");
  contenedor.innerHTML = ""; // Limpiar contenido previo

  const herramientasUsuario = herramientas.filter(h => h.user && h.user.id === userId);

  if (herramientasUsuario.length === 0) {
    contenedor.innerHTML = '<p>No tienes herramientas registradas.</p>';
    return;
  }

  herramientasUsuario.forEach(h => {
    console.log("➕ Agregando herramienta:", h.name);

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
