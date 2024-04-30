import React from "react";
import GridItem from "./GridItem";
import { List } from "antd";

const Grid = ({ songs = [] }) => (
  <div style={{ padding: 50}}>
    <List
      itemLayout="horizontal"
      dataSource={songs}
      renderItem={(songItem) => <GridItem song={songItem} />}
    />
  </div>
);
export default Grid;
