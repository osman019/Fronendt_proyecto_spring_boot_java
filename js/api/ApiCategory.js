const API_URL = "http://localhost:8080/categories";

// Obtener categorías paginadas (page y size opcionales)
export const getCategories = async (page = 0, size = 5) => {
  try {
    const response = await fetch(`${API_URL}?page=${page}&size=${size}`);
    if (!response.ok) throw new Error("Error al obtener categorías");
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

// Obtener categoría por ID
export const getCategoryById = async (categoryId) => {
  try {
    const response = await fetch(`${API_URL}/${categoryId}`);
    if (!response.ok) throw new Error("Categoría no encontrada");
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

// Crear categoría
export const createCategory = async (categoryData) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(categoryData),
    });
    if (!response.ok) throw new Error("Error al crear categoría");
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

// Actualizar categoría por ID
export const updateCategory = async (categoryId, categoryData) => {
  try {
    const response = await fetch(`${API_URL}/${categoryId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(categoryData),
    });
    if (!response.ok) throw new Error("Error al actualizar categoría");
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

// Deshabilitar categoría por ID
export const disableCategory = async (categoryId) => {
  try {
    const response = await fetch(`${API_URL}/${categoryId}/disabled`, {
      method: "PUT",
    });
    if (!response.ok) throw new Error("Error al deshabilitar categoría");
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};
