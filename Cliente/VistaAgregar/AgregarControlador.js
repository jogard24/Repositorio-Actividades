import { agregar } from "./mostrarAgregar.js"
import { listarUsuario } from "../Peticiones/ListarUsuario.js"

export const agregarControlador = () => {
 
    const editable = document.querySelector('div > div');
    const userNameList = document.getElementById('userNameList');
    
    listarUsuario();
    
    editable.innerHTML = agregar();
}