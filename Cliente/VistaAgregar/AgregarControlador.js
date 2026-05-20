import { agregar } from "./mostrarAgregar.js"

export const agregarControlador = () => {
 
    const editable = document.querySelector('div > div');
    editable.innerHTML = agregar();
    
}