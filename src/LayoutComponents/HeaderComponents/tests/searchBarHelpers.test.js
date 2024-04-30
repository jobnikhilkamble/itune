const { dispatchSearch } = require("../searchBarHelpers");

describe("SearchBar Helpers Tests", () => {
  it("it should call dispatch to call sarch api", () => {
    const dispatch = jest.fn();
    dispatchSearch(dispatch, "Test Term");
    expect(dispatch).toBeCalled();
  });
});
