var http = require('http');
var ldap = require('ldapjs');

var server = http.createServer(function(req, res) {
res.writeHead(200);
res.end('Hello World');
});
server.listen(8080);
