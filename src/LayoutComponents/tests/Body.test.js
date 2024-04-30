import React from "react";
import renderer from "react-test-renderer";
import { Body } from "../Body";
import Grid from "../BodyComponents/Grid";
import ErrorMessage from "../BodyComponents/ErrorMessage";
import Loader from "../BodyComponents/Loader";

describe("Body Tests", () => {
  beforeEach(() => {
    // mocking window object
    window.matchMedia =
      window.matchMedia ||
      function () {
        return {
          matches: false,
          addListener: function () {},
          removeListener: function () {},
        };
      };
  });
  it("it should render Body Component", () => {
    const songs = [
      {
        trackName: "Test Track",
        collectionName: "Collection Name",
      },
      {
        trackName: "Test Track",
        collectionName: "Collection Name",
      },
    ];
    const tree = renderer.create(<Body songs={songs} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("it should render list ", () => {
    const songs = [
      {
        trackName: "Test Track",
        collectionName: "Collection Name",
      },
      {
        trackName: "Test Track",
        collectionName: "Collection Name",
      },
    ];
    const rootComponent = renderer.create(<Body songs={songs} />).root;
    const grid = rootComponent.findByType(Grid);
    expect(grid).toBeTruthy();
  });
  it("it should render ErrorComponent", () => {
    const rootComponent = renderer.create(<Body error={true} />).root;
    const errorMessageComponent = rootComponent.findByType(ErrorMessage);
    expect(errorMessageComponent).toBeTruthy();
  });
});
