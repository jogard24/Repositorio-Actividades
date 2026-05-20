import { actualizar } from "./mostrarActualizar.js"
import { listarUsuario } from "../Peticiones/ListarUsuario.js"
import { agregarTareas } from "../Peticiones/MostrarTareas.js";

export const actualizarControlador = () => {
 
    const editable = document.querySelector('div > div');
    
    editable.innerHTML = actualizar();
    
    
    listarUsuario();
    agregarTareas();
    
    
}