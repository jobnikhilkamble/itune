import SagaActionTypes from "../../Sagas/sagaActionTypes";

export const dispatchSearch = (dispatch, searchedTerm) =>
  dispatch({ type: SagaActionTypes.SEARCH_SONGS, searchedTerm: searchedTerm });
