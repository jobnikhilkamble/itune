import { call, put, takeEvery } from "redux-saga/effects";
import SagaActionTypes from "./sagaActionTypes";
import { searchSongsApi } from "../Services/songs";
import { updateStoreData } from "../Helpers/actions";

export function* fetchSongsWorker(action) {
  try {
    const { searchedTerm } = action;

    yield put(updateStoreData({ showLoader: true }));
    const response = yield call(searchSongsApi, searchedTerm);
    if (response) {
      yield put(
        updateStoreData({ data: response, searchedTerm: "", showLoader: false })
      );
    } else {
      throw new Error("No Response Found");
    }
  } catch (e) {
    yield put(updateStoreData({ error: e.message,showLoader:false }));
    
  }
}

function* fetchSongsWatcher() {
  yield takeEvery(SagaActionTypes.SEARCH_SONGS, fetchSongsWorker);
}

export default fetchSongsWatcher;
