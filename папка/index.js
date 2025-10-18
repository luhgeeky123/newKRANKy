const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/' || req.url === '/page1') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end('<h1>Главная страница</h1>');
  } else if (req.url === '/page2') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end('<h1>Контакты</h1>');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end('<h1>404 — такой страницы нет :(</h1>');
  }
});

server.listen(3000);