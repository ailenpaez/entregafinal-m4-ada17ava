import { BASE_URL } from "../constants";

async function getAllData(ruta: string) {
  const response = await fetch(BASE_URL + ruta);
  const data = await response.json();
  return data
}

export { getAllData };

