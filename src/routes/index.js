import express from 'express';
import livrosRoutes from './livrosRoutes.js';

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({ title: "Curso de Node.js", version: "1.0.0" });
    });

    // USE -> Incluir um middleware
    // app.use(express.json()) -> Middleware para converter o corpo da requisição em JSON
    app.use(express.json(), livrosRoutes);
}

export default routes;