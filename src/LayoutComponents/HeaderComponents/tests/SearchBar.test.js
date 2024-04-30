import React from "react";
import renderer from "react-test-renderer";
import { SearchBar, mapStateToProps } from "../SearchBar";
import { Input } from "antd";
const { Search } = Input;

export const mockIntlObject = { formatMessage: (value) => {} };

describe("SearchBar Tests", () => {
  let searchedTerm;
  beforeEach(() => {
    searchedTerm = "Test Search";

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

  it("it should render search bar", () => {
    const tree = renderer
      .create(<SearchBar intl={mockIntlObject} searchedTerm={searchedTerm} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
  it("it should call searchSongs onSearch", () => {
    const mockOnSearch = (searchedTermValue) => {
      expect(searchedTermValue).toBe(searchedTerm);
    };
    const rootComponent = renderer.create(
      <SearchBar
        intl={mockIntlObject}
        searchedTerm={searchedTerm}
        searchSongs={mockOnSearch}
      />
    ).root;
    const searchField = rootComponent.findByType(Search);
    searchField.props.onSearch();
  });

  it("it should call setSearchedTerm onChange", () => {
    const mockSetSearchedTerm = (searchedTermValue) => {
      expect(searchedTermValue).toBe(searchedTerm);
    };

    const rootComponent = renderer.create(
      <SearchBar
        searchedTerm={searchedTerm}
        intl={mockIntlObject}
        setSearchedTerm={mockSetSearchedTerm}
      />
    ).root;
    const searchField = rootComponent.findByType(Search);
    searchField.props.onChange({ target: { value: searchedTerm } });
  });

  it("it should return mapStateToProps object", () => {
    const state = mapStateToProps({ songs: { searchedTerm: "Test Search" } });
    expect({ searchedTerm: "Test Search" }).toEqual(state);
  });
});
