var fs = require('fs');
// key not synched on git
var key = fs.readFileSync('./selfCert.key');
var cert = fs.readFileSync('./selfCert.crt');
var https = require('https');
var http = require('http');
var express = require('express');
var fs = require('fs')
var url = require('url')
//const Client = require('bitcoin-core')
//const client = new Client({network:'mainnet'})
var https_options = {
	key: key,
	cert: cert
};

var PORT = 443;
var HOST = '0.0.0.0';
app = express();
app.get('/', function (req, res) {
	res.sendFile('/home/davidweisss/BitcoinAPI/bitcoinAPI.html')
})

server = https.createServer(https_options, app).listen(PORT, HOST);
console.log('HTTPS Server listening on %s:%s', HOST, PORT);
// Redirect from http port 80 to https
var http = require('http');
http.createServer(function (req, res) {
	res.writeHead(301, { "Location": "https://" + req.headers['host'] + req.url });
	res.end();
}).listen(80);
