const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/html" });
    if (req.url === "/") {
      fs.readFile(
        path.join(__dirname, "templates", "index.html"),
        "utf-8",
        (err, content) => {
          if (err) throw new Error();
          res.end(content);
        }
      );
    } else if (req.url === '/about') {
        fs.readFile(
            path.join(__dirname, "templates", "about.html"),
            "utf-8",
            (err, content) => {
              if (err) throw new Error();
              res.end(content);
            }
          );
    }
  } else if (req.method === "POST") {
    res.end("Email added:");
  }
});

// server 3000 portda ekranga hello there  textini chiqarmoqda va end() bn res ni toxtatmoqda
server.listen(3001, () => {
  console.log("server started");
  console.log("salom");
});

// server 3000 portda server started ni log qily....
