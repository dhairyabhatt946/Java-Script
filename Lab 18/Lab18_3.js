const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/about') {
        fs.readFile('about.txt', (err, data) => {
            if (err) throw err;
            res.end(data);
        });
    }
    else if (req.url === '/contact') {
        fs.readFile('contact.txt', (err, data) => {
            if(err) throw err;
            res.end(data);
        });
    }
    else res.end('404 Not Found');
})

const port = 2000;

server.listen(port, () => {
    console.log(`server is running on port ${port}`);
})