// import http from 'http';
import "dotenv/config";
import app from './src/app.js';

const PORT = process.env.PORT || 3000;

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end(rotas[req.url]);
// });

// server.listen(PORT, () => {
//   console.log('Server running at http://localhost:3000/');
// });

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});