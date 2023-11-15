"use strict";
// userMiddlewares.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.exerciseValidationMiddleware = exports.userValidationMiddleware = void 0;
const ErrorHandler_1 = require("../error/ErrorHandler");
const userValidationMiddleware = (req, res, next) => {
    try {
        // Lógica para validar y procesar la solicitud antes de insertar el usuario
        if (!req.body.name || !req.body.email) {
            return res.status(400).json({ error: 'Name, Email are required fields.' });
        }
        // Si los datos son válidos, continuamos con la siguiente función de middleware o el controlador.
        next();
    }
    catch (error) {
        // Capturamos cualquier error y lo manejamos con ErrorHandler.
        ErrorHandler_1.ErrorHandler.handleError(error, req, res, next);
    }
};
exports.userValidationMiddleware = userValidationMiddleware;
const exerciseValidationMiddleware = (req, res, next) => {
    try {
        if (!req.body.name ||
            !req.body.typeOfExercise ||
            !req.body.series ||
            !req.body.repetitions ||
            !req.body.rest ||
            !req.body.weight) {
            return res.status(400).json({ error: 'The fields (name, typeOfExercise, series, repetitions, rest, weight) are required.' });
        }
        next();
    }
    catch (error) {
        ErrorHandler_1.ErrorHandler.handleError(error, req, res, next);
    }
};
exports.exerciseValidationMiddleware = exerciseValidationMiddleware;
