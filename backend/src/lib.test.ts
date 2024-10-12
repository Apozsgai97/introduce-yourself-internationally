import test from "node:test";
import { deepEqual } from "node:assert/strict";

test("1 equals 1", () => {
  const result = 1;

  deepEqual(result, 1);
});
