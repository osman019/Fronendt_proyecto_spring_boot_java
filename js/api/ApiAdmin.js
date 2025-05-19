

const API_URL = "http://localhost:8080/api/Admin";

// Obtener todos los administradores
export const getAdmins = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Error al obtener los administradores");
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

// Obtener un administrador por ID
export const getAdminById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) throw new Error("Administrador no encontrado");
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

// Crear un nuevo administrador
export const createAdmin = async (admin) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(admin),
    });
    if (!response.ok) throw new Error("Error al crear el administrador");
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

// Actualizar un administrador
export const updateAdmin = async (id, admin) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(admin),
    });
    if (!response.ok) throw new Error("Error al actualizar el administrador");
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

// Eliminar un administrador
export const deleteAdmin = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Error al eliminar el administrador");
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};
