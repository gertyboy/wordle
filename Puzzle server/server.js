const http = require('http');
const fs = require('fs')
const path = require('path');  // Import the 'path' module

const port = 42834;
const publicDir = path.join('public');  // Absolute path to public folder

const server = http.createServer((req, res) => {
  // Set default content type for all responses
  // Handle requests for root path (/)
  if (req.url === '/') {
    const filePath = path.join(publicDir, 'puzzle0.html');
    res.setHeader('Content-Type', 'text/html');
    fs.readFile(filePath, (err, data) => {

      if (err) {
        console.error(err);
        res.statusCode = 500;  // Set internal server error status
        res.end('Internal Server Error');
      } else {
        res.end(data);
      }
    });
  } else {
    const filePath = path.join(publicDir, req.url);
    // Handle requests for other static files (CSS, JS, etc.)
    fs.access(filePath, fs.constants.F_OK, (err) => {
      if (err) {
        console.error(`${filePath} not found`);
        res.statusCode = 404;  // Set not found status
        res.end('Not Found');
      } else {
        // Serve the requested static file
        res.writeHead(200); // OK status
        const extname = path.extname(filePath);
        let contentType = 'text/html';
        switch (extname) {
          case '.css':
            contentType = 'text/css';
            break;
          case '.js':
            contentType = 'text/javascript';
            break;
          // ... Add more cases for other file types if needed
        } switch (extname) {
          case '.json':
            contentType = 'application/json';
            break;
          case '.js':
            contentType = 'text/javascript';
            break;
        }
        fs.createReadStream(filePath).pipe(res);
      }
    });
  }
});



server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

