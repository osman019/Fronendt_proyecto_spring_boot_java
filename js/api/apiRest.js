import { URL_API, myHeaders } from "../enviroment.js";

const getAllData = async (endPoint) => {
    try {
        const respuesta = await fetch(`${URL_API}/${endPoint}`);
        if (respuesta.status === 200) {
            const datos = await respuesta.json();
            return datos;  // <-- Retornar los datos aquí
        } else if (respuesta.status === 401) {
            console.log('La url no es correcta');
        } else if (respuesta.status === 404) {
            console.log('El contacto no existe');
        } else {
            console.log('Se presentó un error en la petición. Consulte al Administrador');
        } 
    } catch (error) {
        console.log(error);
    }
}

const findById = async (endPoint, id) => {
    try {
        const respuesta = await fetch(`${URL_API}/${endPoint}/${id}`);
        if (respuesta.status === 200) {
            const datos = await respuesta.json();
            return datos; // <--- ESTA LÍNEA FALTABA
        } else if (respuesta.status === 401) {
            console.log('La url no es correcta');
        } else if (respuesta.status === 404) {
            console.log('El país no existe');
        } else {
            console.log('Se presentó un error en la petición, consulte al Administrador');
        }
    } catch (error) {
        console.log(error);
    }
};

const postData = async (datos,endPoint) => {
    try {
        return await fetch(`${URL_API}/${endPoint}`, {
            method: "POST",
            headers: myHeaders,
            body: JSON.stringify(datos)
        });
    } catch (error) {
        console.error('Error en la solicitud POST:', error.message);
    }
}
const updateData = async (datos, id, endPoint) => {
    try {
      return await fetch(`${URL_API}/${endPoint}/${id}`, {
        method: "PUT", // <--- CAMBIADO A PUT
        headers: myHeaders,
        body: JSON.stringify(datos)
      });
    } catch (error) {
      console.error('Error en la solicitud PUT:', error.message);
    }
  };
  
const deleteData = async (id,endPoint) =>{

    try {
        return await fetch(`${URL_API}/${endPoint}/${id}`, {
            method: "DELETE",
            headers: myHeaders,
        });
    } catch (error) {
        console.error('Error en la solicitud POST:', error.message);
    }

}
export {
    getAllData as findAllData,
    findById as findById,
    postData as saveData,
    updateData as updateData,
    deleteData as deleteData
};