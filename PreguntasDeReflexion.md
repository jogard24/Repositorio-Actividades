# PREGUNTAS DE REFLEXIÓN:
  
* ## 1. ¿Qué elemento del DOM estás seleccionando?
     

     **messageForm:** elemento ```<form>``` que contiene el formulario ```const messageForm = document.getElementById('messageForm');```

     **userName:** elemento ```<input>``` que recibe el nombre del usuario ```const userNameInput = document.getElementById('userName');```

     **userMessage:** elemento ```<textarea>``` donde se escribe el contenido del mensaje ```const userMessageInput = document.getElementById('userMessage');```

     **submitBtn:** elemento ```<button>``` que activa el envío del formulario ```const submitBtn = document.getElementById('submitBtn');```

     **userNameError:** elemento ```<span>``` destinado a mostrar mensajes de error del nombre ```const userNameError = document.getElementById('userNameError');```

     **userMessageError:** elemento ```<span>``` destinado a mostrar mensajes de error del mensaje ```const userMessageError = document.getElementById('userMessageError');```

     **messagesContainer:** elemento ```<div>``` que sirve como contenedor de los mensajes publicados ```const messagesContainer = document.getElementById('messagesContainer');```

     **emptyState:** elemento ```<div>``` que muestra el estado visual cuando no hay mensajes ```const emptyState = document.getElementById('emptyState');```

     **messageCount:** elemento ```<span>``` que visualiza la cantidad total de mensajes ```const messageCount = document.getElementById('messageCount');```

     ---
     **formUsuario:** elemento ```<form>``` que gestiona la búsqueda de usuario por ID ```const formUsuario = document.getElementById('formUsuario');```

     **formTarea:** elemento ```<form>``` que contiene los campos para registrar una nueva tarea ```const formTarea = document.getElementById('formTarea');```

     **infoUsuario:** elemento ```<div>``` donde se despliega la información del usuario encontrado ```const infoUsuario = document.getElementById('infoUsuario');```

     **tablaTareas:** elemento ```<tbody>``` que organiza la lista de tareas registradas ```const tablaTareas = document.getElementById('tablaTareas');```

     ---
     **buscarUsuarioTabla:** elemento ```<input>``` para escribir el nombre a buscar en la tabla ```const inputBuscar = document.getElementById('buscarUsuarioTabla');```

     **btnBuscarTabla:** elemento ```<button>``` que ejecuta la función de búsqueda en la tabla ```const btnBuscar = document.getElementById('btnBuscarTabla');```

     **infoUsuarioTabla:** elemento ```<div>``` que muestra la información del usuario en la sección de tabla ```const infoUsuario = document.getElementById('infoUsuarioTabla');```

     **mensajeTabla:** elemento ```<p>``` para mostrar notificaciones de estado en la tabla ```const mensaje = document.getElementById('mensajeTabla');```

     **tareaInputTabla:** elemento ```<input>``` para redactar una nueva tarea en la tabla ```const inputTarea = document.getElementById('tareaInputTabla');```

     **btnAgregarTabla:** elemento ```<button>``` que añade la tarea a la lista de la tabla ```const btnAgregar = document.getElementById('btnAgregarTabla');```

     **tablaTareasTabla:** elemento ```<tbody>``` donde se insertan las filas de tareas dinámicamente ```const tabla = document.getElementById('tablaTareasTabla');```

  
