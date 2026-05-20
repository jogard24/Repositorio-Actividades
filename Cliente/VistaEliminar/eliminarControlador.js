import { eliminar } from "./mostrarEliminar.js"
import { listarUsuario } from "../Peticiones/ListarUsuario.js"

export const eliminarControlador = () => {
 
    const editable = document.querySelector('div > div');
    listarUsuario();

    
}