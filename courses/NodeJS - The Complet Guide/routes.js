const http = require("http");
const fs = require("fs");

// request listner
function rqListener(req, res) {}

const requestHandler = function (req, res) {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>My Page</title></head>");
    res.write(
      "<body><form action='/message' method='POST'><input type='text' name='message'></input><button type='submit'>Send</button></form></body>"
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
      body.push(chunk);
    });

    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log("****************************");
      console.log(parsedBody);
      const message = parsedBody.split("=")[1];
      fs.writeFileSync("message.txt", message);
      res.statusCode = 302;
      res.setHeader("Location", "/");
      return res.end();
    });
  }

  // res.setHeader("Content-Type", "text/html");
  // res.write("<html>");
  // res.write("<head><title>My first page</title></head>");
  // res.write("<body><h1>Hello from my node js</h1></body>");
  // res.write("</html>");
  // res.end();
};

// server.listen(3000);
// http.createServer(rqListener);

// module.exports.handler = requestHandler
// exports.someText = "Good day"
module.exports = requestHandler;
