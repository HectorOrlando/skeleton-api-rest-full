"use strict";
// Server.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const userRoutes_1 = require("../routes/userRoutes");
const ErrorHandler_1 = require("../error/ErrorHandler");
dotenv_1.default.config(); // Carga las variables de entorno desde .env
class Server {
    constructor() {
        this.app = (0, express_1.default)(); // Creamos una instancia de Express para la aplicación
        this.port = process.env.PORT || 3000; // Definimos la ruta base para las rutas relacionadas con usuarios
        this.usersRoutePath = '/gym'; // Definimos la ruta base para las rutas relacionadas con usuarios
        this.middleware(); // Configuramos los middleware de la aplicación
        this.routes(); // Configuramos las rutas de la aplicación
    }
    // Método para configurar los middleware de la aplicación
    middleware() {
        this.app.use((0, cors_1.default)()); // Configura el middleware de CORS para permitir el acceso a recursos de otros servidores
        this.app.use(express_1.default.json()); // Configura el middleware para leer y analizar el cuerpo de las solicitudes como JSON
        this.app.use((error, request, response, next) => {
            // Configuramos el middleware global para manejar errores
            ErrorHandler_1.ErrorHandler.handleError(error, request, response, next);
        });
    }
    // Método para configurar las rutas de la aplicación
    routes() {
        this.app.use(this.usersRoutePath, userRoutes_1.userRouter); // Configurar las rutas en la aplicación Express
    }
    // Método para iniciar el servidor y escuchar en el puerto configurado
    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto: ', this.port);
        });
    }
}
exports.Server = Server;
