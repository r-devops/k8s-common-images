const http = require("http");

// Server on port 3000
const server1 = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello from port 3000\n");
});

server1.listen(3000, () => {
    console.log("Server listening on port 3000");
});

// Server on port 4000
const server2 = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello from port 4000\n");
});

server2.listen(4000, () => {
    console.log("Server listening on port 4000");
});

