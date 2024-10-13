import http from "http";
import querystring from "querystring";
import { makeIntroduction, addUsername } from "./lib";
import sqlite3 from "sqlite3";

const db = new sqlite3.Database("database.db")

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
          const language = parsedData.language as string;
          const name = parsedData.name as string;

          db.get("SELECT text FROM introduction WHERE language = ?", [language.toLowerCase()],
          (err, row: Introduction) => {
           if(err) {
            res.writeHead(500, {"Content-Types": "text/plain"});
            res.end("Database error");
            return;
           }

           if (row) {
            const introductionText = row.text;
            const textWithUserName = addUsername(introductionText, name);

            res.writeHead(200, {
              "Content-Type": "application/json",
              "Access-control-allow-origin": "*",
              "Access-control-allow-methods": "OPTIONS, POST, GET",
              "access-control-max-age": "2592000",
            });
            res.write(textWithUserName);
            res.end();
           }
          })
   
          //const introductionText = makeIntroduction(introductions, language);
          //const textWithUserName = addUsername(introductionText, name);
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
