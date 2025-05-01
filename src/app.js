// Libs
import express from 'express';

// Local
import connectDB from './config/dbconnect.js';
import routes from './routes/index.js';

const conexao = await connectDB();

conexao.on("error", (err) => {
    console.log("Erro de conexão: " + err);
});

conexao.once("open", () => {
    console.log("Banco de dados conectado com sucesso!");
});

const app = express();
routes(app);

export default app;