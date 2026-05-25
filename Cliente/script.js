//Las importaciones de las funciones con el json-server
import { request, updateTarea } from "@/helper/index.js"
import { BuscarNombre, obtenerTareasPorUsuario, BuscarIdTarea, agregarNuevaTarea, eliminarTareaPorId } from "@/Peticiones/index.js"
import { enrrutador } from "@/router/router.js";

// ============================================
// 1. SELECCIÓN DE ELEMENTOS DEL DOM
// ============================================

/**
 * Seleccionamos los elementos del DOM que necesitamos manipular.
 * Usamos getElementById para obtener referencias a los elementos únicos.
 */
const cambio = document.querySelector(".contenidoP");
const textoP = document.querySelector("#textoPrincipal");

const arrancar = async () => {
    console.log("Cambios");
    
    await enrrutador(cambio);

    textoP.innerHTML = "Selecciona la funciona ejecutar =D";
}


//Se buscan los elementos dentro del contenedor principal

// Formularios
const messageForm = cambio.querySelector('#messageForm');
const eliminarTares = cambio.querySelector("#deleteForm")
const actualizarTareas = cambio.querySelector("#updateForm")

// Campos de entrada
// const userNameInput = cambio.querySelector('#userName');
// const userMessageInput = cambio.querySelector('#userMessage');
const userDesripcionInput = cambio.querySelector('#UserDescripcion');
// const conjuntoDatos = cambio.querySelector(".form__group");

const Deleteid = cambio.querySelector("#Deleteid");
// const aparecerDelete = cambio.querySelector("#aparecerDelete");

// const Updateid = cambio.querySelector("#updateid");
// const AparecerUpdate = cambio.querySelector("#aparecerUpdate");
// const ActualizarT = cambio.querySelector("#ActualizarT");

// // Botónes de envío
// // const submitBtn = cambio.querySelector('#submitBtnid');
// const submitBtnTareas = cambio.querySelector('#submitBtn');
// const deleteBtn = cambio.querySelector("#deleteBtn");
// const updateBtn = cambio.querySelector("#updateBtn");
// const resetBtn = cambio.querySelector("#resetBtn")

// Elementos para mostrar errores
const userNameError = cambio.querySelector('#userNameError');
const userMessageError = cambio.querySelector('#userMessageError');
const userDescripcionError = cambio.querySelector(`#userDescripcionError`);
const idDeleteError = cambio.querySelector("#idDeleteError");
const idUpdateError = cambio.querySelector("#idUpdateError");

// Contenedor donde se mostrarán los mensajes
const messagesContainer = cambio.querySelector('#messagesContainer');

// // Estado vacío (mensaje que se muestra cuando no hay mensajes)
// const emptyState = cambio.querySelector('#emptyState');

// Contador de mensajes
const messageCount = cambio.querySelector('#messageCount');

// Cuerpo de la tabla para mostrar los usuarios
// const UsuariosTableBody = cambio.querySelector('#UsuariosTableBody');

//Para poder ambiar entre los formularios de la pagina


// Variable para llevar el conteo de mensajes
// let totalMessages = 0;

window.addEventListener("hashchange", arrancar);

//la parte de arrancar debe ir como esta arriba
document.addEventListener("DOMContentLoaded", arrancar);

// ============================================
// 2. FUNCIONES AUXILIARES
// ============================================

//Funcion que valida si los campos estan vacios
function isValidInput(value) {

    return value.trim().length > 0;
    // TODO: Implementar validación
}


function showError(errorElement, message) {
    errorElement.textContent = message;
    // TODO: Implementar función para mostrar error
    // Pista: asigna el mensaje al textContent del elemento
}


//Limpia el mensaje de error de un elemento específico

function clearError(errorElement) {
    errorElement.textContent = "";
    // TODO: Implementar función para limpiar errores
}


//  Validavion de los campos titulo de tarea y descripcion de tarea
function validateForm(a) {

    const userMessage = userMessageInput.value;
    const UserDescripcion = userDesripcionInput.value;

    let isValid = true;


    if (!isValidInput(userMessage)) {
        userMessageInput.classList.add("form__input--error");
        userMessageError.textContent = "El Titulo no es valido"
        isValid = false;
    }

    else {
        isValid = true
        userMessageInput.classList.remove("form__input--error");
        userMessageInput.textContent = ""
    }

    if (!isValidInput(UserDescripcion)) {
        userDesripcionInput.classList.add("form__input--error");
        userDescripcionError.textContent = "la descripcion no debe estar vacia"
        isValid = false;
    }

    else {
        isValid = true
        userDesripcionInput.classList.remove("form__input--error");
        userDescripcionError.textContent = ""
    }

    return isValid;

}

//validar que el campo de eliminar no este vacio
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


// // Funcion que valida que el usuario este registrado
// function validateId(a) {

