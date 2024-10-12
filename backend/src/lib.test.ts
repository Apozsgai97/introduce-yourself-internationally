import test from "node:test";
import { deepEqual } from "node:assert/strict";
import { makeIntroduction } from "./lib";

test("if no language return an error", () => {
  const introductions = {
    language: "swedish",
    text: "Hej! Jag heter NAME. Trevligt att träffa dig! Vad heter du?",
  };
  
  const result = makeIntroduction(introductions.text, "swedish");

  deepEqual(
    result,
    "Hej! Jag heter NAME. Trevligt att träffa dig! Vad heter du?"
  );
});
