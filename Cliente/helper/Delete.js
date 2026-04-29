//Destruir tareas
export const destroy = async (url) => {
    const solicitud = await fetch(`http://localhost:3000/${url}`, {
        method: 'DELETE', // Especificamos que queremos borrar
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (!solicitud.ok) {
        throw new Error("No se pudo eliminar el recurso");
    }

    return await solicitud.json();
};