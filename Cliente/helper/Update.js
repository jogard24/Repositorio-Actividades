export const updateTarea = async (url) => {
    const solicitud = await fetch(`http://localhost:3000/${url}`, {
        method: 'PATCH',
        headers: { 'Content-type': 'application/json', 

        },
        body: JSON.stringify(url)
    });

    if (!solicitud.ok) throw new Error("No se pudo actualizar en el servidor");
    
    return await solicitud.json();
}