* ## 2. ¿Qué evento provoca el cambio en la página?
    
     **submit:** Este evento ocurre cuando el usuario hace clic en el botón de envío o presiona "Enter" dentro de los formularios (```messageForm```, ```formUsuario```, ```formTarea```). Dispara funciones como ```handleFormSubmit``` para procesar y mostrar nuevos datos.

     **click:** Es el evento que se activa al presionar directamente los botones de acción manual, como ```btnBuscarTabla``` para iniciar una búsqueda o ```btnAgregarTabla``` para añadir una tarea a la tabla.

     **input:** Si se implementa en los campos de texto (```userNameInput```, ```userMessageInput```), este evento detecta cada vez que el usuario escribe o borra un carácter, permitiendo realizar validaciones en tiempo real o limpiar mensajes de error.

     **DOMContentLoaded:** Este evento ocurre cuando el navegador ha terminado de cargar el HTML base. Provoca el cambio inicial al ejecutar el código de inicialización (como el mensaje de "Aplicación iniciada") antes de que el usuario interactúe con la página.

     ---
     **submit (formUsuario):** Este evento ocurre cuando el usuario envía el ID para buscar. Provoca un cambio al mostrar la información del usuario en ```infoUsuario``` y al cambiar el estilo de visualización del formulario de tareas.

     **submit (formTarea):** Este evento ocurre al registrar una nueva tarea. Provoca cambios en la página al crear dinámicamente un elemento ```<tr>``` con los datos capturados e insertarlo dentro de ```tablaTareas```.

     ---
     **click (btnBuscar):** Este evento ocurre cuando el usuario presiona el botón de búsqueda de la tabla. Provoca un cambio al limpiar la tabla anterior, actualizar el texto de ```infoUsuario``` con el nombre encontrado y mostrar mensajes de error si el usuario no existe.

     **click (btnAgregar):** Este evento se dispara al presionar el botón de agregar tarea. Provoca una actualización visual inmediata al ejecutar la función ```renderTareas()```, la cual reconstruye las filas del elemento ```<tbody>``` y limpia el valor del campo de entrada.
  
* ## 3. ¿Qué nuevo elemento se crea?

     **div (message-card):** Se crea un nuevo contenedor principal mediante ```document.createElement("div")```. A este elemento se le asigna la clase ```message-card``` para aplicar los estilos de tarjeta.

     **Estructura de la Tarjeta (innerHTML):** Se genera dinámicamente un bloque de contenido que incluye:
     * Un encabezado decorativo (```message-card__header```).
     * El avatar y el nombre de usuario (```message-card__username```).
     * La fecha y hora de publicación (```message-card__timestamp```).
     * El cuerpo del mensaje (```message-card__content```).

     **tr (Fila de tabla):** En el ejercicio de gestión de usuarios, se crea dinámicamente un elemento ```<tr>``` para representar cada nueva entrada de la lista.

     **td (Celdas de tabla):** Dentro de cada fila, se crean elementos ```<td>``` para organizar los datos por columnas (como el título de la tarea, la descripción o el estado).
  
  ---
     **tr (Fila de tabla):** Se crea un nuevo elemento de fila mediante ```document.createElement("tr")``` cada vez que se registra una tarea con éxito. Este elemento actúa como el contenedor para los datos de la nueva tarea.

     **Estructura de la Fila (innerHTML):** Dentro del ```tr``` creado, se genera dinámicamente el contenido de las celdas utilizando Template Literals para insertar los datos obtenidos del servidor:
     * Una celda ```<td>``` con el título de la tarea (```tarea.title```).
     * Una celda ```<td>``` con la descripción (```tarea.descripcion```).
     * Una celda ```<td>``` con el estado (```tarea.estado```).

     ---
     **tr (Fila):** Se crea un nuevo elemento de fila mediante ```document.createElement("tr")``` dentro de la función ```renderTareas()```. Este elemento se genera por cada tarea almacenada en el array ```tareasTabla```.

     **td (Celdas):** Se crean dos elementos de celda por cada fila usando ```document.createElement("td")```:
     * Una celda (```col1```) que contiene el índice o número de la tarea (```index + 1```).
     * Una celda (```col2```) que contiene el texto de la tarea ingresada por el usuario.

