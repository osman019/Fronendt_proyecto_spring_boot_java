import { mostrarHerramientas } from "../api/MostrarHerramienta.js";

export function actualizarHerramientas() {
  fetch('http://localhost:8080/api/Tools')
    .then(res => res.json())
    .then(data => {
      mostrarHerramientas(data, ".productos-container");
      mostrarHerramientas(data, ".ofertas-container");
    })
    .catch(err => console.error('❌ Error al actualizar herramientas:', err));
}
