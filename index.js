// Importing the built-in 'http' module
const http = require('http');

// Creating a server instance
const server = http.createServer((req, res) => {
  // Setting response header with content type
  res.setHeader('Content-Type', 'text/plain');
  
  // Sending "Hello, World!" as the response
  res.end('Hello, World!\n');
});

// Listening on port 3000
server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
