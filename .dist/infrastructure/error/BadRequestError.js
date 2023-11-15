"use strict";
// BadRequestError.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadRequestError = void 0;
// Definimos una clase BadRequestError que extiende de la clase Error.
class BadRequestError extends Error {
    // Constructor de la clase BadRequestError que recibe un mensaje como parámetro.
    constructor(message) {
        // Llamamos al constructor de la clase Error con el mensaje proporcionado.
        super(message);
        // Establecemos la propiedad statusCode con el valor 400, que corresponde al código de estado HTTP 400 (Bad Request).
        this.statusCode = 400;
        // Establecemos la propiedad code con el valor 'BAD_REQUEST', que es un identificador para este tipo de error.
        this.code = 'BAD_REQUEST';
    }
}
exports.BadRequestError = BadRequestError;
