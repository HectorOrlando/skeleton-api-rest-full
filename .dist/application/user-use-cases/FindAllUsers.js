"use strict";
// FindAllUsers.ts
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
exports.FindAllUsers = void 0;
// Clase que representa un caso de uso para encontrar todos los usuarios
class FindAllUsers {
    // Inversión de dependencias: la dependencia UserRepository se inyecta a través del constructor.
    constructor(userRepository) {
        this.userRepository = userRepository;
        this.userRepository = userRepository; // Asigna la instancia de UserRepository a la propiedad privada userRepository
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            // Retorna la lista de usuarios encontrados.
            return yield this.userRepository.findAllUsers();
        });
    }
}
exports.FindAllUsers = FindAllUsers;
