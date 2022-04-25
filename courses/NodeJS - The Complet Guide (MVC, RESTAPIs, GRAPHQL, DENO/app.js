const http = require("http");
const fs = require("fs");

// request listner
function rqListener(req, res) {}

const server = http.createServer(function (req, res) {
  console.log(req.url, req.method, req.headers);
  //   process.exit();
  const url = req.url;
  const method = req.method;
  console.log("-----------------------");
  console.log(url);

  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>My Page</title></head>");
    res.write(
      "<body><form action='/message' method='POST'><input type='text' name='message'></input></form><button type='submit'>Send</button></body>"
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    fs.writeFileSync("message.txt", "dummy yes");
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My first page</title></head>");
  res.write("<body><h1>Hello from my node js</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(3000);

// http.createServer(rqListener);
