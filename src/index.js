const http = require('http');

const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  console.log('Received an api call on', req.url)
  res.writeHead(404, { 'Content-Type': 'application/json' })
  res.end('{ "error": "Not implemented" }')
}).listen(PORT)
console.log('Server running at http://127.0.0.1:' + PORT)

module.exports = server
