
function formatearFecha(fechaString) {
  const fecha = new Date(fechaString);
  const dia = String(fecha.getDate()).padStart(2, "0");
  const mes = String(fecha.getMonth() + 1).padStart(2, "0");
  const anio = fecha.getFullYear();
  return `${dia}/${mes}/${anio}`;
}

async function cargarProveedores() {
  try {
    const response = await fetch("http://localhost:8080/suppliers");
    if (!response.ok) throw new Error("Error al obtener los proveedores");

    const proveedores = await response.json();


    window.listaProveedores = proveedores;

    mostrarProveedores(proveedores);
  } catch (error) {
    console.error("Error al cargar proveedores:", error);
  }
}

function mostrarProveedores(proveedores) {
  const tbody = document.querySelector("#admin-proveedores .admin-tables tbody");
  tbody.innerHTML = "";

  proveedores.forEach((proveedor, index) => {
    const tr = document.createElement("tr");
    const idProveedor = `#P${String(index + 1).padStart(3, "0")}`;

    tr.innerHTML = `
      <td>${idProveedor}</td>
      <td>${proveedor.name || "-"}</td>
      <td>${proveedor.username || "-"}</td>
      <td>${proveedor.telefono || "-"}</td>
      <td>${proveedor.tools ? proveedor.tools.length : 0}</td>
      <td>${proveedor.status || "Activo"}</td>
      <td>${formatearFecha(proveedor.createdAt || new Date())}</td>
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


function aplicarFiltros() {
  const inputBuscar = document.querySelector(".admin-search input").value.toLowerCase();
  const selectEstado = document.querySelector(".admin-filter select").value;

  let filtrados = window.listaProveedores || [];

  if (inputBuscar) {
    filtrados = filtrados.filter(p =>
      (p.name && p.name.toLowerCase().includes(inputBuscar)) ||
      (p.username && p.username.toLowerCase().includes(inputBuscar)) ||
      (p.telefono && p.telefono.toLowerCase().includes(inputBuscar))
    );
  }

  if (selectEstado && selectEstado !== "todos") {
    filtrados = filtrados.filter(p => {
      const estado = p.status ? p.status.toLowerCase() : "activo";
      return estado === selectEstado;
    });
  }

  mostrarProveedores(filtrados);
}

function iniciarFiltros() {
  const inputBuscar = document.querySelector(".admin-search input");
  const selectEstado = document.querySelector(".admin-filter select");

  inputBuscar.addEventListener("input", aplicarFiltros);
  selectEstado.addEventListener("change", aplicarFiltros);
}

document.addEventListener("DOMContentLoaded", () => {
  cargarProveedores();
  iniciarFiltros();
});
