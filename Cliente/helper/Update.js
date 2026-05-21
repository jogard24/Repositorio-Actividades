// export const updateTarea = async (url) => {
//     const solicitud = await fetch(`http://localhost:3000/${url}`, {
//         method: 'PATCH',
//         body: JSON.stringify({ tarea: actualizacionTarea }),
//         headers: { 'Content-type': 'application/json' }
//     });
//     if (!solicitud.ok) throw new Error("No se pudo actualizar en el servidor");
    
//     return await solicitud.json();
// }
import { baseUrl } from "@/helper/config.js"

export async function updateTarea(id, actualizacionTarea) {
    const solicitud = await fetch(`${baseUrl}/users/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({ tarea: actualizacionTarea }),
        headers: { 'Content-type': 'application/json' }
    });

    if (!solicitud.ok) throw new Error("No se pudo actualizar en el servidor");
    
    return await solicitud.json();
}