import { actualizar } from "./mostrarActualizar.js"
import { updateTarea } from "../helper/index.js";
import { BuscarIdTarea, listarUsuario, agregarTareas } from "../Peticiones/index.js";

export const actualizarControlador = () => {
 
    const editable = document.querySelector('div > div');
    
    editable.innerHTML = actualizar();
    
    
    listarUsuario();
    agregarTareas();

    //Elementos principales para actualizar la tareas
    const Updateid = document.querySelector("#updateid");
    const ActualizarT = document.querySelector("#ActualizarT");

    //Funcion principal de actulizar tareas
    async function actualizarTarea (){
    
        const ValidacionTarea = await BuscarIdTarea(Updateid.value);
        console.log(ValidacionTarea);
        
    
        if (ValidacionTarea){
            
            alert("el id ingresado es valido")
        }
        else {
            alert("el id no esta asignado a una tarea");
            return
        }
    
        const respuesta =await updateTarea(Updateid.value, ActualizarT.value);
    
        if (respuesta){
            alert("Se actualizo la tarea");    
        }
        else{
            alert("no se actualizo la tarea")
        }
    }

    //Evento desencadenador
    updateBtn.addEventListener("click", (evento) => {
          
        actualizarTarea()
    });;
}