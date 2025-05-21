const API_URL = "http://localhost:8080/api/ReportAdmin";

// Listar todos los reportes
export const getReportsAdmin = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Error al obtener reportes");
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

// Obtener un reporte por ID
export const getReportAdminById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) throw new Error("Reporte no encontrado");
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

// Crear un nuevo reporte
export const createReportAdmin = async (reportAdminData) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reportAdminData),
    });
    if (!response.ok) throw new Error("Error al crear reporte");
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

// Actualizar un reporte por ID
export const updateReportAdmin = async (id, reportAdminData) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reportAdminData),
    });
    if (!response.ok) throw new Error("Error al actualizar reporte");
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

// Eliminar un reporte por ID
export const deleteReportAdmin = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Error al eliminar reporte");
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};
