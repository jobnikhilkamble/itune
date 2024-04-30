import React from "react";
import { Spin} from "antd";


const Loader = () => (
  <div className="overlay">
    <div className="loader">
      <Spin size="large"  />
    </div>
  </div>
);

export default Loader;