* ## 4. ¿Dónde se inserta ese elemento dentro del DOM?
     **messagesContainer:** El nuevo elemento ```div``` (la tarjeta de mensaje) se inserta como un hijo directo del contenedor identificado con el ID ```messagesContainer```. En el código, esto se logra mediante la instrucción ```messagesContainer.appendChild(div);```, lo que posiciona el nuevo mensaje al final de la lista de elementos existentes dentro de esa sección.

     **Relación Jerárquica:** Al insertarse en este contenedor, el nuevo mensaje pasa a formar parte de la sección visual de "Mensajes Publicados" definida en el HTML. Esto desplaza o acompaña al elemento ```emptyState```, el cual es ocultado mediante lógica de clases (```hideEmptyState()```) en el mismo instante de la inserción para mantener la coherencia visual de la interfaz.

     ---
     **tablaTareas (Elemento <tbody>):** La nueva fila (```tr```) se inserta como un hijo del elemento ```<tbody>``` identificado con el ID ```tablaTareas```. En el código, esto se ejecuta mediante la instrucción ```tablaTareas.appendChild(fila);```.

     **Estructura Jerárquica:** Al utilizar ```appendChild```, el navegador coloca la nueva tarea al final de todas las filas existentes dentro del cuerpo de la tabla. Esto permite que el usuario visualice su historial de tareas registradas de forma secuencial, manteniendo la integridad de la estructura de la tabla (```table > tbody > tr > td```).

     ---
     **tablaTareasTabla (Elemento <tbody>):** Las nuevas filas (```tr```) se insertan dentro del cuerpo de la tabla que tiene el ID ```tablaTareasTabla```. En el script, este elemento es referenciado mediante la constante ```tabla```.

     **Proceso de Inserción Dinámica:** La inserción ocurre dentro de la función ```renderTareas()```. Primero, se limpia todo el contenido previo del contenedor con ```tabla.innerHTML = "";``` y luego, mediante un ciclo ```forEach```, se inserta cada nueva fila creada usando la instrucción ```tabla.appendChild(fila);```.

* ## 5. ¿Qué ocurre en la página cada vez que repites la acción?
    
     **Acumulación de elementos:** Cada vez que envías el formulario con datos válidos, se genera una nueva tarjeta (```message-card```) que se añade al final de ```messagesContainer```. La página crece verticalmente conforme se acumulan los mensajes, sin borrar los anteriores.

     **Incremento del estado global:** La variable ```totalMessages``` aumenta en uno (+1). Esto provoca una actualización inmediata en la interfaz mediante la función ```updateMessageCount```, cambiando el texto del contador visual (ej. de "1 Mensaje/s" a "2 Mensaje/s").

     **Reinicio del flujo de entrada:** Al final de cada acción exitosa, se ejecuta ```messageForm.reset()```. Esto limpia los campos de texto del formulario, dejándolos listos para una nueva entrada y evitando que el usuario envíe accidentalmente el mismo mensaje de forma duplicada.

     ---
     **Al repetir la búsqueda (formUsuario):** Cada vez que se busca un nuevo ID, el navegador realiza una petición asíncrona y el contenido de infoUsuario se sobrescribe mediante la propiedad textContent. Si el ID existe, se actualiza el nombre y correo mostrados; si no existe, se muestra un mensaje de error indicando que el usuario no fue hallado y el formulario de tareas se oculta modificando el estilo de la propiedad display a none, asegurando que solo se puedan registrar tareas para usuarios válidos.

     ---
     **Búsqueda de Usuario (btnBuscar):** Cada vez que buscas un usuario nuevo, el estado de la aplicación se reinicia. El arreglo ```tareasTabla``` se vacía ([]) y el contenido de la tabla se limpia por completo.

     **Agregar Tarea (btnAgregar):** Al repetir esta acción, la nueva tarea se añade al arreglo ```tareasTabla``` mediante el método push(). Inmediatamente después, se dispara la función ```renderTareas()```, la cual borra todo el contenido visual de la tabla y lo reconstruye desde cero recorriendo el arreglo actualizado.

     **Limpieza Automática:** Tras agregar una tarea exitosamente, el campo de texto ```inputTarea``` se vacía automáticamente, permitiendo que el usuario pueda escribir la siguiente tarea de inmediato sin interferencias del texto anterior.