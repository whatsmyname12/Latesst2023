const http = require('http');
const fs = require('fs');
const path = require('path');
const express = require('express');
const cors = require('cors');

const app = express();

// Serve HTML files
app.get('/', (req, res) => {
    serveHTML('login1.html', res);
});

app.get('/login2', (req, res) => {
    serveHTML('login2.html', res);
});

// Additional route for API
app.get('/', (req, res) => {
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.send('API is running..');
});

function serveHTML(fileName, res) {
    const filePath = path.join(__dirname, fileName);
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Internal Server Error');
            return;
        }

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });
}

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/`);
});
