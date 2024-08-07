const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res)=> {
    fs.readFile('myWebsite.html', (err, data)=> {
        if(err) throw err;
        res.end(data);
    })
    if(req.url == '/home') {
        res.end(fs.readFileSync('home.html'));
    }
    else if(req.url == '/features') {
        res.end(fs.readFileSync('features.html'));
    }
    else if(req.url == '/pricing') {
        res.end(fs.readFileSync('pricing.html'));
    }
    else if(req.url == '/about') {
        res.end(fs.readFileSync('about.html'));
    }
    else if(req.url == '/contact') {
        res.end(fs.readFileSync('contact.html'));
    }
})

const port = 3090;

server.listen(port, ()=> {
    console.log(`Server running on port ${port}`);
});