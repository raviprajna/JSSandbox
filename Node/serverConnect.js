// server 
var conn = require('conect')
var server = require('http');
server.createServer(reqHandler).listen("8888");

function reqHandler(req, res) {
    // console.log(req);
    res.writeHead(200, {
        "Context-type": "text/plain"
    });
    res.write("Hello");
    res.end();
    // res.writ
}