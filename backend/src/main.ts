import http from "http";
import querystring from "querystring";

export function main() {
  http
    .createServer(function (req, res) {
      let body = "";
      req.on("data", (chunk) => {
        body += chunk.toString();
      });
      req.on("end", () => {
        try {
          const parsedData = querystring.parse(body);
          res.writeHead(200, {
            "Content-Type": "application/json",
            "Access-control-allow-origin": "*",
            "Access-control-allow-methods": "OPTIONS, POST, GET",
            "access-control-max-age": "2592000",
          });
          const result = JSON.stringify(parsedData);
          res.write(result);
          res.end();
        } catch (error) {
          if (!res.headersSent) {
            res.writeHead(400, { "Content-Type": "text/plain" });
            res.end("Invalid JSON");
          }
        }
      });
    })
    .listen(8080);
}
