var http = require("http");
const os = require("os");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`Hello World,This Project Running in ${os.hostname}`);
  })
  .listen(2020);
