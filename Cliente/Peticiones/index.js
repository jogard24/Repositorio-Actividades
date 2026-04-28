import { request } from "../helper/fetch.js";

export const BuscarNombre = async (nombre) =>{

    const user = await request("users");
    
        // Se valida que el usuario este en la base de datos
        const usersExiste = user.find(u => u.name.toLowerCase() === nombre.toLowerCase());
        
        //Retornamo un valor booleano
        return usersExiste ? true:false;
}

export const obtenerTareasPorUsuario = async (idBusqueda) => {
    // JSON-Server filtra automáticamente usando esta URL
    const tareas = await request(`users?name=${idBusqueda}`);
    return tareas; 
};
