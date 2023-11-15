"use strict";
// NotFoundError.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundError = void 0;
// Definimos una clase NotFoundError que extiende de la clase Error.
class NotFoundError extends Error {
    // Constructor de la clase NotFoundError que recibe un mensaje como parámetro.
    constructor(message) {
        // Llamamos al constructor de la clase Error con el mensaje proporcionado.
        super(message);
        // Establecemos la propiedad statusCode con el valor 404, que corresponde al código de estado HTTP 404 (Not Found).
        this.statusCode = 404;
        // Establecemos la propiedad code con el valor 'NOT_FOUND', que es un identificador para este tipo de error.
        this.code = 'NOT_FOUND';
    }
}
exports.NotFoundError = NotFoundError;
