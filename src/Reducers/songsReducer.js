import { createReducer } from "reduxsauce";
import Types from "./actionTypes";

export const INITIAL_STATE = {
  error: false,
  songs: null,
  searchedTerm: null,
  showLoader: false,
  selectedLanguge: null,
};
export const updateStore = (state = INITIAL_STATE, action) => {
  return { ...state, ...action.payload };
};
export const HANDLERS = {
  [Types.UPDATE_STORE]: updateStore,
};

export default createReducer(INITIAL_STATE, HANDLERS);
