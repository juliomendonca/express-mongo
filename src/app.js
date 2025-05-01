import express from 'express';
import dotenv from 'dotenv';

import connectDB from './config/dbconnect.js';
import livro from './models/Livro.js';

dotenv.config();

const conexao = await connectDB();

conexao.on("error", (err) => {
    console.log("Erro de conexão: " + err);
});

conexao.once("open", () => {
    console.log("Banco de dados conectado com sucesso!");
});

const app = express();
app.use(express.json());


app.get("/", (req, res) => {
    res.status(200).send("Curso de Noje.js");
});

app.get("/livros", async (req, res) => {
    const listaLivros = await livro.find({});
    res.status(200).json(listaLivros);
});

app.get("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    if (index === -1)
        return res.status(404).send("Livro não encontrado");

    res.status(200).json(livros[index]);
});

app.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).send("Livro cadastrado com sucesso");
});

app.put("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    if (index === -1)
        return res.status(404).send("Livro não encontrado");

    livros[index].titulo = req.body.titulo;
    res.status(200).send("Livro atualizado com sucesso");
});

app.delete("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    if (index === -1)
        return res.status(404).send("Livro não encontrado");

    livros.splice(index, 1);
    res.status(200).send("Livro removido com sucesso");
});

export default app;