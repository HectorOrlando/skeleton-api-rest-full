"use strict";
// userRouter.ts
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
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const userDependencies_1 = require("../dependency-injection/userDependencies");
const ErrorHandler_1 = require("../error/ErrorHandler");
// Creamos el enrutador para la entidad 'usuarios'
exports.userRouter = express_1.default.Router();
// Definir la ruta GET /users en el enrutador userRouter
exports.userRouter.get("/users", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Obtenemos todos los usuarios desde el controlador usando el caso de uso getAllUsers
        const users = yield userDependencies_1.userController.getAllUsers();
        return res.json({ users });
    }
    catch (error) {
        ErrorHandler_1.ErrorHandler.handleError(error, req, res, next);
    }
}));
