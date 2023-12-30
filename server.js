// server.js
const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        serveHTML('login1.html', res);
    } else if (req.url === '/login2') {
        serveHTML('login2.html', res);
    } else {
        // Handle other requests (if any)
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
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

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/`);
});


app.use(cors());
app.get("/", (req, res) => {
	res.setHeader("Access-Control-Allow-Credentials","true");
	res.send("API is running.. ");
});