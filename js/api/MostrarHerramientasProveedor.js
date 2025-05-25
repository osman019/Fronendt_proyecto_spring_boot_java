export function mostrarHerramientasProveedor() {
  console.log('mostrarHerramientasProveedor ejecutada');
  const userId = localStorage.getItem('userId');
  if (!userId) {
    document.getElementById('panel-mis-herramientas').innerHTML = '<p>Debes iniciar sesión como proveedor.</p>';
    return;
  }

  fetch(`http://localhost:8080/api/Tools/proveedor/${userId}`, {
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
})
    .then(response => response.json()) // Convierte la respuesta en JSON
    .then(data => {
        console.log("Herramientas recibidas:", data); 

        if (!data.tools || data.tools.length === 0) {
            document.getElementById('panel-mis-herramientas').innerHTML = '<p>No tienes herramientas registradas.</p>';
            return;
        }

        let html = `
            <table class="tabla-reservas">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Categoría</th>
                        <th>Disponibilidad</th>
                        <th>Costo Diario</th>
                    </tr>
                </thead>
                <tbody>
        `;

     
        data.tools.forEach(h => {
            html += `
                <tr>
                    <td>${h.name}</td>
                    <td>${h.descripcion}</td>
                    <td>${h.category}</td>
                    <td>${h.disponibilidad}</td>
                    <td>${h.costoDiario}</td>
                </tr>
            `;
        });

        html += '</tbody></table>';
        document.getElementById('panel-mis-herramientas').innerHTML = html;
    })
    .catch(err => {
        document.getElementById('panel-mis-herramientas').innerHTML = '<p>Error al cargar herramientas.</p>';
        console.error("Error al cargar herramientas:", err);
    })};
