const fs = require('fs');
const http = require('http');
const url = require('url');

// Server
const tempHome = fs.readFileSync(`${__dirname}/templates/template-home.html`, 'utf-8');
const server = http.createServer((req, res) => {
	const pathName = url.parse(req.url, true);

	if (pathName === '/' || pathName === '/home') {
		res.writeHead(200, {'Content-type': 'text/html'});
		res.end(tempHome);
	}
});


server.listen(5000, '127.0.0.1', () => {
	console.log("Listening to port 8000")
});