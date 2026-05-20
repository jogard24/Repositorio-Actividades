import { actualizar } from "./mostrarActualizar.js"
import { listarUsuario } from "../Peticiones/ListarUsuario.js"

export const actualizarControlador = () => {
 
    const editable = document.querySelector('div > div');
    
    const userNameList = document.getElementById('userNameList');
    listarUsuario();

    editable.innerHTML = actualizar();
    
}