//     let isValid = true;
//     const userName = userNameInput.value;

//     if (!isValidInput(userName)) {
//         userNameInput.classList.add("form__input--error");
//         userNameError.textContent = "El nombre de usuario no es valido"
//         isValid = false;
//     }

//     else {
//         isValid = true
//         userNameInput.classList.remove("form__input--error");
//         userNameError.textContent = ""
//     }

//     return isValid;

// }



// // Agarra el tiempo actual
// function getCurrentTimestamp() {
//     const now = new Date();
//     const options = {
//         year: 'numeric',
//         month: 'long',
//         day: 'numeric',
//         hour: '2-digit',
//         minute: '2-digit'
//     };
//     return now.toLocaleDateString('es-ES', options);
// }



// function updateMessageCount(totalMessages) {
//     // TODO: Implementar actualización del contador
//     // Pista: Usa template literals para crear el texto
//     // Formato: "X mensaje(s)" o "X mensajes"


//     messageCount.textContent = `${totalMessages} tarea/s`
// }

/**
 * Oculta el estado vacío (mensaje cuando no hay mensajes)
 */
// function hideEmptyState() {
//     // TODO: Implementar función para ocultar el estado vacío
//     // Pista: Agrega la clase 'hidden' al elemento emptyState

//     emptyState.classList.add("hidden")
// }

/**
 * Muestra el estado vacío (mensaje cuando no hay mensajes)
 */
function showEmptyState() {
    emptyState.remove("hidden")
}


// ============================================
// 3. CREACIÓN DE ELEMENTOS
// ============================================

// 


// function renderizarDatalist(users) {
//     userNameList.innerHTML = '';
//     const nombresAgregados = new Set();
//     users.forEach(user => {
//         if (!nombresAgregados.has(user.name)) {
//             nombresAgregados.add(user.name);
//             const option = document.createElement('option');
//             option.value = user.name;
//             userNameList.appendChild(option);
//         }
//     });
// }

// // Para que me muestre los usuarios a los que estoy buscando
// cambio.addEventListener("input", (evento) => {
//     // Verificamos si el origen del evento fue nuestro input específico
//     if (evento.target && evento.target.id === "userName") {
        
//         userNameInput.addEventListener('input', () => {
//             const query = userNameInput.value.toLowerCase();
        
//             Array.from(UsuariosTableBody.querySelectorAll('tr')).forEach(tr => {
//                 const nombre = tr.children[1].textContent.toLowerCase();
//                 if (nombre.includes(query)) {
//                     tr.style.display = ''; // mostrar
//                 } else {
//                     tr.style.display = 'none'; // ocultar
//                 }
//             });
//         });
//     }
// });




// // Esta funciones es para cargar los usuarios
// function renderizarTabla(users) {
//     UsuariosTableBody.innerHTML = ''; // Se limpia las tablas antes de limpiarla

//     // Crear un Set para trackear nombres ya agregados y evitar duplicados
//     const nombresAgregados = new Set();

//     users.forEach(user => {
//         // Solo agregar si el nombre no ha sido agregado antes
//         if (!nombresAgregados.has(user.name)) {
//             nombresAgregados.add(user.name);

//             const fila = document.createElement('tr')
//             fila.innerHTML = `
//                 <td>${user.id}</td>
//                 <td>${user.name}</td>
//             `;
//             UsuariosTableBody.appendChild(fila);
//         }
//     })
// }



// funcion que me permite mostrar las tarjetas de los usuarios
// async function createMessageElement(userName) {
//     // TODO: Implementar la creación de un nuevo mensaje

//     messagesContainer.innerHTML = "";
//     // PASO 1: Crear el contenedor principal del mensaje

//     const fecha = getCurrentTimestamp();

//     const datosUsuario = await obtenerTareasPorUsuario(userName);
//     // PASO 2: Crear la estructura HTML del mensaje
//     // Puedes usar innerHTML con la siguiente estructura:

//     datosUsuario.forEach(datos => {
//         const div = document.createElement("div");

//         // Asignar la clase 'message-card'
//         div.classList.add("message-card");
//         div.classList.add(`tarea${datos.id}`)

//         div.innerHTML = `
//             <div class="message-card__header">
//                 <div class="message-card__user">
//                     <div class="message-card__avatar">${datos.id}</div>
//                     <span class="message-card__username">${datos.name}</span>
//                 </div>
//                 <span class="message-card__timestamp">${fecha}</span>

//                 </div>
//                 <div class="message-card__content">${datos.tarea}</div>
//                 <div class="message-card__content">${datos.body}</div> 
//         `

//         messagesContainer.appendChild(div);

//         totalMessages += 1

//         updateMessageCount(totalMessages)
//     })

//     hideEmptyState();
// }

