import { agregar } from "./mostrarAgregar.js"
import { listarUsuario } from "../Peticiones/ListarUsuario.js"
import { agregarTareas } from "../Peticiones/MostrarTareas.js";

export const agregarControlador = () => {
 
    const editable = document.querySelector('div > div');
    const userNameList = document.getElementById('userNameList');
    
    editable.innerHTML = agregar();
    
    listarUsuario();
    agregarTareas();
    
}