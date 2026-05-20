import { eliminar } from "./mostrarEliminar.js"
import { listarUsuario } from "../Peticiones/ListarUsuario.js"
import { agregarTareas } from "../Peticiones/MostrarTareas.js";

export const eliminarControlador = () => {
 
    const editable = document.querySelector('div > div');
    editable.innerHTML = eliminar();
    
    listarUsuario();
    agregarTareas();

}