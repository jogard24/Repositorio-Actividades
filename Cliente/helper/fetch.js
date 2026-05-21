import { baseUrl } from "@/helper/config.js"

//peticion mostrar
export const request = async (url) => {
    const solicitud = await fetch(`${baseUrl}/${url}`);
    const data = await solicitud.json();
    return data;
};

