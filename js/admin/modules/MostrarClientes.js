
function formatearFecha(fechaString) {
  const fecha = new Date(fechaString);
  const dia = String(fecha.getDate()).padStart(2, "0");
  const mes = String(fecha.getMonth() + 1).padStart(2, "0");
  const anio = fecha.getFullYear();
  return `${dia}/${mes}/${anio}`;
}

async function cargarClientes() {
  try {
    const response = await fetch("http://localhost:8080/customers");
    if (!response.ok) throw new Error("Error al obtener los clientes");

    const clientes = await response.json();

    window.listaClientes = clientes;

    mostrarClientes(clientes);
  } catch (error) {
    console.error("Error al cargar clientes:", error);
  }
}

function mostrarClientes(clientes) {
  const tbody = document.querySelector(".admin-table-cliente tbody");
  tbody.innerHTML = "";

  clientes.forEach((cliente, index) => {
    const tr = document.createElement("tr");

    const idCliente = `#C${String(index + 1).padStart(3, "0")}`;

    tr.innerHTML = `
      <td>${idCliente}</td>
      <td>${cliente.name || "-"}</td>
      <td>${cliente.username || "-"}</td>
      <td>${cliente.telefono || "-"}</td>
      <td>${cliente.tools ? cliente.tools.length : 0}</td>
      <td>${cliente.status || "Activo"}</td>
      <td>${formatearFecha(cliente.createdAt || new Date())}</td>
      <td>
        <div class="admin-table-actions">
          <button class="admin-table-btn view" title="Ver detalles"><i class="icon-view"></i></button>
          <button class="admin-table-btn edit" title="Editar"><i class="icon-edit"></i></button>
          <button class="admin-table-btn delete" title="Eliminar"><i class="icon-delete"></i></button>
        </div>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function aplicarFiltrosClientes() {
  const inputBuscar = document.querySelector(".admin-search input");
  const selectEstado = document.querySelector(".admin-filter select");

  let filtrados = window.listaClientes || [];

  const texto = inputBuscar.value.toLowerCase();
  const estado = selectEstado.value;

  if (texto) {
    filtrados = filtrados.filter(c =>
      (c.name && c.name.toLowerCase().includes(texto)) ||
      (c.username && c.username.toLowerCase().includes(texto)) ||
      (c.telefono && c.telefono.toLowerCase().includes(texto))
    );
  }

  if (estado && estado !== "todos") {
    filtrados = filtrados.filter(c => {
      const estadoCliente = c.status ? c.status.toLowerCase() : "activo";
      return estadoCliente === estado;
    });
  }

  mostrarClientes(filtrados);
}

function iniciarFiltrosClientes() {
  const inputBuscar = document.querySelector(".admin-search input");
  const selectEstado = document.querySelector(".admin-filter select");

  inputBuscar.addEventListener("input", aplicarFiltrosClientes);
  selectEstado.addEventListener("change", aplicarFiltrosClientes);
}

document.addEventListener("DOMContentLoaded", () => {
  cargarClientes();
  iniciarFiltrosClientes();
});
