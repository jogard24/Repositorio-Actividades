import { actualizar } from "./mostrarActualizar.js"

export const actualizarControlador = () => {
 
    const editable = document.querySelector('div > div');
    editable.innerHTML = actualizar();
    
}