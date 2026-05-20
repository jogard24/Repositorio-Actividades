import { BuscarNombre, obtenerTareasPorUsuario } from "./index.js";

export function agregarTareas(){
    
    //Campo ingresar nombre
    const userNameInput = document.querySelector('#userName');

    //Boton buscar nombre
    
    //Campos de enttrada del proyecto
    const conjuntoDatos = document.querySelector(".form__group");
    const AparecerUpdate = document.querySelector("#aparecerUpdate");
    const aparecerDelete = document.querySelector("#aparecerDelete");
    const userMessageInput = document.querySelector('#userMessage');
    
    // Botónes de envío
    const submitBtn = document.querySelector('#submitBtnid');
    const submitBtnTareas = document.querySelector('#submitBtn');
    const deleteBtn = document.querySelector("#deleteBtn");
    const updateBtn = document.querySelector("#updateBtn");
    const resetBtn = document.querySelector("#resetBtn");

    // Estado vacío (mensaje que se muestra cuando no hay mensajes)
    const emptyState = document.querySelector('#emptyState');

    //Total mensajes
    let totalMessages = 0;

    // Agarra el tiempo actual
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

    function hideEmptyState() {
    // TODO: Implementar función para ocultar el estado vacío
    // Pista: Agrega la clase 'hidden' al elemento emptyState

        emptyState.classList.add("hidden")
    }
    
    // Funcion que valida que el usuario este registrado
    function validateId(a) {
    
        let isValid = true;
        const userName = userNameInput.value;

        function isValidInput(value) {

            return value.trim().length > 0;
            // TODO: Implementar validación
        }
    
        if (!isValidInput(userName)) {
            userNameInput.classList.add("form__input--error");
            userNameError.textContent = "El nombre de usuario no es valido"
            isValid = false;
        }
    
        else {
            isValid = true
            userNameInput.classList.remove("form__input--error");
            userNameError.textContent = ""
        }
    
        return isValid;
    
    }
    

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
    
            totalMessages += 1
    
            updateMessageCount(totalMessages)
        })
    
        hideEmptyState();
    }

    async function handleFormSubmit() {
        // TODO: Implementar el manejador del evento submit
    
        // PASO 2: Validar el formulario
        const formularioV = validateId();
    
        if (!formularioV) {
            alert("Los datos ingresados no son validos")
            return
        }
    
        // PASO 3: Obtener los valores de los campos
        const confirmacionUser = await BuscarNombre(userNameInput.value);
    
        if (!confirmacionUser) {
            alert("El usuario no existe")
            return
        }
        else {
            alert("el usuario existe");
        }
    
        //mostrar los campos habilitados
        conjuntoDatos?.classList.add("form__id");
        aparecerDelete?.classList.add("form__id");
        AparecerUpdate?.classList.add("form__id");
        
        //Mostar boton subir tareas
        submitBtnTareas?.classList.remove("btn--secundary");
        submitBtnTareas?.classList.add("btn--primary");
    
        updateBtn?.classList.add("btn--primary");
        updateBtn?.classList.remove("btn--secundary");
    
        //Mostar boton eliminar tareas
        deleteBtn?.classList.remove("btn--secundary");
        deleteBtn?.classList.add("btn--primary");
    
        //mostrar boton resetear formulario
        resetBtn?.classList.remove("btn--secundary");
        resetBtn?.classList.add("btn--primary");
    
        // Para inabilitar el campo nombre
        userNameInput.setAttribute("disabled", "true");
        console.log(userNameInput);
        console.log(userMessageInput);
        
        
        createMessageElement(userNameInput.value);
    }

    
    submitBtn.addEventListener("click", (evento) => {
        handleFormSubmit()
    });

    resetBtn.addEventListener("click", (evento) => {
        evento.reload();
    }); 


}
