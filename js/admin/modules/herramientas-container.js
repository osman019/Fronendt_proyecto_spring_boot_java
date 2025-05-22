document.addEventListener('DOMContentLoaded', () => {
  const token = localStorage.getItem("token");
  const userId = parseInt(localStorage.getItem("userId"));
  const contenedorSelector = ".herramientas-container";

  if (!token || !userId) {
    alert("⚠️ Sesión expirada o no iniciada. Por favor inicia sesión.");
    return;
  }

  let herramientasGlobal = [];

  const filtroEstado = document.getElementById("filtro-estado");
  const buscarHerramienta = document.getElementById("buscar-herramienta");

  fetch('http://localhost:8080/api/Tools', {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
    .then(res => {
      if (!res.ok) throw new Error(`HTTP ${res.status} - ${res.statusText}`);
      return res.json();
    })
    .then(herramientas => {
      console.log("Herramientas recibidas:", herramientas);
      if (herramientas.length > 0) {
        console.log("Primera herramienta:", herramientas[0]);
      }

      herramientasGlobal = herramientas.filter(h => Number(h.userId) === userId);

      console.log("Herramientas filtradas para usuario", userId, ":", herramientasGlobal);

      mostrarHerramientas(herramientasGlobal, contenedorSelector);
    })
    .catch(err => console.error('❌ Error al cargar herramientas:', err));

  // Función para aplicar filtros en el listado mostrado
  function aplicarFiltros() {
    let filtradas = [...herramientasGlobal];

    const estadoSeleccionado = filtroEstado.value;
    if (estadoSeleccionado !== "todos") {
      filtradas = filtradas.filter(h => h.estado === estadoSeleccionado);
    }

    const textoBusqueda = buscarHerramienta.value.trim().toLowerCase();
    if (textoBusqueda) {
      filtradas = filtradas.filter(h =>
        h.name.toLowerCase().includes(textoBusqueda) ||
        (h.descripcion && h.descripcion.toLowerCase().includes(textoBusqueda))
      );
    }

    mostrarHerramientas(filtradas, contenedorSelector);
  }

  filtroEstado.addEventListener("change", aplicarFiltros);
  buscarHerramienta.addEventListener("input", aplicarFiltros);
});

function mostrarHerramientas(herramientas, contenedorSelector) {
  const contenedor = document.querySelector(contenedorSelector);
  if (!contenedor) {
    console.error(`❌ No se encontró el contenedor '${contenedorSelector}'`);
    return;
  }

  contenedor.innerHTML = "";

  if (herramientas.length === 0) {
    contenedor.innerHTML = '<p>No tienes herramientas registradas.</p>';
    return;
  }

  herramientas.forEach(h => {
    const producto = document.createElement('div');
    producto.className = "producto-card";

    const imagenSrc = h.datosImagen
      ? `data:image/png;base64,${h.datosImagen}`
      : 'img/default.png';

    producto.innerHTML = `
      <img src="${imagenSrc}" alt="${h.name}" class="oferta-img">
      <h3 class="producto-nombre">${h.name}</h3>
      <p class="producto-precio">
        Precio: $${h.costoDiario.toLocaleString('es-CO')} COP x 1 día
      </p>
      <p class="producto-descripcion">${h.descripcion}</p>
      <br>
      <button class="reservar-btn" data-tool-id="${h.id}">Reservar</button>
    `;

    contenedor.appendChild(producto);
  });
}
