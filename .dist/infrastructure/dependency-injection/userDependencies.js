"use strict";
// userDependencies.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = exports.findAllUsers = void 0;
const UserController_1 = require("../controllers/UserController");
const MongoUserRepository_1 = require("../repositories/MongoUserRepository");
const FindAllUsers_1 = require("../../application/user-use-cases/FindAllUsers");
// Investigar como funciona un contenedor de dependencias como TypeDi, Inversify, etc.
// Creación de instancias y configuración de inyección de dependencias.
// Creamos una instancia de MongoUserRepository, que es una implementación de UserRepository.
const userRepository = new MongoUserRepository_1.MongoUserRepository();
// Inversión de dependencias: Pasamos la instancia de userRepository como argumento en la creación de instancias de los casos de uso.
exports.findAllUsers = new FindAllUsers_1.FindAllUsers(userRepository);
// Inyección de dependencias: Pasamos las instancias de los casos de uso como argumentos en la creación de la instancia de UserContoller.
exports.userController = new UserController_1.UserController(exports.findAllUsers);
