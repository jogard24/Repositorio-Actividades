import { request } from "./fetch.js";

const formUsuario = document.getElementById("formUsuario");
const formTarea = document.getElementById("formTarea");
const infoUsuario = document.getElementById("infoUsuario");
const tablaTareas = document.getElementById("tablaTareas");

let usuarioActual = null; //variable para guardar el usuario 

// Buscar usuario
formUsuario.addEventListener("submit", async (e) => {
  e.preventDefault(); //evita que el usuario recargue la pagina
  const id = document.getElementById("userId").value;//obtenemos el id ingresado

  //consultamos al jsonplaceholder
  const usuario = await request(`https://jsonplaceholder.typicode.com/users/${id}`);

  //si el usuario existe muestra sus datos
  if (usuario.id) {
    usuarioActual = usuario;// se guarda el usuario en contrado 
    infoUsuario.textContent = `Usuario encontrado: ${usuario.name} (${usuario.email})`;
    formTarea.style.display = "block";//habilitamos el formulario de tareas 
  } else {
    infoUsuario.textContent = "Usuario no encontrado";
    formTarea.style.display = "none";//ocultamos el formulario de tareas 
  }
});

// Registrar tarea
formTarea.addEventListener("submit", async (e) => {
  e.preventDefault();
//capturamos los valores del formulario 
  const titulo = document.getElementById("titulo").value;
  const descripcion = document.getElementById("descripcion").value;
  const estado = document.getElementById("estado").value;

  if (!usuarioActual) return; // si no hay usuario no hacemos nada 

  //enviamos la tarea al servidor json server
  const tarea = await request("https://jsonplaceholder.typicode.com/todos", {
    method: "POST",
    body: JSON.stringify({
      userId: usuarioActual.id,
      title: titulo,
      descripcion: descripcion,
      estado: estado
    }),
    headers: { "Content-type": "application/json; charset=UTF-8" }
  });
// creamos una fila en la tabla para mostrar la tarea 
  const fila = document.createElement("tr");
  fila.innerHTML = `
    <td>${tarea.title}</td>
    <td>${tarea.descripcion}</td>
    <td>${tarea.estado}</td>
  `;
  tablaTareas.appendChild(fila); //limpiamos el formulario 

  formTarea.reset();
});
