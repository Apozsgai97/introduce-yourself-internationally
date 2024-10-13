import test from "node:test";
import { deepEqual } from "node:assert/strict";
import { makeIntroduction, addUsername, rightFormatName } from "./lib";

test("if swedish language return the text", () => {
  const introductions = [
    {
      language: "swedish",
      text: "Hej! Jag heter NAME. Trevligt att träffa dig! Vad heter du?",
    },
  ];

  const result = makeIntroduction(introductions, "swedish");

  deepEqual(
    result,
    "Hej! Jag heter NAME. Trevligt att träffa dig! Vad heter du?"
  );
});

test("if invalid language return an error", () => {
  const introductions = [
    {
      language: "swedish",
      text: "Hej! Jag heter NAME. Trevligt att träffa dig! Vad heter du?",
    },
  ];

  const result = makeIntroduction(introductions, "");

  deepEqual(result, "Language not found. Write something else.");
});

test("works with uppercase input ", () => {
  const introductions = [
    {
      language: "swedish",
      text: "Hej! Jag heter NAME. Trevligt att träffa dig! Vad heter du?",
    },
  ];

  const result = makeIntroduction(introductions, "SWEDISH");

  deepEqual(
    result,
    "Hej! Jag heter NAME. Trevligt att träffa dig! Vad heter du?"
  );
});

test("can choose from multiple languages ", () => {
  const introductions = [
    {
      language: "swedish",
      text: "Hej! Jag heter NAME. Trevligt att träffa dig! Vad heter du?",
    },
    {
      language: "english",
      text: "Hi! My name is NAME. Nice to meet you! What's your name?",
    },
  ];

  const result = makeIntroduction(introductions, "english");

  deepEqual(result, "Hi! My name is NAME. Nice to meet you! What's your name?");
});

test("change NAME to username.", () => {
 const name = "Adrienn";
 const text = "Hi! My name is NAME. Nice to meet you! What's your name?";

 const result = addUsername(text, name);

 deepEqual(result, "Hi! My name is Adrienn. Nice to meet you! What's your name?");
});

test("with empty name the text does not change", () => {
  const name = "";
  const text = "Hi! My name is NAME. Nice to meet you! What's your name?";

  const result = addUsername(text, name);

  deepEqual(
    result,
    "Hi! My name is NAME. Nice to meet you! What's your name?"
  );
});

test("change name to right format", () => {
  const name = "aDRIenn";

  const result = rightFormatName(name);

  deepEqual(result, "Adrienn");
});





/*test("slice the input to the right format", () => {
  const input = `{language:"HUNGARIAN"}`;

  const result = sliceResult(input);

  deepEqual(result, "HUNGARIAN");
});*/
