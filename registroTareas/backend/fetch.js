// Helper para hacer peticiones al servidor
export const request = async (url, options = {}) => {
  const respuesta = await fetch(url, options);
  return await respuesta.json();
};
