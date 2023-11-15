"use strict";
// MongoUserRepository.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoUserRepository = void 0;
const Connection_1 = require("../mongodb/connections/Connection");
// Clase que implementa la interfaz UserRepository y se conecta a MongoDB
class MongoUserRepository {
    constructor() { this.connect(); }
    //  Establece la conexión con la base de datos.
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield (0, Connection_1.dbConnection)();
            this.collection = db.collection('users');
            if (!this.collection) {
                throw new Error('The connection to the users Collection of the database is not established');
            }
        });
    }
    // Obtiene todos los usuarios de la base de datos.
    findAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userDocs = yield this.collection.find().toArray();
                return userDocs;
            }
            catch (error) {
                throw new Error("Error getting users list");
            }
        });
    }
}
exports.MongoUserRepository = MongoUserRepository;
