document.addEventListener("DOMContentLoaded", () => {
  const formAgregarHerramienta = document.getElementById("form-agregar-herramienta");

  formAgregarHerramienta.addEventListener("submit", async (e) => {
    e.preventDefault();

    const nombre = document.getElementById("herramienta-nombre").value.trim();
    const categoria = document.getElementById("herramienta-categoria").value;
    const costo = parseInt(document.getElementById("herramienta-costo").value);
    const disponibilidad = parseInt(document.getElementById("herramienta-disponibilidad").value);
    const descripcion = document.getElementById("herramienta-descripcion").value.trim();
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Debe iniciar sesión para agregar una herramienta.");
      return;
    }

    let isValid = true;

    if (!nombre || !categoria || isNaN(costo) || costo < 1000 || isNaN(disponibilidad) || disponibilidad < 1 || !descripcion) {
      alert("Por favor, completa todos los campos obligatorios correctamente.");
      isValid = false;
    }

    if (isValid) {
      const herramientaData = {
        nombre,
        categoria,
        costoDiario: costo,
        disponibilidad,
        descripcion
      };

      try {
        const response = await fetch("http://localhost:8080/api/Tools", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          },
          body: JSON.stringify(herramientaData)
        });

        if (!response.ok) {
          const error = await response.json();
          throw new Error(error.error || "Error al guardar la herramienta.");
        }

        const data = await response.json();
        alert("Herramienta agregada correctamente.");
        formAgregarHerramienta.reset();
        document.getElementById("imagen-preview").innerHTML = "<span>Vista previa de la imagen</span>";
      } catch (error) {
        console.error("Error al guardar herramienta:", error);
        alert("Error: " + error.message);
      }
    }
  });

  // Vista previa de imagen
  document.getElementById("herramienta-imagen").addEventListener("change", function () {
    const preview = document.getElementById("imagen-preview");
    const file = this.files[0];
    preview.innerHTML = file
      ? `<img src="${URL.createObjectURL(file)}" style="max-width: 100%" />`
      : "<span>Vista previa de la imagen</span>";
  });

  // Botón cancelar
  document.getElementById("btn-cancelar-agregar").addEventListener("click", () => {
    formAgregarHerramienta.reset();
    document.getElementById("imagen-preview").innerHTML = "<span>Vista previa de la imagen</span>";
  });
});
    