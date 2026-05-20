import { tareasControlador, vistaTareas } from "../VistaTarea/index.js"
import { vistaAgregar, agregarControlador } from "../VistaAgregar/index.js"
import { eliminarControlador, vistaEliminar } from "../VistaEliminar/index.js"
import {vistaActualizar, actualizarControlador } from "../VistaActualizar/index.js"

export const rutas = [
  {
    'ruta': '#/Tareas',
    vista: vistaTareas,
    controlador: tareasControlador
  },
  {
    'ruta': '#/AgregarT',
    vista: vistaAgregar,
    controlador: agregarControlador
  },
  {
    'ruta': '#/EliminarT',
    vista: vistaEliminar,
    controlador: eliminarControlador
  },
  {
    'ruta': '#/ActualizarT',
    vista: vistaActualizar,
    controlador: actualizarControlador
  }
];