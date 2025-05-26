import { actualizarHerramientas } from "./actualizarHerramientaInicio.js";

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form-agregar-herramienta");
    const imageInput = document.getElementById("herramienta-imagen");
    const previewContainer = document.getElementById("imagen-preview");
    const btnCancelar = document.getElementById("btn-cancelar-agregar");

    // Mostrar vista previa de la imagen seleccionada
    imageInput.addEventListener("change", () => {
        const file = imageInput.files[0];
        if (!file) {
            previewContainer.innerHTML = "<span>Vista previa de la imagen</span>";
            return;
        }
        const reader = new FileReader();
        reader.onload = (e) => {
            previewContainer.innerHTML = `<img src="${e.target.result}" alt="Vista previa" style="max-width: 100%; max-height: 150px;">`;
        };
        reader.readAsDataURL(file);
    });

    // Cancelar y limpiar formulario
    btnCancelar.addEventListener("click", () => {
        form.reset();
        previewContainer.innerHTML = "<span>Vista previa de la imagen</span>";
    });

    // Enviar formulario
    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const userId = localStorage.getItem("userId");
        if (!userId) {
            alert("No se encontró el ID del usuario. Por favor inicia sesión de nuevo.");
            return;
        }

        const toolData = {
            name: document.getElementById("herramienta-nombre").value.trim(),
            category: document.getElementById("herramienta-categoria").value,
            costoDiario: parseFloat(document.getElementById("herramienta-costo").value),
            disponibilidad: parseInt(document.getElementById("herramienta-disponibilidad").value),
            descripcion: document.getElementById("herramienta-descripcion").value.trim(),
            userId: parseInt(userId),
        };

        if (!toolData.category) {
            alert("Por favor selecciona una categoría.");
            return;
        }

        const imageFile = imageInput.files[0];
        if (!imageFile) {
            alert("Por favor selecciona una imagen para la herramienta.");
            return;
        }

        const jwtToken = localStorage.getItem("token");
        if (!jwtToken) {
            alert("No estás autenticado. Por favor inicia sesión.");
            return;
        }

        const formData = new FormData();
        formData.append("tool", new Blob([JSON.stringify(toolData)], { type: "application/json" }));
        formData.append("imagen", imageFile);

        try {
            const response = await fetch("http://localhost:8080/api/Tools", {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${jwtToken}`,
                },
                body: formData,
            });

            if (!response.ok) {
                const errorMsg = await response.text();
                throw new Error(errorMsg || "Error al guardar la herramienta");
            }

            const data = await response.json();
            alert("Herramienta creada con éxito, ID: " + data.id);
           

            // Verificar si la tabla ya existe, si no, crearla
            let tabla = document.querySelector(".tabla-reservas tbody");
            if (!tabla) {
                const panelHerramientas = document.getElementById("panel-mis-herramientas");
                panelHerramientas.innerHTML = `
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
                        <tbody></tbody>
                    </table>
                `;
                tabla = document.querySelector(".tabla-reservas tbody");
            }

            // Agregar la herramienta a la tabla sin recargar la página
            const fila = document.createElement("tr");
            fila.innerHTML = `
                <td>${data.name}</td>
                <td>${data.descripcion}</td>
                <td>${data.category}</td>
                <td>${data.disponibilidad}</td>
                <td>${data.costoDiario}</td>
            `;
            tabla.appendChild(fila);

            // Limpiar el formulario y la vista previa de la imagen
            form.reset();
            previewContainer.innerHTML = "<span>Vista previa de la imagen</span>";
            actualizarHerramientas();

        } catch (error) {
            console.error("Error al crear herramienta:", error);
            alert("Error: " + error.message);
        }
    });
});
