import { destroy } from "../helper/fetch.js";

export const eliminarTareaPorId = async (nombre) => {
    // La URL será algo como: todos/15
    return await destroy(`users/${nombre}`);
};