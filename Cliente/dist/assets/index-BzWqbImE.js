(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`192.168.1.7`,t=async(t,n)=>await(await fetch(`http://${e}:3000/${t}`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(n)})).json(),n=async t=>{let n=await fetch(`http://${e}:3000/${t}`,{method:`DELETE`,headers:{"Content-Type":`application/json`}});if(!n.ok)throw Error(`No se pudo eliminar el recurso`);return await n.json()},r=async t=>await(await fetch(`http://${e}:3000/${t}`)).json();async function i(t,n){let r=await fetch(`http://${e}:3000/users/${t}`,{method:`PATCH`,body:JSON.stringify({tarea:n}),headers:{"Content-type":`application/json`}});if(!r.ok)throw Error(`No se pudo actualizar en el servidor`);return await r.json()}var a=async e=>!!(await r(`users`)).find(t=>String(t.id)===String(e)),o=async(e,n,r)=>await t(`users`,{name:e,tarea:n,body:r,active:!1}),s=async e=>await n(`users/${e}`),c=async e=>{let t=(await r(`users`)).find(t=>String(t.name)===String(e));return console.log(t),!!t},ee=async e=>await r(`users?name=${e}`),l=e=>e.map(({id:e,name:t,tarea:n,body:r})=>`
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
  `).join(` `),u=async()=>{let e=document.querySelector(`div > div`);e.innerHTML=l(await r(`users`))},d=()=>`
    <div></div>
  `,f=()=>`
        <div></div>    
  `,p=()=>`
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
  `,m=()=>{let e=document.querySelector(`div > div`);e.innerHTML=p()},h=()=>`
        <div></div>    
  `,g=()=>`
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
  `,_=()=>{let e=document.querySelector(`div > div`);e.innerHTML=g()},v=()=>`
        <div></div>    
  `,y=()=>`
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
  `,b=[{ruta:`#/Tareas`,vista:d,controlador:u},{ruta:`#/AgregarT`,vista:f,controlador:m},{ruta:`#/EliminarT`,vista:h,controlador:_},{ruta:`#/ActualizarT`,vista:v,controlador:()=>{let e=document.querySelector(`div > div`);e.innerHTML=y()}}],x=async e=>{let t=window.location.hash,n=b.find(e=>e.ruta==t);e.innerHTML=n.vista(),await n.controlador()},S=document.querySelector(`.contenidoP`),C=async()=>{await x(S)};window.addEventListener(`hashchange`,C),document.addEventListener(`DOMContentLoaded`,C()),S.querySelector(`#messageForm`),S.querySelector(`#deleteForm`),S.querySelector(`#updateForm`);var w=S.querySelector(`#userName`),T=S.querySelector(`#userMessage`),E=S.querySelector(`#UserDescripcion`),D=S.querySelector(`.form__group`),O=S.querySelector(`#Deleteid`),k=S.querySelector(`#aparecerDelete`),A=S.querySelector(`#updateid`),j=S.querySelector(`#aparecerUpdate`),M=S.querySelector(`#ActualizarT`);S.querySelector(`#submitBtnid`);var N=S.querySelector(`#submitBtn`),P=S.querySelector(`#deleteBtn`),F=S.querySelector(`#updateBtn`),I=S.querySelector(`#resetBtn`),L=S.querySelector(`#userNameError`),R=S.querySelector(`#userMessageError`),z=S.querySelector(`#userDescripcionError`),B=S.querySelector(`#idDeleteError`);S.querySelector(`#idUpdateError`);var V=S.querySelector(`#messagesContainer`),H=S.querySelector(`#emptyState`),te=S.querySelector(`#messageCount`),U=S.querySelector(`#UsuariosTableBody`),W=0;function G(e){return e.trim().length>0}function K(e){let t=T.value,n=E.value,r=!0;return G(t)?(r=!0,T.classList.remove(`form__input--error`),T.textContent=``):(T.classList.add(`form__input--error`),R.textContent=`El Titulo no es valido`,r=!1),G(n)?(r=!0,E.classList.remove(`form__input--error`),z.textContent=``):(E.classList.add(`form__input--error`),z.textContent=`la descripcion no debe estar vacia`,r=!1),r}function q(e){let t=O.value,n=!0;return G(t)?(n=!0,O.classList.remove(`form__input--error`),B.textContent=``):(O.classList.add(`form__input--error`),B.textContent=`la descripcion no debe estar vacia`,n=!1),n}function J(e){let t=!0,n=w.value;return G(n)?(t=!0,w.classList.remove(`form__input--error`),L.textContent=``):(w.classList.add(`form__input--error`),L.textContent=`El nombre de usuario no es valido`,t=!1),t}function Y(){return new Date().toLocaleDateString(`es-ES`,{year:`numeric`,month:`long`,day:`numeric`,hour:`2-digit`,minute:`2-digit`})}function X(e){te.textContent=`${e} tarea/s`}function Z(){H.classList.add(`hidden`)}var Q=document.getElementById(`userNameList`);function ne(e){Q.innerHTML=``;let t=new Set;e.forEach(e=>{if(!t.has(e.name)){t.add(e.name);let n=document.createElement(`option`);n.value=e.name,Q.appendChild(n)}})}S.addEventListener(`input`,e=>{e.target&&e.target.id===`userName`&&w.addEventListener(`input`,()=>{let e=w.value.toLowerCase();Array.from(U.querySelectorAll(`tr`)).forEach(t=>{t.children[1].textContent.toLowerCase().includes(e)?t.style.display=``:t.style.display=`none`})})});function re(e){U.innerHTML=``;let t=new Set;e.forEach(e=>{if(!t.has(e.name)){t.add(e.name);let n=document.createElement(`tr`);n.innerHTML=`
                <td>${e.id}</td>
                <td>${e.name}</td>
            `,U.appendChild(n)}})}async function ie(){try{let e=await r(`users`);console.log(`Datos recibidos:`,e),re(e),ne(e)}catch(e){console.error(`Error completo:`,e),alert(`Error al cargar los users: `+e.message)}}async function ae(e){V.innerHTML=``;let t=Y();(await ee(e)).forEach(e=>{let n=document.createElement(`div`);n.classList.add(`message-card`),n.classList.add(`tarea${e.id}`),n.innerHTML=`
            <div class="message-card__header">
                <div class="message-card__user">
                    <div class="message-card__avatar">${e.id}</div>
                    <span class="message-card__username">${e.name}</span>
                </div>
                <span class="message-card__timestamp">${t}</span>

                </div>
                <div class="message-card__content">${e.tarea}</div>
                <div class="message-card__content">${e.body}</div> 
        `,V.appendChild(n),W+=1,X(W)}),Z()}async function oe(){let e=Y(),t=document.getElementById(`userName`),n=document.getElementById(`userMessage`),r=document.getElementById(`UserDescripcion`),i=document.createElement(`div`);i.classList.add(`message-card`),i.classList.add(`tarea`),i.innerHTML=`
            <div class="message-card__header">
                <div class="message-card__user">
                    <div class="message-card__avatar">Nueva Tarea</div>
                    <span class="message-card__username">${t.value}</span>
                </div>
                <span class="message-card__timestamp">${e}</span>
            </div>
            <div class="message-card__content">${n.value}</div>
            <div class="message-card__content">${r.value}</div> 
        `,V.appendChild(i),W+=1,X(W),Z()}async function $(){if(!J()){alert(`Los datos ingresados no son validos`);return}if(await c(w.value))alert(`el usuario existe`);else{alert(`El usuario no existe`);return}D?.classList.add(`form__id`),k?.classList.add(`form__id`),j?.classList.add(`form__id`),N?.classList.remove(`btn--secundary`),N?.classList.add(`btn--primary`),F?.classList.add(`btn--primary`),F?.classList.remove(`btn--secundary`),P?.classList.remove(`btn--secundary`),P?.classList.add(`btn--primary`),I?.classList.remove(`btn--secundary`),I?.classList.add(`btn--primary`),w.setAttribute(`disabled`,`true`),console.log(w),console.log(T),ae(w.value)}async function se(e){if(K())alert(`los datos ingresados son validos`);else{alert(`los datos ingresados no son permitidos`);return}await o(w.value,T.value,E.value)?alert(`se añadieron los datos correctamente`):alert(`no se añadieron los datos correctamente`),oe()}async function ce(e){let t=await a(A.value);if(console.log(t),t)alert(`el id ingresado es valido`);else{alert(`el id no esta asignado a una tarea`);return}await i(A.value,M.value)?alert(`Se actualizo la tarea`):alert(`no se actualizo la tarea`)}async function le(e){let t=q();if(console.log(t),t)alert(`los datos ingresados son validos`);else{alert(`los datos ingresados no son permitidos`);return}if(confirm(`¿Estás seguro de que quieres eliminar la tarea con ID ${O.value}?`))console.log(`Datos Eliminaddos`);else{console.log(`los datos no fueron eliminados`);return}if(await s(O.value)){alert(`Se eliminaron los datos correctamente`);let e=document.querySelector(`.tarea${O.value}`);e&&e.remove(),O.value=``,W--}else alert(`hubo un error en la eliminacion de los datos`)}S.addEventListener(`click`,e=>{e.target&&e.target.id===`submitBtnid`&&(e.preventDefault(),$())}),S.addEventListener(`submit`,e=>{e.target&&e.target.id===`messageForm`&&(e.preventDefault(),se())}),S.addEventListener(`click`,e=>{e.target&&e.target.id===`resetBtn`&&(e.preventDefault(),e.reload())}),S.addEventListener(`click`,e=>{e.target&&e.target.id===`updateBtn`&&(e.preventDefault(),ce())}),S.addEventListener(`click`,e=>{e.target&&e.target.id===`deleteBtn`&&(e.preventDefault(),le())}),document.addEventListener(`DOMContentLoaded`,function(){console.log(`✅ DOM completamente cargado`),console.log(`📝 Aplicación de registro de mensajes iniciada`),ie()});