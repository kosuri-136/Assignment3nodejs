const fs = require('fs');
const http = require('http');

const htmlContent = `<h1> Hello World </h1> <p> This is ${YourName} </p>`

fs.writeFile('index.html', htmlContent, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('index.html created successfully.');
});

const server = http.createServer((req, res) => {
  fs.readFile('index.html', (err, data) => {
    if (err) {
      console.error(err);
      res.statusCode = 500;
      res.end('Internal Server Error');
      return;
    }
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(data);
  });
});

const port = 4000; 
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});