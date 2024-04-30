import React from "react";
import { Empty } from "antd";
import { injectIntl } from "react-intl";

const EmptyMessage = ({ msg, intl }) => (
  <Empty
    description={intl.formatMessage({id:'SongNotFound',value:msg})}
    className="empty_message"
    image={Empty.PRESENTED_IMAGE_SIMPLE}
  />
);

export default injectIntl(EmptyMessage);
