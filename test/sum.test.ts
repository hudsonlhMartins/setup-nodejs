import { sum } from "../src/sum";

describe("", () => {
  it("should add 1 + 2 to equal 3", () => {
    const res = sum(1, 2);
    expect(res).toBe(3);
  });
});
