import http from "http";
import querystring from "querystring";
import { sliceResult, makeIntroduction } from "./lib";

export interface Introduction {
language: string,
text: string
}

const introductions: Introduction[] = [
  {
    language: "swedish",
    text: "Hej! Jag heter NAME. Trevligt att träffa dig! Vad heter du?",
  },
  {
    language: "english",
    text: "Hi! My name is NAME. Nice to meet you! What's your name?",
  },
  {
    language: "hungarian",
    text: "Szia! Az én nevem NAME. Örülök a találkozásnak! Teged hogy hívnak?",
  },
  {
    language: "spanish",
    text: " ¡Hola! Mi nombre es NAME. Es un placer conocerte. ¿Cuál es su nombre?",
  },
];

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
          const language = sliceResult(result);
          const introductionText = makeIntroduction(introductions, language);
          res.write(introductionText);
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
