import { request } from "@/helper/index.js";

export const obtenerTareasPorUsuario = async (idBusqueda) => {
    // JSON-Server filtra automáticamente usando esta URL
    const tareas = await request(`users?name=${idBusqueda}`);
    return tareas; 
};