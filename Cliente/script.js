import { BuscarNombre, obtenerTareasPorUsuario } from "./Peticiones/index.js"
import { agregarNuevaTarea } from "./Peticiones/AgregarT.js"
import { eliminarTareaPorId } from "./Peticiones/BorrarTarea.js"

// ============================================
// 1. SELECCIÓN DE ELEMENTOS DEL DOM
// ============================================

/**
 * Seleccionamos los elementos del DOM que necesitamos manipular.
 * Usamos getElementById para obtener referencias a los elementos únicos.
 */

// Formulario
const messageForm = document.getElementById('messageForm');
const eliminarTares = document.querySelector("#deleteForm")

// Campos de entrada
const userNameInput = document.getElementById('userName');
const userMessageInput = document.getElementById('userMessage');
const userDesripcionInput = document.getElementById('UserDescripcion');
const conjuntoDatos = document.querySelector(".form__group");
const Deleteid = document.querySelector("#Deleteid");
const aparecerDelete = document.querySelector("#aparecerDelete")


// Botón de envío
const submitBtn = document.getElementById('submitBtnid');
const submitBtnTareas = document.getElementById('submitBtn');
const deleteBtn = document.querySelector("#deleteBtn");

// Elementos para mostrar errores
const userNameError = document.getElementById('userNameError');
const userMessageError = document.getElementById('userMessageError');
const userDescripcionError = document.getElementById(`userDescripcionError`);
const idDeleteError = document.querySelector("#idDeleteError");

// Contenedor donde se mostrarán los mensajes
const messagesContainer = document.getElementById('messagesContainer');

// Estado vacío (mensaje que se muestra cuando no hay mensajes)
const emptyState = document.getElementById('emptyState');

// Contador de mensajes
const messageCount = document.getElementById('messageCount');

// Variable para llevar el conteo de mensajes
let totalMessages = 0;


// ============================================
// 2. FUNCIONES AUXILIARES
// ============================================

/**
 * Valida que un campo no esté vacío ni contenga solo espacios en blanco
 * @param {string} value - El valor a validar
 * @returns {boolean} - true si es válido, false si no lo es
 */

function isValidInput(value) {

    return value.trim().length > 0;
    // TODO: Implementar validación
}

/**
 * Muestra un mensaje de error en un elemento específico
 * @param {HTMLElement} errorElement - Elemento donde mostrar el error
 * @param {string} message - Mensaje de error a mostrar
 */
function showError(errorElement, message) {
    errorElement.textContent = message;

    // TODO: Implementar función para mostrar error
    // Pista: asigna el mensaje al textContent del elemento
}

/**
 * Limpia el mensaje de error de un elemento específico
 * @param {HTMLElement} errorElement - Elemento del que limpiar el error
 */
function clearError(errorElement) {
    errorElement.textContent = "";
    // TODO: Implementar función para limpiar errores
}

/**
 * Valida todos los campos del formulario
 * @returns {boolean} - true si todos los campos son válidos, false si alguno no lo es
 */

//  Validavion de los campos titulo de tarea y descripcion de tarea
function validateForm(a) {
    
    const userMessage = userMessageInput.value;
    const UserDescripcion = userDesripcionInput.value;
    const UserDelete = Deleteid.value;

    let isValid = true;
    

    if (!isValidInput(userMessage)) {
        userMessageInput.classList.add("form__input--error");
        userMessageError.textContent ="El Titulo no es valido"
        isValid = false;
    } 
    
    else {
        isValid = true 
        userMessageInput.classList.remove("form__input--error");
        userMessageInput.textContent =""
    }

    if (!isValidInput(UserDescripcion)) {
        userDesripcionInput.classList.add("form__input--error");
        userDescripcionError.textContent ="la descripcion no debe estar vacia"
        isValid = false;
    } 
    
    else {
        isValid = true 
        userDesripcionInput.classList.remove("form__input--error");
        userDescripcionError.textContent =""
    }
  
    return isValid;
    
}

