(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`10.5.225.109`,t=async(t,n)=>await(await fetch(`http://${e}:3000/${t}`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(n)})).json(),n=async t=>{let n=await fetch(`http://${e}:3000/${t}`,{method:`DELETE`,headers:{"Content-Type":`application/json`}});if(!n.ok)throw Error(`No se pudo eliminar el recurso`);return await n.json()},r=async t=>await(await fetch(`http://${e}:3000/${t}`)).json();async function i(t,n){let r=await fetch(`http://${e}:3000/users/${t}`,{method:`PATCH`,body:JSON.stringify({tarea:n}),headers:{"Content-type":`application/json`}});if(!r.ok)throw Error(`No se pudo actualizar en el servidor`);return await r.json()}var a=async e=>!!(await r(`users`)).find(t=>String(t.id)===String(e)),o=async(e,n,r)=>await t(`users`,{name:e,tarea:n,body:r,active:!1}),s=async e=>await n(`users/${e}`),c=async e=>{let t=(await r(`users`)).find(t=>String(t.name)===String(e));return console.log(t),!!t},l=async e=>await r(`users?name=${e}`),u=e=>e.map(({id:e,name:t,tarea:n,body:r})=>`
  <div class="message">
  <div class="message-card__header">
        <div class="message-card__user">
          <div class="message-card__avatar">${e}</div>
          <span class="message-card__username">${t}</span>
          </div>
          <span class="message-card__timestamp">nada</span>

        </div>
        <div class="message-card__content">${n}</div>
    <div class="message-card__content">${r}</div>
  </div>
  </div>
  `).join(` `),d=async()=>{let e=document.querySelector(`div > div`);e.innerHTML=u(await r(`users`))},f=()=>`
    <div></div>
  `,p=()=>`
        <div></div>    
  `,m=()=>`
    <!-- Se realiza una seccion para poder mostrar los usuarios Registrado -->
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
                <form id="messageForm" class="form" novalidate>

                    <div class="form__group">
                        <label for="userMessage" class="form__label">
                            Titulo de la tarea:
                        </label>
                        <input 
                            id="userMessage" 
                            class="form__input" 
                            placeholder="Escribe el titulo de la tarea aquí..."
                            type = "text"
                            rows="4"
                            aria-required="true"
                        ></input>

                        <span class="form__error" id="userMessageError"></span>

                        <label for="userMessage" class="form__label">
                            Descripcion de la tarea:
                        </label>

                        <textarea 
                            id="UserDescripcion" 
                            class="form__input form__textarea" 
                            placeholder="Escribe la descripcion de la tarea aquí..."
                            rows="4"
                            aria-required="true"
                        ></textarea>

                        <span class="form__error" id="userDescripcionError"></span>
                    </div>
                    
                    <button type="submit" class="btn btn--secundary" id="submitBtn">
                        <span class="btn__text">Agregar Tarea</span>
                        <span class="btn__icon">➤</span>
                    </button>

                    <button type="submit" class="btn btn--secundary" id="resetBtn">
                        <span class="btn__text">Recargar Formulario</span>
                        <span class="btn__icon">➤</span>
                    </button>
                </form>
            </div>
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
  `,h=()=>{let e=document.querySelector(`div > div`);e.innerHTML=m()},g=()=>`
        <div></div>    
  `,_=()=>`
    <!-- Se realiza una seccion para poder mostrar los usuarios Registrado -->
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

                <!-- eliminar tareas -->
                <form id="deleteForm" action="" class="form">
                    <div id="aparecerDelete" class="form__group">

                        <label for="userMessage" class="form__label">
                            Ingrese el id de la tarea a eliminar:
                        </label>

                        <input
                            type="text" 
                            id="Deleteid" 
                            class="form__input" 
                            placeholder="Ingrese el id.."
                            aria-required="true"
                        ></input>
                    </div>
                    
                    <span class="form__error" id="idDeleteError"></span>
                    <button class="btn btn--secundary" id="deleteBtn">
                        <span class="btn__text">Eliminar Tarea</span>
                        <span class="btn__icon">➤</span>
                    </button>
                    

                    <button type="submit" class="btn btn--secundary" id="resetBtn">
                        <span class="btn__text">Recargar Formulario</span>
                        <span class="btn__icon">➤</span>
                    </button>
                </form>
            </div>
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
  `,v=()=>{let e=document.querySelector(`div > div`);e.innerHTML=_()},y=()=>`
        <div></div>    
  `,b=()=>`
    <!-- Se realiza una seccion para poder mostrar los usuarios Registrado -->
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
  `,x=[{ruta:`#/Tareas`,vista:f,controlador:d},{ruta:`#/AgregarT`,vista:p,controlador:h},{ruta:`#/EliminarT`,vista:g,controlador:v},{ruta:`#/ActualizarT`,vista:y,controlador:()=>{let e=document.querySelector(`div > div`);e.innerHTML=b()}}],S=async e=>{let t=window.location.hash,n=x.find(e=>e.ruta==t);e.innerHTML=n.vista(),await n.controlador()},C={usuarioActual:``,camposHabilitados:!1,totalMessages:0},w=document.querySelector(`.contenidoP`),T={};function E(){T={messageForm:w.querySelector(`#messageForm`),eliminarTares:w.querySelector(`#deleteForm`),actualizarTareas:w.querySelector(`#updateForm`),userNameInput:w.querySelector(`#userName`),userMessageInput:w.querySelector(`#userMessage`),userDesripcionInput:w.querySelector(`#UserDescripcion`),conjuntoDatos:w.querySelector(`.form__group`),Deleteid:w.querySelector(`#Deleteid`),aparecerDelete:w.querySelector(`#aparecerDelete`),Updateid:w.querySelector(`#updateid`),AparecerUpdate:w.querySelector(`#aparecerUpdate`),ActualizarT:w.querySelector(`#ActualizarT`),submitBtnTareas:w.querySelector(`#submitBtn`),deleteBtn:w.querySelector(`#deleteBtn`),updateBtn:w.querySelector(`#updateBtn`),resetBtn:w.querySelector(`#resetBtn`),userNameError:w.querySelector(`#userNameError`),userMessageError:w.querySelector(`#userMessageError`),userDescripcionError:w.querySelector(`#userDescripcionError`),idDeleteError:w.querySelector(`#idDeleteError`),idUpdateError:w.querySelector(`#idUpdateError`),messagesContainer:w.querySelector(`#messagesContainer`),emptyState:w.querySelector(`#emptyState`),messageCount:w.querySelector(`#messageCount`),UsuariosTableBody:w.querySelector(`#UsuariosTableBody`)}}var D=async()=>{await S(w),E(),T.UsuariosTableBody&&R(),C.camposHabilitados&&(V(),T.userNameInput&&(T.userNameInput.value=C.usuarioActual,T.userNameInput.setAttribute(`disabled`,`true`),z(C.usuarioActual)))};window.addEventListener(`hashchange`,D),document.addEventListener(`DOMContentLoaded`,D);function O(e){return e&&e.trim().length>0}function k(){let e=T.userMessageInput?.value||``,t=T.userDesripcionInput?.value||``,n=!0;return O(e)?T.userMessageInput?.classList.remove(`form__input--error`):(T.userMessageInput?.classList.add(`form__input--error`),T.userMessageError&&(T.userMessageError.textContent=`El Titulo no es valido`),n=!1),O(t)?T.userDesripcionInput?.classList.remove(`form__input--error`):(T.userDesripcionInput?.classList.add(`form__input--error`),T.userDescripcionError&&(T.userDescripcionError.textContent=`la descripcion no debe estar vacia`),n=!1),n}function A(){let e=T.Deleteid?.value||``,t=!0;return O(e)?(T.Deleteid?.classList.remove(`form__input--error`),T.idDeleteError&&(T.idDeleteError.textContent=``)):(T.Deleteid?.classList.add(`form__input--error`),T.idDeleteError&&(T.idDeleteError.textContent=`la descripcion no debe estar vacia`),t=!1),t}function j(){let e=!0;return O(T.userNameInput?.value||``)?(T.userNameInput?.classList.remove(`form__input--error`),T.userNameError&&(T.userNameError.textContent=``)):(T.userNameInput?.classList.add(`form__input--error`),T.userNameError&&(T.userNameError.textContent=`El nombre de usuario no es valido`),e=!1),e}function M(){return new Date().toLocaleDateString(`es-ES`,{year:`numeric`,month:`long`,day:`numeric`,hour:`2-digit`,minute:`2-digit`})}function N(e){T.messageCount&&(T.messageCount.textContent=`${e} tarea/s`)}function P(){T.emptyState?.classList.add(`hidden`)}var F=document.getElementById(`userNameList`);function I(e){if(!F)return;F.innerHTML=``;let t=new Set;e.forEach(e=>{if(!t.has(e.name)){t.add(e.name);let n=document.createElement(`option`);n.value=e.name,F.appendChild(n)}})}function L(e){if(!T.UsuariosTableBody)return;T.UsuariosTableBody.innerHTML=``;let t=new Set;e.forEach(e=>{if(!t.has(e.name)){t.add(e.name);let n=document.createElement(`tr`);n.innerHTML=`<td>${e.id}</td><td>${e.name}</td>`,T.UsuariosTableBody.appendChild(n)}})}async function R(){try{let e=await r(`users`);L(e),I(e)}catch(e){console.error(`Error completo:`,e),alert(`Error al cargar los users: `+e.message)}}async function z(e){if(!T.messagesContainer)return;T.messagesContainer.innerHTML=``;let t=M();(await l(e)).forEach(e=>{let n=document.createElement(`div`);n.classList.add(`message-card`,`tarea${e.id}`),n.innerHTML=`
            <div class="message-card__header">
                <div class="message-card__user">
                    <div class="message-card__avatar">${e.id}</div>
                    <span class="message-card__username">${e.name}</span>
                </div>
                <span class="message-card__timestamp">${t}</span>
            </div>
            <div class="message-card__content">${e.tarea}</div>
            <div class="message-card__content">${e.body}</div> 
        `,T.messagesContainer.appendChild(n),C.totalMessages+=1,N(C.totalMessages)}),P()}async function B(){if(!T.messagesContainer)return;let e=M(),t=document.createElement(`div`);t.classList.add(`message-card`,`tarea`),t.innerHTML=`
        <div class="message-card__header">
            <div class="message-card__user">
                <div class="message-card__avatar">Nueva Tarea</div>
                <span class="message-card__username">${T.userNameInput?.value||C.usuarioActual}</span>
            </div>
            <span class="message-card__timestamp">${e}</span>
        </div>
        <div class="message-card__content">${T.userMessageInput?.value||``}</div>
        <div class="message-card__content">${T.userDesripcionInput?.value||``}</div> 
    `,T.messagesContainer.appendChild(t),C.totalMessages+=1,N(C.totalMessages),P()}function V(){T.conjuntoDatos?.classList.add(`form__id`),T.aparecerDelete?.classList.add(`form__id`),T.AparecerUpdate?.classList.add(`form__id`),T.submitBtnTareas?.classList.remove(`btn--secundary`),T.submitBtnTareas?.classList.add(`btn--primary`),T.updateBtn?.classList.add(`btn--primary`),T.updateBtn?.classList.remove(`btn--secundary`),T.deleteBtn?.classList.remove(`btn--secundary`),T.deleteBtn?.classList.add(`btn--primary`),T.resetBtn?.classList.remove(`btn--secundary`),T.resetBtn?.classList.add(`btn--primary`)}async function H(){if(!j()){alert(`Los datos ingresados no son validos`);return}if(await c(T.userNameInput.value))alert(`el usuario existe`),C.usuarioActual=T.userNameInput.value,C.camposHabilitados=!0;else{alert(`El usuario no existe`);return}V(),T.userNameInput?.setAttribute(`disabled`,`true`),z(C.usuarioActual)}async function U(){if(!k()){alert(`los datos ingresados no son permitidos`);return}await o(C.usuarioActual,T.userMessageInput.value,T.userDesripcionInput.value)?(alert(`se añadieron los datos correctamente`),B()):alert(`no se añadieron los datos correctamente`)}async function W(){if(await a(T.Updateid.value))alert(`el id ingresado es valido`);else{alert(`el id no esta asignado a una tarea`);return}await i(T.Updateid.value,T.ActualizarT.value)?(alert(`Se actualizo la tarea`),z(C.usuarioActual)):alert(`no se actualizo la tarea`)}async function G(){if(!A()){alert(`los datos ingresados no son permitidos`);return}if(confirm(`¿Estás seguro de que quieres eliminar la tarea con ID ${T.Deleteid.value}?`))console.log(`Datos Eliminaddos`);else{console.log(`los datos no fueron eliminados`);return}if(await s(T.Deleteid.value)){alert(`Se eliminaron los datos correctamente`);let e=w.querySelector(`.tarea${T.Deleteid.value}`);e&&e.remove(),T.Deleteid&&(T.Deleteid.value=``),C.totalMessages--,N(C.totalMessages)}else alert(`hubo un error en la eliminacion de los datos`)}w.addEventListener(`click`,e=>{let t=e.target?.id;t===`submitBtnid`?(e.preventDefault(),H()):t===`resetBtn`?(e.preventDefault(),C.usuarioActual=``,C.camposHabilitados=!1,C.totalMessages=0,D()):t===`updateBtn`?(e.preventDefault(),W()):t===`deleteBtn`&&(e.preventDefault(),G())}),w.addEventListener(`submit`,e=>{e.target&&e.target.id===`messageForm`&&(e.preventDefault(),U())}),w.addEventListener(`input`,e=>{if(e.target&&e.target.id===`userName`&&T.UsuariosTableBody){let t=e.target.value.toLowerCase();Array.from(T.UsuariosTableBody.querySelectorAll(`tr`)).forEach(e=>{let n=e.children[1].textContent.toLowerCase();e.style.display=n.includes(t)?``:`none`})}}),document.addEventListener(`DOMContentLoaded`,function(){console.log(`✅ DOM completamente cargado`),console.log(`📝 Aplicación de registro de mensajes iniciada`)});