import { BuscarNombre } from "./Peticiones/index.js"
/**
 * ============================================
 * EJERCICIO DE MANIPULACIÓN DEL DOM
 * ============================================
 * 
 * Objetivo: Aplicar conceptos del DOM para seleccionar elementos,
 * responder a eventos y crear nuevos elementos dinámicamente.
 * 
 * Autor: [Tu nombre aquí]
 * Fecha: [Fecha actual]
 * ============================================
 */




// ============================================
// 1. SELECCIÓN DE ELEMENTOS DEL DOM
// ============================================

/**
 * Seleccionamos los elementos del DOM que necesitamos manipular.
 * Usamos getElementById para obtener referencias a los elementos únicos.
 */

// Formulario
const messageForm = document.getElementById('messageForm');

// Campos de entrada
const userNameInput = document.getElementById('userName');
const userMessageInput = document.getElementById('userMessage');

// Botón de envío
const submitBtn = document.getElementById('submitBtn');

// Elementos para mostrar errores
const userNameError = document.getElementById('userNameError');
const userMessageError = document.getElementById('userMessageError');

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

function validateForm(a) {
    // TODO: Implementar validación completa del formulario
    // 1. Obtener los valores de los inputs usando .value
    // 2. Crear una variable para saber si el formulario es válido (inicialmente true)
    // 3. Validar el campo de nombre de usuario
    //    - Si no es válido, mostrar error y cambiar la variable a false
    //    - Si es válido, limpiar el error
    // 4. Validar el campo de mensaje
    //    - Si no es válido, mostrar error y cambiar la variable a false
    //    - Si es válido, limpiar el error
    // 5. Retornar si el formulario es válido o no
    
    const userName = userNameInput.value;
    const userMessage = userMessageInput.value;
    let isValid = true;
    
    console.log(typeof userName)

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

    if (!isValidInput(userMessage)) {
        userMessageInput.classList.add("form__input--error");
        userMessageError.textContent ="El Mensaje no es valido"
        isValid = false;
    } 
    
    else {
        isValid = true 
        userMessageInput.classList.remove("form__input--error");
        userMessageInput.textContent =""
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

/**
 * Obtiene las iniciales de un nombre
 * @param {string} name - Nombre completo
 * @returns {string} - Iniciales en mayúsculas
 */
function getInitials(name) {
    // TODO: Implementar función para obtener iniciales
    // Pista: 
    // 1. Separar el nombre por espacios usando split(' ')
    // 2. Tomar la primera letra de cada palabra
    // 3. Unirlas y convertirlas a mayúsculas
    // 4. Si solo hay una palabra, retornar las dos primeras letras
}

/**
 * Actualiza el contador de mensajes
 */
function updateMessageCount(totalMessages) {
    // TODO: Implementar actualización del contador
    // Pista: Usa template literals para crear el texto
    // Formato: "X mensaje(s)" o "X mensajes"

    
    messageCount.textContent = `${totalMessages} Mesaje/s`
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

/**
 * Crea un nuevo elemento de mensaje en el DOM
 * @param {string} userName - Nombre del usuario
 * @param {string} message - Contenido del mensaje
 */
function createMessageElement(userName, message) {
    // TODO: Implementar la creación de un nuevo mensaje
    
    // PASO 1: Crear el contenedor principal del mensaje
    const div = document.createElement("div");

    // Asignar la clase 'message-card'
    div.classList.add("message-card")
    
    const fecha = getCurrentTimestamp();

    // PASO 2: Crear la estructura HTML del mensaje
    // Puedes usar innerHTML con la siguiente estructura:
    
    div.innerHTML = `
        <div class="message-card__header">
            <div class="message-card__user">
                <div class="message-card__avatar">[INICIALES]</div>
                <span class="message-card__username">${userName}</span>
            </div>
            <span class="message-card__timestamp">${fecha}</span>
        </div>
        <div class="message-card__content">${message}</div> 
    `
    
    
    
    
    // PASO 3: Insertar el nuevo elemento en el contenedor de mensajes
    // Pista: messagesContainer.appendChild(nuevoElemento)

    messagesContainer.appendChild(div);

    // O usar insertBefore para agregarlo al principio
    
    // PASO 4: Incrementar el contador de mensajes
    
    totalMessages +=1

    // PASO 5: Actualizar el contador visual
    
    updateMessageCount(totalMessages)

    
    // PASO 6: Ocultar el estado vacío si está visible

    hideEmptyState();
}


// ============================================
// 4. MANEJO DE EVENTOS
// ============================================

/**
 * Maneja el evento de envío del formulario
 * @param {Event} event - Evento del formulario
 */

async function handleFormSubmit(event) {
    // TODO: Implementar el manejador del evento submit
    
    // PASO 1: Prevenir el comportamiento por defecto del formulario
    event.preventDefault();
    
    // PASO 2: Validar el formulario
    const formularioV = validateForm();
    
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
    
    
    
    // PASO 4: Crear el nuevo elemento de mensaje
    // Llamar a createMessageElement con los valores obtenidos
    createMessageElement(userNameInput.value, userMessageInput.value);
    
    // PASO 5: Limpiar el formulario
    // Pista: messageForm.reset()

    messageForm.reset();
    
    // PASO 6: Limpiar los errores
    
    // PASO 7: Opcional - Enfocar el primer campo para facilitar agregar otro mensaje
    // Pista: userNameInput.focus()
}

/**
 * Limpia los errores cuando el usuario empieza a escribir
 */
function handleInputChange() {
    // TODO: Implementar limpieza de errores al escribir
    // Esta función se ejecuta cuando el usuario escribe en un campo
    // Debe limpiar el error de ese campo específico
}


// ============================================
// 5. REGISTRO DE EVENTOS
// ============================================

/**
 * Aquí registramos todos los event listeners
 */

// TODO: Registrar el evento 'submit' en el formulario
messageForm.addEventListener("submit", handleFormSubmit);

// TODO: Registrar eventos 'input' en los campos para limpiar errores al escribir
// Pista: userNameInput.addEventListener('input', handleInputChange);
// Pista: userMessageInput.addEventListener('input', handleInputChange);


// ============================================
// 6. REFLEXIÓN Y DOCUMENTACIÓN
// ============================================

/**
 * PREGUNTAS DE REFLEXIÓN:
 * 
 * 1. ¿Qué elemento del DOM estás seleccionando?
 *    R: 
 * 
 * 2. ¿Qué evento provoca el cambio en la página?
 *    R: 
 * 
 * 3. ¿Qué nuevo elemento se crea?
 *    R: 
 * 
 * 4. ¿Dónde se inserta ese elemento dentro del DOM?
 *    R: 
 * 
 * 5. ¿Qué ocurre en la página cada vez que repites la acción?
 *    R: 
 */


// ============================================
// 7. INICIALIZACIÓN (OPCIONAL)
// ============================================

/**
 * Esta función se ejecuta cuando el DOM está completamente cargado
 */
document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ DOM completamente cargado');
    console.log('📝 Aplicación de registro de mensajes iniciada');
    
    // Aquí puedes agregar cualquier inicialización adicional
    // Por ejemplo, cargar mensajes guardados del localStorage
});


// ============================================
// 8. FUNCIONALIDADES ADICIONALES (BONUS)
// ============================================

/**
 * RETOS ADICIONALES OPCIONALES:
 * 
 * 1. Agregar un botón para eliminar mensajes individuales
 * 2. Implementar localStorage para persistir los mensajes
 * 3. Agregar un contador de caracteres en el textarea
 * 4. Implementar un botón para limpiar todos los mensajes
 * 5. Agregar diferentes colores de avatar según el nombre del usuario
 * 6. Permitir editar mensajes existentes
 * 7. Agregar emojis o reacciones a los mensajes
 * 8. Implementar búsqueda/filtrado de mensajes
 */
