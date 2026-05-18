import { ip } from "./IP.js"
//peticion mostrar
export const request = async (url) => {
    const solicitud = await fetch(`http://${ip}:3000/${url}`);
    const data = await solicitud.json();
    return data;
};




