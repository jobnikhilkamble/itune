import React from "react";
import { Empty } from "antd";

const ErrorMessage = ({ msg }) => (
  <Empty description={msg} className="empty_message" />
);

export default ErrorMessage;
