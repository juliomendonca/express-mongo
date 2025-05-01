import express from 'express';
import livrosController from '../controllers/livrosController.js';

const routes = express.Router();

// Get
routes.get('/livros', livrosController.listarLivros);
routes.get('/livros/:id', livrosController.listarLivroPorId);

// Post
routes.post('/livros', livrosController.cadastrarLivro);

// Put
routes.put('/livros/:id', livrosController.atualizarLivro);

// Delete
routes.delete('/livros/:id', livrosController.excluirLivro);