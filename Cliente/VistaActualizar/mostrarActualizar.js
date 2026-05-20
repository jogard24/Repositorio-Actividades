export const actualizar = () => {
  return `
    <!-- Se realiza una seccion para poder mostrar los usuarios Registrado -->
            <!-- Formulario de entrada -->
        <section class="form-section">
            <div class="card">
                <h2 class="card__title">Nueva Tarea</h2>
                <div class="form__index">
                    <label for="userName" class="form__label">
                        Nombre de usuario
                    </label>
                    <input 
                    type="text" 
                    id="userName" 
                    class="form__input" 
                    placeholder="Ingresa tu nombre"
                    aria-required="true"
                    >
                    <datalist id="userNameList"></datalist>
                    <span class="form__error" id="userNameError"></span>

                    <button class="btn btn--primary" id="submitBtnid">
                        <span class="btn__text">Buscar nombre</span>
                        <span class="btn__icon">➤</span>
                    </button>
                </div>

                <div id="cambioForm">

                </div>
                <!-- Agregar tareas -->
                <form id="updateForm" action="" class="form">
                    <div id="aparecerUpdate" class="form__group">
                        <label for="updateid" class="form__label">
                            Ingrese id para actualizar:
                        </label>
                        <input 
                            type="text" 
                            id="updateid" 
                            class="form__input" 
                            placeholder="Ingrese el id de la tarea existente que va a modificar" 
                            aria-required="true"
                        >

                        <label for="userMessage" class="form__label">
                            Ingrese los cambios:
                        </label>

                        <textarea 
                            id="ActualizarT" 
                            class="form__input form__textarea" 
                            placeholder="Escribe la descripcion de la tarea aquí..."
                            rows="4"
                            aria-required="true"
                        ></textarea>
                    </div>

                    <span class="form__error" id="idUpdateError"></span>

                    <button class="btn btn--secundary" id="updateBtn">
                        <span class="btn__text">Actualizar tarea</span>
                        <span class="btn__icon">➤</span>
                    </button>

                    <button type="submit" class="btn btn--secundary" id="resetBtn">
                        <span class="btn__text">Recargar Formulario</span>
                        <span class="btn__icon">➤</span>
                    </button>
                </form>
            </div>
        </section>
        <section class="container_usuarios">
            <h1 class="container_title">Listado de Usuarios</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>User</th>
                    </tr>
                </thead>
                <tbody id="UsuariosTableBody">
                    <!-- Las filas de tareas se agregarán aquí dinámicamente -->
                </tbody>
            </table>
        </section>
        <!-- Área de mensajes -->
        <section class="messages-section">
            <div class="messages-header">
                <h2 class="messages-header__title">Tareas Subidas
                </h2>
                <span class="messages-header__count" id="messageCount">0 tareas</span>
            </div>
            
            <div id="messagesContainer" class="messages-container">
                <!-- Los mensajes se agregarán aquí dinámicamente -->
                <div class="messages-empty" id="emptyState">
                    <svg class="messages-empty__icon" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                    <p class="messages-empty__text">Aún no hay tareas</p>
                    <p class="messages-empty__subtext">Completa el formulario para agregar tu primera tarea</p>
                </div>
            </div>
        </section>

        <!-- Footer informativo -->
        <footer class="footer">
            <p class="footer__text">Ejercicio de manipulación del DOM | SENA - Desarrollo Web</p>
        </footer>
  `;
}