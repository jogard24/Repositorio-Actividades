//Crear tareas
export const crearTarea = async (link, nuevaTarea) => {
    const solicitud = await fetch(`http://localhost:3000/${link}`, {
        method: 'POST', // Especificamos que vamos a enviar datos
        headers: {
            'Content-Type': 'application/json' // Le decimos al servidor que enviamos un JSON
        },
        body: JSON.stringify(nuevaTarea) // Convertimos el objeto JS a texto JSON
    });
    const data = await solicitud.json();
    return data;
};