const {
  isEmptyString,
  filterResultBySongs,
  gotoURL,
  filterResultBySongsSelector,
} = require("../helpers");

describe("Testing helper methods", () => {
  it("it should return true for isEmptyString function", () => {
    let isEmpty = isEmptyString("");
    expect(isEmpty).toBe(true);
    isEmpty = isEmptyString("              ");
    expect(isEmpty).toBe(true);
  });
  it("it should return false for isEmptyString function", () => {
    const isEmpty = isEmptyString("SearchedTerm");
    expect(isEmpty).toBe(false);
  });
  it("it should return filtered array by kind===FILTER_TYPE", () => {
    const testArray = [{ kind: "movie" }, { kind: "song" }, { kind: "story" }];
    const resultArray = filterResultBySongs(testArray);
    expect(resultArray.length).toBe(1);
  });
  it("it should return empty array", () => {
    const testArray = [{ kind: "movie" }, { kind: "music" }, { kind: "story" }];
    const resultArray = filterResultBySongs(testArray);
    expect(resultArray.length).toBe(0);
  });
  it("it should open new tab", () => {
    global.open = jest.fn();
    gotoURL("Test url");
    expect(global.open).toBeCalled();
  });
  it("it should return filtered data by selector", () => {
    const testArray = [{ kind: "movie" }, { kind: "song" }, { kind: "story" }];
    const expectedResult = [{ kind: "song" }];
    expect(expectedResult).toEqual(filterResultBySongsSelector(testArray));
  });
});
