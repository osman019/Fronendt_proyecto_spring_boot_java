const API_URL = "http://localhost:8080/customers";

// Crear un cliente (POST)
export const createCustomer = async (customer) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(customer),
    });
    if (!response.ok) throw new Error("Error al crear el cliente");
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

// Obtener todos los clientes (GET)
export const getCustomers = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Error al obtener los clientes");
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

// Obtener cliente por ID (GET)
export const getCustomerById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) throw new Error("Cliente no encontrado");
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

// Actualizar cliente (PUT)
export const updateCustomer = async (id, customer) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(customer),
    });
    if (!response.ok) throw new Error("Error al actualizar el cliente");
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

// Eliminar cliente (DELETE)
export const deleteCustomer = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Error al eliminar el cliente");
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};
