const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  //console.log(req.url);
  const urlPath = req.url;
  if (urlPath === "/" || urlPath === "/3MTT") {
    res.end("Welcome to Node Class Home Page");
  } else if (urlPath === "/contacts") {
    res.end("Welcome to our contact page");
  } else [res.end("Page not found")];
});

server.listen(3000, () => {
  console.log("Starting on port 3000");
});
