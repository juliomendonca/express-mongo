import express from "express";
import LivroController from "../controllers/livroController.js";

const routes = express.Router();

routes.get("/livros", (req, res) => {
    LivroController.listarLivros(req, res);
});

routes.get("/livros/:id", (req, res) => {
    LivroController.listarLivroPorId(req, res);
});

routes.post("/livros", (req, res) => {
    LivroController.cadastrarLivro(req, res);
});

routes.put("/livros/:id", (req, res) => {
    LivroController.atualizarLivro(req, res);
});

routes.delete("/livros/:id", (req, res) => {
    LivroController.excluirLivro(req, res);
});

export default routes;