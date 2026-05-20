import { agregar } from "./mostrarAgregar.js"
import { listarUsuario } from "../Peticiones/ListarUsuario.js"

export const agregarControlador = () => {
 
    const editable = document.querySelector('div > div');

    listarUsuario();

    
}