//validar que el campo de eliminar no este vacio
function comprobarEliminacion(a){

    //se obtiene el valor de la eliminacion
    const UserDelete = Deleteid.value;

    let isValid = true;

    if (!isValidInput(UserDelete)) {
        Deleteid.classList.add("form__input--error");
        idDeleteError.textContent ="la descripcion no debe estar vacia"
        isValid = false;
    } 
    
    else {
        isValid = true;
        Deleteid.classList.remove("form__input--error");
        idDeleteError.textContent ="";
    }
      
    return isValid
}


// Funcion que valida que el usuario este registrado
function validateId (a){

    let isValid = true;
    const userName = userNameInput.value;

    if (!isValidInput(userName)) {
        userNameInput.classList.add("form__input--error");
        userNameError.textContent ="El nombre de usuario no es valido"
        isValid = false;
    } 
    
    else {
        isValid = true 
        userNameInput.classList.remove("form__input--error");
        userNameError.textContent =""
    }

    return isValid;

}



/**
 * Obtiene la fecha y hora actual formateada
 * @returns {string} - Fecha y hora en formato legible
 */
function getCurrentTimestamp() {
    const now = new Date();
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    return now.toLocaleDateString('es-ES', options);
}



function updateMessageCount(totalMessages) {
    // TODO: Implementar actualización del contador
    // Pista: Usa template literals para crear el texto
    // Formato: "X mensaje(s)" o "X mensajes"

    
    messageCount.textContent = `${totalMessages} tarea/s`
}

/**
 * Oculta el estado vacío (mensaje cuando no hay mensajes)
 */
function hideEmptyState() {
    // TODO: Implementar función para ocultar el estado vacío
    // Pista: Agrega la clase 'hidden' al elemento emptyState

    emptyState.classList.add("hidden")
}

/**
 * Muestra el estado vacío (mensaje cuando no hay mensajes)
 */
function showEmptyState() {
    emptyState.remove("hidden")
}


// ============================================
// 3. CREACIÓN DE ELEMENTOS
// ============================================


// funcion que me permite mostrar las tarjetas de los usuarios
async function createMessageElement(userName) {
    // TODO: Implementar la creación de un nuevo mensaje
    
    messagesContainer.innerHTML = "";
    // PASO 1: Crear el contenedor principal del mensaje
    
    const fecha = getCurrentTimestamp();
    
    const datosUsuario = await obtenerTareasPorUsuario(userName);
    // PASO 2: Crear la estructura HTML del mensaje
    // Puedes usar innerHTML con la siguiente estructura:
    
    datosUsuario.forEach(datos => {    
        const div = document.createElement("div");
    
        // Asignar la clase 'message-card'
        div.classList.add("message-card");
        div.classList.add(`tarea${datos.id}`)
        
        div.innerHTML = `
            <div class="message-card__header">
                <div class="message-card__user">
                    <div class="message-card__avatar">${datos.id}</div>
                    <span class="message-card__username">${datos.name}</span>
                </div>
                <span class="message-card__timestamp">${fecha}</span>

                </div>
                <div class="message-card__content">${datos.tarea}</div>
                <div class="message-card__content">${datos.body}</div> 
        `

        messagesContainer.appendChild(div);

        totalMessages +=1

        updateMessageCount(totalMessages)
    })

    hideEmptyState();
}

async function createTarjetas(Datos) {
    
    // PASO 1: Crear el contenedor principal del mensaje
    
    const fecha = getCurrentTimestamp();
    
    const userNameInput = document.getElementById('userName');
    const userMessageInput = document.getElementById('userMessage');
    const userDesripcionInput = document.getElementById('UserDescripcion');

    // PASO 2: Crear la estructura HTML del mensaje
    // Puedes usar innerHTML con la siguiente estructura:    
        const div = document.createElement("div");
    
        // Asignar la clase 'message-card'
        div.classList.add("message-card")
        
        div.innerHTML = `
            <div class="message-card__header">
                <div class="message-card__user">
                    <div class="message-card__avatar">T</div>
                    <span class="message-card__username">${userNameInput.value}</span>
                </div>
                <span class="message-card__timestamp">${fecha}</span>
            </div>
            <div class="message-card__content">${userMessageInput.value}</div>
            <div class="message-card__content">${userDesripcionInput.value}</div> 
        `

        messagesContainer.appendChild(div);

        totalMessages +=1

        updateMessageCount(totalMessages)

    hideEmptyState();
}


