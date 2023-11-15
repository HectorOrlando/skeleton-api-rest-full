"use strict";
// UserController.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
// Clase que representa el controlador de usuarios
class UserController {
    // Constructor que recibe una instancia de FindAllUsers como parámetro
    constructor(findAllUsers) {
        this.findAllUsers = findAllUsers;
    }
    // Controlador para obtener todos los usuarios.
    getAllUsers() {
        const users = this.findAllUsers.run(); // Ejecuta la función 'run' del caso de uso FindAllUsers para obtener todos los usuarios
        return users; // Retorna la lista de usuarios directamente
    }
}
exports.UserController = UserController;
