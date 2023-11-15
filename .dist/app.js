"use strict";
// app.ts
Object.defineProperty(exports, "__esModule", { value: true });
const Server_1 = require("./infrastructure/servers/Server");
const server = new Server_1.Server(); // Crea una instancia del servidor.
server.listen(); // Inicia el servidor y lo pone en escucha de solicitudes.
