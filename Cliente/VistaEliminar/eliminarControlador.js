import { eliminar } from "./mostrarEliminar.js"

export const eliminarControlador = () => {
 
    const editable = document.querySelector('div > div');
    editable.innerHTML = eliminar();
    
}