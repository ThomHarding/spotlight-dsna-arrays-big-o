const { push, pop, shift } = require("./index.js");

describe("push", () => {
  it("should add an element to an array", () => {
    const arr = ["a", "b", "c"];
    expect(push(arr, "d")).toBe(4);
    expect(arr.length).toBe(4);
    expect(arr[3]).toBe("d");
  });

  it("should return the item removed from the array", () => {
    const arr = ["a", "b", "c"];
    expect(pop(arr)).toBe("c");
    expect(arr.length).toBe(2);
  });
});

describe("shift", () => {

  it("should return the item removed from the array", () => {
    const arr = ["a", "b", "c"];
    expect(shift(arr)).toBe("a");
    expect(arr.length).toBe(2);
    expect(arr).toEqual(["b", "c"]);
  });
});