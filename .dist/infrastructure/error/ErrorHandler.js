"use strict";
// ErrorHandler.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorHandler = void 0;
const BadRequestError_1 = require("./BadRequestError");
const NotFoundError_1 = require("./NotFoundError");
class ErrorHandler {
    static handleError(error, request, response, next) {
        if (error instanceof BadRequestError_1.BadRequestError || error instanceof NotFoundError_1.NotFoundError) {
            // Manejo específico para errores personalizados
            const errorDetails = {
                status: error.statusCode,
                code: error.code,
                message: error.message,
                // Otras propiedades adicionales específicas del error...
            };
            response.status(error.statusCode).json({ error: errorDetails });
        }
        else {
            // Manejo de errores genéricos
            const statusCode = error.statusCode || 500;
            const errorMessage = error.message || 'Internal Server Error';
            const errorDetails = {
                status: statusCode,
                message: errorMessage,
            };
            response.status(statusCode).json({ error: errorDetails });
        }
    }
}
exports.ErrorHandler = ErrorHandler;
