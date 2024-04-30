import React from "react";
import renderer from "react-test-renderer";

import Loader from "../Loader";

describe("LoaderComponent Tests", () => {
  test("renders a message", () => {
    const tree = renderer.create(<Loader />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
