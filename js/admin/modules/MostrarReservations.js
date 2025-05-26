
function formatearFecha(fechaString) {
  if (!fechaString) return "-";
  const fecha = new Date(fechaString);
  const dia = String(fecha.getDate()).padStart(2, "0");
  const mes = String(fecha.getMonth() + 1).padStart(2, "0");
  const anio = fecha.getFullYear();
  return `${dia}/${mes}/${anio}`;
}


async function cargarReservas() {
  try {
    const response = await fetch("http://localhost:8080/api/Reservations");
    if (!response.ok) throw new Error("Error al obtener reservas");

    const reservas = await response.json();

    window.listaReservas = reservas;

    mostrarReservas(reservas);
  } catch (error) {
    console.error("Error al cargar reservas:", error);
  }
}
function mostrarReservas(reservas) {
  const tbodyReservas = document.querySelector("#admin-reservas .admin-table tbody");
  tbodyReservas.innerHTML = "";

  reservas.forEach((reserva, index) => {
    const idReserva = `#R${String(index + 1).padStart(3, "0")}`;
    const nombreCliente = reserva.user?.name || "-";
    const herramientas = Array.isArray(reserva.toolsId)
      ? reserva.toolsId.map(t => t.name).join(", ")
      : (reserva.toolsId?.name || "-");
    const fechaInicio = formatearFecha(reserva.fechaReserva);
    const fechaFin = formatearFecha(reserva.fechaDevolucion);
    const estado = reserva.estado || "Activa";
    const total = reserva.paymentId?.monto ? `$${reserva.paymentId.monto.toLocaleString("es-CO")}` : "-";

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${idReserva}</td>
      <td>${nombreCliente}</td>
      <td>${herramientas}</td>
      <td>${fechaInicio}</td>
      <td>${fechaFin}</td>
      <td>${total}</td>
      <td>${estado}</td>
      <td>
        <div class="admin-table-actions">
          <button class="admin-table-btn view" title="Ver detalles"><i class="icon-view"></i></button>
          <button class="admin-table-btn edit" title="Editar"><i class="icon-edit"></i></button>
          ${estado.toLowerCase() === "activa"
            ? `<button class="admin-table-btn delete" title="Cancelar"><i class="icon-delete"></i></button>`
            : ""
          }
        </div>
      </td>
    `;
    tbodyReservas.appendChild(tr);
  });
}


function aplicarFiltrosReservas() {
  const inputBuscar = document.querySelector("#admin-reservas .admin-search input").value.toLowerCase();
  const selectEstado = document.querySelector("#admin-reservas .admin-filter select").value;

  let filtradas = window.listaReservas || [];

  if (inputBuscar) {
    filtradas = filtradas.filter(r =>
      (r.user?.name && r.user.name.toLowerCase().includes(inputBuscar)) ||
      (r.toolsId?.name && r.toolsId.name.toLowerCase().includes(inputBuscar))
    );
  }

  if (selectEstado && selectEstado !== "todos") {
    filtradas = filtradas.filter(r => {
      const estado = r.estado ? r.estado.toLowerCase() : "activa";
      return estado === selectEstado;
    });
  }

  mostrarReservas(filtradas);
}

function iniciarFiltrosReservas() {
  const inputBuscar = document.querySelector("#admin-reservas .admin-search input");
  const selectEstado = document.querySelector("#admin-reservas .admin-filter select");

  inputBuscar.addEventListener("input", aplicarFiltrosReservas);
  selectEstado.addEventListener("change", aplicarFiltrosReservas);
}

document.addEventListener("DOMContentLoaded", () => {
  cargarReservas();
  iniciarFiltrosReservas();
});
