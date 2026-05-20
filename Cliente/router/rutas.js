import { tareasControlador } from "../VistaTarea/TareasControlador.js";
import { vistaTareas } from "../VistaTarea/VistaTareas.js";
import { vistaAgregar } from "../VistaAgregar/vistaAgregar.js"
import { agregarControlador } from "../VistaAgregar/AgregarControlador.js"
import { vistaEliminar } from "../VistaEliminar/vistaEliminar.js"
import { eliminarControlador } from "../VistaEliminar/eliminarControlador.js"
import { vistaActualizar } from "../VistaActualizar/vistaActualizar.js"
import { actualizarControlador } from "../VistaActualizar/ActualizarControlador.js"


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