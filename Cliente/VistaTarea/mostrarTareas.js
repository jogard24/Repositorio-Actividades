export const tareas = (data) => {
  return data.map(({ id, name, tarea, body}) =>
    `
  <div class="message">
  <div class="message-card__header">
        <div class="message-card__user">
          <div class="message-card__avatar">${id}</div>
          <span class="message-card__username">${name}</span>
          </div>
          <span class="message-card__timestamp">nada</span>

        </div>
        <div class="message-card__content">${tarea}</div>
    <div class="message-card__content">${body}</div>
  </div>
  </div>
  `
  ).join(' ');
}