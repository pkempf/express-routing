const { getMean, getMedian, getMode } = require("./helpers");

describe("#getMean", () => {
  it("gets the mean of an array of numbers", () => {
    expect(getMean([-20, -5, 10, 25, 30])).toEqual(8);
  });
  it("returns null for an array with zero length", () => {
    expect(getMean([])).toBeNull();
  });
});

describe("#getMedian", () => {
  it("gets the median of an array with even length", () => {
    expect(getMedian([-4, 12, -2, 0, -9, 3])).toEqual(-1);
  });
  it("gets the median of an array with odd length", () => {
    expect(getMedian([20, -15, 360, 17, -42])).toEqual(17);
  });
  it("returns null for an array with zero length", () => {
    expect(getMedian([])).toBeNull();
  });
});

describe("#getMode", () => {
  it("gets the mode from an array of numbers", () => {
    expect(getMode([0, -5, 10, 10, 5])).toEqual(10);
  });
  it("returns null for an array with zero length", () => {
    expect(getMode([])).toBeNull();
  });
});
