import express from "express";
import LivroController from "../controllers/livroController.js";

const routes = express.Router();

// Get
routes.get("/livros", LivroController.listarLivros);
routes.get("/livros/busca", LivroController.listarLivrosPorEditora);
routes.get("/livros/:id", LivroController.listarLivroPorId);

// Post
routes.post("/livros", LivroController.cadastrarLivro);

// Put
routes.put("/livros/:id", LivroController.atualizarLivro);

// Delete
routes.delete("/livros/:id", LivroController.excluirLivro);

export default routes;