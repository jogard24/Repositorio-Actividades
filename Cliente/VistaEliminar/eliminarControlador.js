import { eliminar } from "./mostrarEliminar.js"
import { listarUsuario } from "../Peticiones/ListarUsuario.js"
import { agregarTareas } from "../Peticiones/MostrarTareas.js";
import { eliminarTareaPorId } from "../Peticiones/index.js"

export const eliminarControlador = () => {
 
    const editable = document.querySelector('div > div');
    editable.innerHTML = eliminar();
    
    listarUsuario();
    agregarTareas();

    const messageForm = document.querySelector('#messageForm');
    const eliminarTares = document.querySelector("#deleteForm");
    const actualizarTareas = document.querySelector("#updateForm");
    const Deleteid = document.querySelector("#Deleteid");

    function isValidInput(value) {

        return value.trim().length > 0;
        // TODO: Implementar validación
    }

    function comprobarEliminacion(a) {

    //se obtiene el valor de la eliminacion
    const UserDelete = Deleteid.value;

    let isValid = true;

    if (!isValidInput(UserDelete)) {
        Deleteid.classList.add("form__input--error");
        idDeleteError.textContent = "la descripcion no debe estar vacia"
        isValid = false;
    }

    else {
        isValid = true;
        Deleteid.classList.remove("form__input--error");
        idDeleteError.textContent = "";
    }

    return isValid
}

    async function eliminarTarea(event) {

    const validacionForm = comprobarEliminacion();
    console.log(validacionForm);


    if (validacionForm) {
        alert("los datos ingresados son validos")
    }
    else {
        alert("los datos ingresados no son permitidos")
        return
    }

    if (confirm(`¿Estás seguro de que quieres eliminar la tarea con ID ${Deleteid.value}?`)) {
        console.log("Datos Eliminaddos");
    }
    else {
        console.log("los datos no fueron eliminados");
        return;
    }

    const eliminar = await eliminarTareaPorId(Deleteid.value);

    if (eliminar) {
        alert("Se eliminaron los datos correctamente");

        const tareaVisual = document.querySelector(`.tarea${Deleteid.value}`);
        if (tareaVisual) {
            tareaVisual.remove(); // Esto quita el elemento del HTML sin recargar
        }

        Deleteid.value = "";

        totalMessages--;
    }

    else {
        alert("hubo un error en la eliminacion de los datos")
    }
}

deleteBtn.addEventListener("click", (evento) => {

    evento.preventDefault();
    eliminarTarea()
});

}
