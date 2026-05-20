import { tareasControlador } from "../VistaTarea/TareasControlador.js";
import { vistaTareas } from "../VistaTarea/VistaTareas.js"; 

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
  // {
  //   'ruta': '#/EliminarT',
  //   vista: vistaCategoria,
  //   controlador: categoriasControlador
  // },
  // {
  //   'ruta': '#/ActualizarT',
  //   vista: vistaCategoria,
  //   controlador: categoriasControlador
  // }
];