import { request } from "../helper/index.js";

export function listarUsuario(){


    function renderizarDatalist(users) {
        userNameList.innerHTML = '';
        const nombresAgregados = new Set();
        users.forEach(user => {
            if (!nombresAgregados.has(user.name)) {
                nombresAgregados.add(user.name);
                const option = document.createElement('option');
                option.value = user.name;
                userNameList.appendChild(option);
            }
        }); 
    }

// Para que me muestre los usuarios a los que estoy buscando
    document.addEventListener("input", (evento) => {
    // Verificamos si el origen del evento fue nuestro input específico
    if (evento.target && evento.target.id === "userName") {
        
        userNameInput.addEventListener('input', () => {
            const query = userNameInput.value.toLowerCase();
        
            Array.from(UsuariosTableBody.querySelectorAll('tr')).forEach(tr => {
                const nombre = tr.children[1].textContent.toLowerCase();
                if (nombre.includes(query)) {
                    tr.style.display = ''; // mostrar
                } else {
                    tr.style.display = 'none'; // ocultar
                }
            });
        });
    }
    });




// Esta funciones es para cargar los usuarios
    function renderizarTabla(users) {
    UsuariosTableBody.innerHTML = ''; // Se limpia las tablas antes de limpiarla

    // Crear un Set para trackear nombres ya agregados y evitar duplicados
    const nombresAgregados = new Set();

    users.forEach(user => {
        // Solo agregar si el nombre no ha sido agregado antes
        if (!nombresAgregados.has(user.name)) {
            nombresAgregados.add(user.name);

            const fila = document.createElement('tr')
            fila.innerHTML = `
                <td>${user.id}</td>
                <td>${user.name}</td>
            `;
            UsuariosTableBody.appendChild(fila);
        }
    })
    }

    async function cargarusers() {
    try {
        const users = await request('users')
        console.log('Datos recibidos:', users);
        renderizarTabla(users);
        renderizarDatalist(users);

    } catch (error) {
        console.error('Error completo:', error);
        alert('Error al cargar los users: ' + error.message)
    }

    }

    
    cargarusers();
}