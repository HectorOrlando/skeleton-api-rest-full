"use strict";
// Connection.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConnection = void 0;
const mongodb_1 = require("mongodb");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config(); // Carga las variables de entorno desde .env
// Función para establecer una conexión con la base de datos
const dbConnection = () => __awaiter(void 0, void 0, void 0, function* () {
    // Obtiene la cadena de conexión a la base de datos desde las variables de entorno
    const mongodbCnn = process.env.MONGODB_CNN;
    // Verifica si la cadena de conexión está definida
    if (!mongodbCnn) {
        throw new Error("MONGODB_CNN environment variable is not defined");
    }
    try {
        // Crea una instancia del cliente de MongoDB usando la cadena de conexión
        const client = new mongodb_1.MongoClient(mongodbCnn);
        // Conecta al cliente con el servidor de MongoDB
        yield client.connect();
        // Obtiene una instancia de la base de datos
        const db = client.db();
        // Retorna la instancia de la base de datos
        return db;
    }
    catch (error) {
        throw new Error("Error when starting the database");
    }
});
exports.dbConnection = dbConnection;
