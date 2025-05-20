document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form-agregar-herramienta');
  const imageInput = document.getElementById('herramienta-imagen');
  const previewContainer = document.getElementById('imagen-preview');
  const btnCancelar = document.getElementById('btn-cancelar-agregar');

  // Mostrar preview de la imagen seleccionada
  imageInput.addEventListener('change', () => {
    const file = imageInput.files[0];
    if (!file) {
      previewContainer.innerHTML = '<span>Vista previa de la imagen</span>';
      return;
    }
    const reader = new FileReader();
    reader.onload = e => {
      previewContainer.innerHTML = `<img src="${e.target.result}" alt="Vista previa" style="max-width: 100%; max-height: 150px;">`;
    };
    reader.readAsDataURL(file);
  });

  // Cancelar (limpiar formulario y preview)
  btnCancelar.addEventListener('click', () => {
    form.reset();
    previewContainer.innerHTML = '<span>Vista previa de la imagen</span>';
  });

  // Enviar formulario
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const toolData = {
      name: document.getElementById('herramienta-nombre').value.trim(),
      category: document.getElementById('herramienta-categoria').value,
      costoDiario: parseFloat(document.getElementById('herramienta-costo').value),
      disponibilidad: parseInt(document.getElementById('herramienta-disponibilidad').value),
      descripcion: document.getElementById('herramienta-descripcion').value.trim(),
      supplierId: null
    };

    if (!toolData.category) {
      alert('Por favor selecciona una categoría.');
      return;
    }

    const imageFile = imageInput.files[0];
    if (!imageFile) {
      alert('Por favor selecciona una imagen para la herramienta.');
      return;
    }

    // Aquí cambiamos para obtener el token con la clave correcta "token"
    const jwtToken = localStorage.setItem("token", data.jwt);

    if (!jwtToken) {
      alert('No estás autenticado. Por favor inicia sesión.');
      return;
    }

    const formData = new FormData();
    formData.append('tool', JSON.stringify(toolData));
    formData.append('imagen', imageFile);

try {
  const response = await fetch('http://localhost:8080/api/tools', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${jwtToken}`
    },
    body: formData
  });

  if (!response.ok) {
    const errorMsg = await response.text();
    throw new Error(errorMsg || 'Error al guardar la herramienta');
  }

  // Esta línea solo se ejecuta si response.ok es true
  const data = await response.json();

  alert('Herramienta creada con éxito, ID: ' + data.id);
  form.reset();
  previewContainer.innerHTML = '<span>Vista previa de la imagen</span>';

} catch (error) {
  console.error('Error al crear herramienta:', error);
  alert('Error: ' + error.message);
}}
);
});
