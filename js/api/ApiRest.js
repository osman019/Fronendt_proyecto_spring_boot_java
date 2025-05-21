// js/api/ApiRest.js
import { URL_API, myHeaders } from "./enviroment.js";

export const saveData = async (data, endpoint = "") => {
  const response = await fetch(`${URL_API}${endpoint ? `/${endpoint}` : ''}`, {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify(data)
  });
  return response;
};
