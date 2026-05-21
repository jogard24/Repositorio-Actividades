import { request } from "@/helper/index.js";

export const BuscarNombre = async (nombre) =>{

    const user = await request("users");
        // Se valida que el usuario este en la base de datos
        const usersExiste = user.find(u => String(u.name) === String(nombre));
        
        console.log(usersExiste);
        
        //Retornamo un valor booleano
        return usersExiste ? true : false;
}
