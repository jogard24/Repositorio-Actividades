
//peticion mostrar
export const request = async (url) => {
    const solicitud = await fetch(`http://localhost:3000/${url}`);
    const data = await solicitud.json();
    return data;
};




