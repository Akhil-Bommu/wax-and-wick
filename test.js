const assert = require("assert");
const { candles } = require("./script.js");

const validTypes = ["Party", "Gift", "Festival", "Package"];

// Test 1: there should be at least 6 candles
assert.ok(candles.length >= 6, "Expected at least 6 candles");
console.log("PASS: candle list has at least 6 items");

// Test 2: every candle has all details and a valid type
candles.forEach(function (c) {
  assert.ok(c.name && c.size, "Candle is missing name or size");
  assert.ok(validTypes.includes(c.type), "Invalid type for " + c.name);
});
console.log("PASS: every candle has name, size and a valid type");

// Test 3: every price is a positive number
candles.forEach(function (c) {
  assert.ok(typeof c.price === "number" && c.price > 0, "Bad price for " + c.name);
});
console.log("PASS: every price is a positive number");

console.log("All tests passed!");