async function createTarjetas() {

    // PASO 1: Crear el contenedor principal del mensaje

    const fecha = getCurrentTimestamp();

    const userNameInput = document.getElementById('userName');
    const userMessageInput = document.getElementById('userMessage');
    const userDesripcionInput = document.getElementById('UserDescripcion');

    // PASO 2: Crear la estructura HTML del mensaje
    // Puedes usar innerHTML con la siguiente estructura:    
    const div = document.createElement("div");

    // Asignar la clase 'message-card'
    div.classList.add("message-card");
    div.classList.add(`tarea`);

    div.innerHTML = `
            <div class="message-card__header">
                <div class="message-card__user">
                    <div class="message-card__avatar">Nueva Tarea</div>
                    <span class="message-card__username">${userNameInput.value}</span>
                </div>
                <span class="message-card__timestamp">${fecha}</span>
            </div>
            <div class="message-card__content">${userMessageInput.value}</div>
            <div class="message-card__content">${userDesripcionInput.value}</div> 
        `

    messagesContainer.appendChild(div);

    totalMessages += 1

    updateMessageCount(totalMessages)

    hideEmptyState();
}


// ============================================
// 4. MANEJO DE EVENTOS
// ============================================

// async function handleFormSubmit() {
//     // TODO: Implementar el manejador del evento submit

//     // PASO 2: Validar el formulario
//     const formularioV = validateId();

//     if (!formularioV) {
//         alert("Los datos ingresados no son validos")
//         return
//     }

//     // PASO 3: Obtener los valores de los campos
//     const confirmacionUser = await BuscarNombre(userNameInput.value);

//     if (!confirmacionUser) {
//         alert("El usuario no existe")
//         return
//     }
//     else {
//         alert("el usuario existe");
//     }

//     //mostrar los campos habilitados
//     conjuntoDatos?.classList.add("form__id");
//     aparecerDelete?.classList.add("form__id");
//     AparecerUpdate?.classList.add("form__id");
    
//     //Mostar boton subir tareas
//     submitBtnTareas?.classList.remove("btn--secundary");
//     submitBtnTareas?.classList.add("btn--primary");

//     updateBtn?.classList.add("btn--primary");
//     updateBtn?.classList.remove("btn--secundary");

//     //Mostar boton eliminar tareas
//     deleteBtn?.classList.remove("btn--secundary");
//     deleteBtn?.classList.add("btn--primary");

//     //mostrar boton resetear formulario
//     resetBtn?.classList.remove("btn--secundary");
//     resetBtn?.classList.add("btn--primary");

//     // Para inabilitar el campo nombre
//     userNameInput.setAttribute("disabled", "true");
//     console.log(userNameInput);
//     console.log(userMessageInput);
    
    
//     createMessageElement(userNameInput.value);
// }

async function AgregarTarjetas(event) {


    const validacionForm = validateForm();

    if (validacionForm) {
        alert("los datos ingresados son validos")
    }
    else {
        alert("los datos ingresados no son permitidos")
        return
    }

    const resp = await agregarNuevaTarea(userNameInput.value, userMessageInput.value, userDesripcionInput.value);

    if (resp) {
        alert("se añadieron los datos correctamente")
    }
    else {
        alert("no se añadieron los datos correctamente")
    }

    createTarjetas();

}

// async function actualizarTarea (event){


//     const ValidacionTarea = await BuscarIdTarea(Updateid.value);
//     console.log(ValidacionTarea);
    

//     if (ValidacionTarea){
        
//         alert("el id ingresado es valido")
//     }
//     else {
//         alert("el id no esta asignado a una tarea");
//         return
//     }

//     const respuesta =await updateTarea(Updateid.value, ActualizarT.value);

//     if (respuesta){
//         alert("Se actualizo la tarea");    
//     }
//     else{
//         alert("no se actualizo la tarea")
//     }
// }

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




// messageForm.reset();    


// ============================================
// 5. REGISTRO DE EVENTOS
// ============================================



cambio.addEventListener("submit", (evento) => {
    // Verificamos si el origen del evento fue nuestro input específico
    if (evento.target && evento.target.id === "messageForm") {

        evento.preventDefault();
        AgregarTarjetas();
    }
});

cambio.addEventListener("click", (evento) => {
    // Verificamos si el origen del evento fue nuestro input específico
    if (evento.target && evento.target.id === "resetBtn") {
     
        evento.preventDefault();
        evento.reload();
    }
});



cambio.addEventListener("click", (evento) => {

    if(evento.target && evento.target.id === "deleteBtn"){

        evento.preventDefault();
        eliminarTarea()
    }

});





/**
 * Esta función se ejecuta cuando el DOM está completamente cargado
 */
document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ DOM completamente cargado');
    console.log('📝 Aplicación de registro de mensajes iniciada');
    
    // Aquí puedes agregar cualquier inicialización adicional
    // Por ejemplo, cargar mensajes guardados del localStorage
});