// ============================================
// 4. MANEJO DE EVENTOS
// ============================================

async function handleFormSubmit(event) {
    // TODO: Implementar el manejador del evento submit
    
    // PASO 1: Prevenir el comportamiento por defecto del formulario
    event.preventDefault();
    
    // PASO 2: Validar el formulario
    const formularioV = validateId();
    
    if (!formularioV){
        alert("Los datos ingresados no son validos")
        return
    }

    // PASO 3: Obtener los valores de los campos
     
    const confirmacionUser = await BuscarNombre(userNameInput.value);

    if (!confirmacionUser){
        alert("El usuario no existe")
        return
    }
    else{
        alert("el usuario existe");
    }
    
    //mostrar los campos habilitados
    conjuntoDatos.classList.add("form__id");
    aparecerDelete.classList.add("form__id");   
    submitBtnTareas.classList.remove("btn--secundary");
    submitBtnTareas.classList.add("btn--primary");
    deleteBtn.classList.remove("btn--secundary");
    deleteBtn.classList.add("btn--primary");   
    createMessageElement(userNameInput.value, userMessageInput.value);
    
}

async function AgregarTarjetas (event){

    event.preventDefault();

    const validacionForm = validateForm();

    if (validacionForm){
       alert("los datos ingresados son validos")
    }
    else{
        alert("los datos ingresados no son permitidos")
        return
    }

    const resp = await agregarNuevaTarea(userNameInput.value, userMessageInput.value, userDesripcionInput.value);
    
    if (resp){
        alert("se añadieron los datos correctamente")
    }
    else{
        alert("no se añadieron los datos correctamente")
    }

    
}


async function eliminarTarea (event){

    event.preventDefault();

    const validacionForm = comprobarEliminacion();
    console.log(validacionForm);


    if (validacionForm){
       alert("los datos ingresados son validos")
    }
    else{
        alert("los datos ingresados no son permitidos")
        return
    }

     if (!confirm(`¿Estás seguro de que quieres eliminar la tarea con ID ${Deleteid.value}?`)) return;
     const eliminar = await eliminarTareaPorId(Deleteid.value);

    if (eliminar){
        alert("Se eliminaron los datos correctamente");

        const tareaVisual = document.querySelector(`.tarea${Deleteid.value}`);
        if (tareaVisual) {
            tareaVisual.remove(); // Esto quita el elemento del HTML sin recargar
        }
        
        inputIdEliminar.value = "";

        totalMessages -=1
    }

    else{
        alert("hubo un error en la eliminacion de los datos")
    }


}

// messageForm.reset();    


// ============================================
// 5. REGISTRO DE EVENTOS
// ============================================


submitBtn.addEventListener("click", handleFormSubmit);
messageForm.addEventListener("submit", AgregarTarjetas);
deleteBtn.addEventListener("click", eliminarTarea)

// TODO: Registrar eventos 'input' en los campos para limpiar errores al escribir
// Pista: userNameInput.addEventListener('input', handleInputChange);
// Pista: userMessageInput.addEventListener('input', handleInputChange);



/
/**
 * Esta función se ejecuta cuando el DOM está completamente cargado
 */
document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ DOM completamente cargado');
    console.log('📝 Aplicación de registro de mensajes iniciada');
    
    // Aquí puedes agregar cualquier inicialización adicional
    // Por ejemplo, cargar mensajes guardados del localStorage
});
