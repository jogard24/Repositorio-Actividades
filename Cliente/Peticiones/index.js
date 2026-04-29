import { request } from "../helper/index.js";

export const BuscarNombre = async (nombre) =>{

    const user = await request("users");
        // Se valida que el usuario este en la base de datos
        const usersExiste = user.find(u => String(u.name) === String(nombre));
        
        console.log(usersExiste);
        
        //Retornamo un valor booleano
        return usersExiste ? true : false;
}

export const obtenerTareasPorUsuario = async (idBusqueda) => {
    // JSON-Server filtra automáticamente usando esta URL
    const tareas = await request(`users?name=${idBusqueda}`);
    return tareas; 
};


export const BuscarIdTarea = async (idTarea) => {

    const id = await request("users");

    const existeTarea = id.find(u => String(u.id) === String(idTarea));
    
    return existeTarea ? true : false;
}