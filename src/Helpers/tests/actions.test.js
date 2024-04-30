const { default: Types } = require("../../Reducers/actionTypes");
const { updateStoreData } = require("../actions");

describe("Action Tests", () => {
  it("it should return action object with showLoader=true", () => {
    expect({ type: Types.UPDATE_STORE, payload: { showLoader: true } }).toEqual(
      updateStoreData({ showLoader: true })
    );
  });
  it("it should return action object with showLoader=false", () => {
    expect({
      type: Types.UPDATE_STORE,
      payload: { showLoader: false },
    }).toEqual(updateStoreData({ showLoader: false }));
  });
  it("it should return action object with songs", () => {
    expect({
      type: Types.UPDATE_STORE,
      payload: { songs: [{ kind: "song" }] },
    }).toEqual(updateStoreData({ songs: [{ kind: "song" }] }));
  });
});
