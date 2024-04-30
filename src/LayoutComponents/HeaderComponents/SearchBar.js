import React from "react";

import { connect } from "react-redux";
import { Input, Row, Col } from "antd";
import { isEmptyString } from "../../Helpers/helpers";
import { dispatchSearch } from "./searchBarHelpers";
import { updateStoreData } from "../../Helpers/actions";
import { injectIntl } from "react-intl";

const { Search } = Input;

export const SearchBar = ({
  searchSongs,
  intl,
  searchedTerm,
  setSearchedTerm,
}) => (
  <Row align="middle" justify="space-around">
    <Col span={12} xs={24}>
      <div className="space-align-block">
        <Search
          placeholder={intl.formatMessage({ id: "SearchFor" })}
          onSearch={() => searchSongs(searchedTerm)}
          onChange={(e) => setSearchedTerm(e.target.value)}
          enterButton
          value={searchedTerm}
        />
      </div>
    </Col>
  </Row>
);

export const mapStateToProps = (state) => {
  const { searchedTerm } = state.songs;
  return { searchedTerm };
};

export const mapActionsToProps = (dispatch) => ({
  setSearchedTerm: (searchedTerm) =>
    dispatch(updateStoreData({ searchedTerm: searchedTerm })),
  searchSongs: (searchedTerm) => {
    if (!isEmptyString(searchedTerm)) {
      dispatchSearch(dispatch, searchedTerm);
    }
  },
});

export default connect(
  mapStateToProps,
  mapActionsToProps
)(injectIntl(SearchBar));
