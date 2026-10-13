import { normalizeHexColor } from "@snapotter/shared";
import { describe, expect, it } from "vitest";

describe("normalizeHexColor", () => {
  it.each([
    ["#FF5500", "#ff5500"],
    ["F50", "#ff5500"],
    ["#f50", "#ff5500"],
  ])("%s -> %s", (input, expected) => {
    expect(normalizeHexColor(input)).toBe(expected);
  });

  it.each(["red", "#ff", "#ff00000", "", "#ff0000 "])("throws on %j", (input) => {
    expect(() => normalizeHexColor(input)).toThrow(/Not a hex color/);
  });
});
