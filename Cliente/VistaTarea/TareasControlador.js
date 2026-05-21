import { request } from "@/helper/index.js";
import { tareas } from "./mostrarTareas.js";

export const tareasControlador = async () => {
  const editable = document.querySelector('div > div');
  const data = await request("users");

  editable.innerHTML = tareas(data);

}