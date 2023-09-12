const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const path = require('path'); // Importe o módulo "path"

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// Configurando o middleware para servir arquivos estáticos
app.use(express.static(__dirname));

// Rota para servir o favicon.ico
app.get('/favicon.ico', (req, res) => {
    res.sendFile(path.join(__dirname, 'favicon.ico'));
});

// Configurando a rota para a página inicial
app.get('/', (req, res) => {
     res.sendFile(path.join(__dirname, 'index.html'));
});

wss.on('connection', (ws) => {
    ws.on('message', (message) => {
        wss.clients.forEach((client) => {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
