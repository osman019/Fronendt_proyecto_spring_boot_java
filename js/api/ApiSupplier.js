const API_URL = "http://localhost:8080/api/Supplier";

// Listar todos los proveedores
export const getSuppliers = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Error al obtener los proveedores");
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

// Obtener proveedor por ID
export const getSupplierById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) throw new Error("Proveedor no encontrado");
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

// Crear nuevo proveedor
export const createSupplier = async (supplier) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(supplier),
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Error al crear el proveedor");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

// Actualizar proveedor
export const updateSupplier = async (id, supplier) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(supplier),
    });
    if (!response.ok) throw new Error("Error al actualizar el proveedor");
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

// Eliminar proveedor
export const deleteSupplier = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Error al eliminar el proveedor");
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};
