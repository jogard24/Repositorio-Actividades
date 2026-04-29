import { crearTarea } from "../helper/index.js";

export const agregarNuevaTarea = async (nombreUser, tarea, tareaDescrib) => {

    const nuevaTarea = {
        name: nombreUser,
        tarea: tarea,
        body: tareaDescrib,
        active: false
    };

    // Llamamos al helper
    const respuesta = await crearTarea("users", nuevaTarea);
    
    // Retornamos la respuesta procesada
    return respuesta;
};