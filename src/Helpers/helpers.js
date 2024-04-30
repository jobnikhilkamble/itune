import { FILTER_TERM } from "../Constants/constants";
import { createSelector } from "reselect";

export const isEmptyString = (term) =>
  term === "" || term.replace(/ /g, "").length === 0;

export const gotoURL = (url) => window.open(url, "_blank");

export const filterResultBySongs = (items=[]) =>
  items.filter((item) => item.kind === FILTER_TERM);

export const filterResultBySongsSelector = createSelector(
  (state) => state,
  (state) => filterResultBySongs(state)
);

