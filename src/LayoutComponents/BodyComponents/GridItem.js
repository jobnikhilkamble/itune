import React from "react";
import { List, Avatar, Divider } from "antd";
import { gotoURL } from "../../Helpers/helpers";
import UserImage from "../../Assests/Images/user.png";

const GridItem = ({ song }) => (
  <List.Item
    className="grid-item"
    onClick={() => gotoURL(song.collectionViewUrl)}
  >
    <List.Item.Meta
      avatar={<Avatar size="large" src={song.artworkUrl30 || UserImage} />}
      title={<span>{song.trackName}</span>}
      description={song.collectionName}
    />
    <Divider type="vertical" />
  </List.Item>
);

export default GridItem;
