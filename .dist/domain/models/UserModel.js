"use strict";
// UserModel.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
// Definición de la clase UserModel
class UserModel {
    // Constructor de la clase
    constructor(id, name, email) {
        // Inicialización de las propiedades con los valores proporcionados
        this.id = id;
        this.name = name;
        this.email = email;
    }
    // Métodos de acceso para obtener los valores de las propiedades privadas
    getId() { return this.id; }
    getName() { return this.name; }
    getEmail() { return this.email; }
    // Método estático para crear una instancia de UserModel
    static create(id, name, email) {
        // Llamada al constructor utilizando la palabra clave 'new'
        return new UserModel(id, name, email);
    }
}
exports.UserModel = UserModel;
