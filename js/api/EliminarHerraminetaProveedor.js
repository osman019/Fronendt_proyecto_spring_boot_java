
export function eliminarHerramienta(toolId, userId) {
  if (!confirm("¿Estás seguro de que deseas eliminar esta herramienta?")) {
    return;
  }

  fetch(`http://localhost:8080/api/Tools/${toolId}/${userId}`, {
    method: 'DELETE',
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
  })
  .then(response => {
    if (!response.ok) {
      throw new Error("No se pudo eliminar la herramienta.");
    }
    return response.text();
  })
  .then(message => {
    alert(message);
    mostrarHerramientasProveedor(); 
  })
  .catch(err => {
    alert("Error al eliminar la herramienta: " + err.message);
  });
}
