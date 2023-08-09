import { describe, expect, test } from "@jest/globals";
import { divide } from "./divide";

describe("divide module", () => {
  test("divides 4 / 2 to equal 2", () => {
    expect(divide(4, 2)).toBe(2);
  });
});
