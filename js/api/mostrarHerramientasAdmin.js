document.addEventListener('DOMContentLoaded', () => {
  fetch('http://localhost:8080/api/Tools')
    .then(res => res.json())
    .then(data => {
      mostrarHerramientasAdmin(data);
    })
    .catch(err => console.error('❌ Error al cargar herramientas:', err));
});

function mostrarHerramientasAdmin(herramientas) {
  const tbody = document.querySelector('.admin-table tbody');
  if (!tbody) {
    console.error('❌ No se encontró el tbody de la tabla de administración');
    return;
  }

  tbody.innerHTML = ""; // Limpiar contenido previo

  herramientas.forEach((h, index) => {
    const tr = document.createElement('tr');

    tr.innerHTML = `
      <td>#${String(h.id).padStart(3, '0')}</td>
      <td>${h.name}</td>
      <td>${h.category || 'Sin categoría'}</td>
      <td>$${h.costoDiario.toLocaleString('es-CO')}</td>
      <td>${h.disponibilidad    }</td>
      <td>${h.estado}</td>
      <td>${h.proveedor?.nombre || 'Desconocido'}</td>
      <td>
        <div class="admin-table-actions">
          <button class="admin-table-btn view" data-id="${h.id}" title="Ver detalles"><i class="icon-view"></i></button>
          <button class="admin-table-btn edit" data-id="${h.id}" title="Editar"><i class="icon-edit"></i></button>
          <button class="admin-table-btn delete" data-id="${h.id}" title="Eliminar"><i class="icon-delete"></i></button>
        </div>
      </td>
    `;

    tbody.appendChild(tr);
  });
}
