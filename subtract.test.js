const { test, expect } = require("@jest/globals")
const subtract = require("./subtract")

test("subtract 2 numbers", () => {
    expect(subtract(1,2)).toBe(-1)
})