var http = http = require("http");
var handler = function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
};

var server = http.createServer();
server.addListener("request", handler);
server.listen(8000);