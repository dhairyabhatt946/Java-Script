const http = require('http');

const server = http.createServer((req, res)=> {
    if(req.url === '/home') res.end('Home');
    else if(req.url === '/about') res.end('About');
    else if(req.url === '/contact') res.end('Contact');
    else if(req.url === '/products') res.end('Products');
    else res.end('404 Not Found');
})

const port = 3090;

server.listen(port, ()=> {
    console.log(`Server running on port ${port}`);
})