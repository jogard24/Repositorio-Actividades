import { request } from "@/helper/index.js";

export const BuscarIdTarea = async (idTarea) => {

    const id = await request("users");

    const existeTarea = id.find(u => String(u.id) === String(idTarea));
    
    return existeTarea ? true : false;
}