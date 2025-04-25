import http from 'http';

const PORT = 3000;

const rotas = {
    '/': 'Hello, World!',
    '/livros': 'Entrei na rota livros',
    '/autores': 'Entrei na rota autores',
    '/sobre': 'Entrei na rota sobre',
}

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(rotas[req.url]);
});

server.listen(PORT, () => {
  console.log('Server running at http://localhost:3000/');
});