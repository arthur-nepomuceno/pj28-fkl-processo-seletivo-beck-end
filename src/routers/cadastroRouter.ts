import { Router } from "express";
import * as cadastroController from "../controllers/cadastroController.js";
import { checkSchema } from "../middlewares/checkSchema.js";
import { novoCadastro, cadastro } from "../schemas/cadastroSchema.js";

const cadastroRouter = Router();
cadastroRouter.post('/cadastro', checkSchema(novoCadastro) ,cadastroController.inserirCadastro);
cadastroRouter.get('/lista-de-cadastros', cadastroController.buscarCadastros);
cadastroRouter.delete('/deletar/:id', cadastroController.deletarCadastro);
cadastroRouter.post('/editar', checkSchema(cadastro), cadastroController.editarCadastro);

export default cadastroRouter;