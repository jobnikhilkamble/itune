import React from "react";
import renderer from "react-test-renderer";

import GridItem from "../GridItem";
import { Avatar } from "antd";
import UserImage from "../../../Assests/Images/user.png";


describe("Grid Item Tests", () => {
  it("Renders Grid Item", () => {
    const sognObject = {
      trackName: "Test Track",
      collectionName: "Collection Name",
    };
    const tree = renderer.create(<GridItem song={sognObject} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("It should render  avatar with image", () => {
    const sognObject = {
      trackName: "Test Track",
      collectionName: "Collection Name",
      artworkUrl30: "Sample Url",
    };

    const rootComponent = renderer.create(<GridItem song={sognObject} />).root;

    const avatar = rootComponent.findByType(Avatar);
    expect(avatar.props.src).toBe("Sample Url");
  });

  it("It should show dummy image for undefined value", () => {
    const sognObject = {
      trackName: "Test Track",
      collectionName: "Collection Name",
      artworkUrl30: "",
    };

    const rootComponent = renderer.create(<GridItem song={sognObject} />).root;
    const avatar = rootComponent.findByType(Avatar);
    expect(avatar.props.src).toBe(UserImage);
  });
});
