const http = require('http');
const url = require('url');

const website = 'www.kanoriachem.com';
const server = http.createServer((req, res) => {
  const pathname = url.parse(req.url).pathname;
  res.writeHead(301, { 
    Location: `https://${website}${pathname}` 
  });
  res.end();
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});