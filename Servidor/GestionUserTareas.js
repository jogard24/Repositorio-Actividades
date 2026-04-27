import { BuscarNombre } from "../Servidor/Peticiones/index.js";
import { request } from "./helper/fetch.js";

// ==========================
// ESTADO
// ==========================
let usuarioTabla = null;
let tareasTabla = [];

// ==========================
// DOM
// ==========================
const inputBuscar = document.getElementById("buscarUsuarioTabla");
const btnBuscar = document.getElementById("btnBuscarTabla");

const infoUsuario = document.getElementById("infoUsuarioTabla");
const mensaje = document.getElementById("mensajeTabla");

const inputTarea = document.getElementById("tareaInputTabla");
const btnAgregar = document.getElementById("btnAgregarTabla");

const tabla = document.getElementById("tablaTareasTabla");

// ==========================
// BUSCAR USUARIO
// ==========================
btnBuscar.addEventListener("click", async () => {

    const nombre = inputBuscar.value.trim();

    if (!nombre) {
        mensaje.textContent = " Escriba un usuario";
        return;
    }

    // 1. Validar con tu función existente
    const existe = await BuscarNombre(nombre);

    if (!existe) {
        usuarioTabla = null;
        tareasTabla = [];
        tabla.innerHTML = "";
        infoUsuario.textContent = "";
        mensaje.textContent = "❌ Usuario no encontrado";
        return;
    }

    // 2. Obtener el usuario real SIN modificar index.js
    const users = await request("users");

    const user = users.find(u =>
        u.name.toLowerCase().includes(nombre.toLowerCase())
    );

    if (!user) {
        mensaje.textContent = " Error al obtener usuario";
        return;
    }

    usuarioTabla = user;
    tareasTabla = [];

    infoUsuario.textContent = `Usuario: ${user.name}`;
    mensaje.textContent = "";

    renderTareas();
});

// ==========================
// AGREGAR TAREA
// ==========================
btnAgregar.addEventListener("click", () => {

    if (!usuarioTabla) {
        mensaje.textContent = "Primero busque un usuario";
        return;
    }

    const tarea = inputTarea.value.trim();

    if (!tarea) {
        mensaje.textContent = "Escriba una tarea";
        return;
    }

    tareasTabla.push(tarea);

    renderTareas();

    inputTarea.value = "";
});

// ==========================
// RENDER TABLA (DOM)
// ==========================
function renderTareas() {

    tabla.innerHTML = "";

    tareasTabla.forEach((tarea, index) => {

        const fila = document.createElement("tr");

        const col1 = document.createElement("td");
        col1.textContent = index + 1;

        const col2 = document.createElement("td");
        col2.textContent = tarea;

        fila.appendChild(col1);
        fila.appendChild(col2);

        tabla.appendChild(fila);
    });
}