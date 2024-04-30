import fetchSongsWatcher, { fetchSongsWorker } from "../saga";
import sinon from "sinon";
import SagaActionTypes from "../sagaActionTypes";
import * as api from "../../Services/songs";

import { cloneableGenerator } from "@redux-saga/testing-utils";

import { takeEvery, put, call } from "redux-saga/effects";
import { updateStoreData } from "../../Helpers/actions";
import { mockResponse } from "../../Constants/constants";
import { searchSongsApi } from "../../Services/songs";

describe("Saga TestCases", () => {
  afterEach(function () {
    sinon.restore();
  });

  it("it should call fetchSongsWorker", () => {
    const actionObject = { searchedTerm: "Test Search Term" };
    const generator = cloneableGenerator(fetchSongsWatcher)(actionObject);
    expect(generator.next().value).toEqual(
      takeEvery(SagaActionTypes.SEARCH_SONGS, fetchSongsWorker)
    );
  });

  it("it should call setShowLoader", () => {
    const actionObject = { searchedTerm: "Test Search Term" };
    const generator = cloneableGenerator(fetchSongsWorker)(actionObject);
    expect(generator.next().value).toEqual(
      put(updateStoreData({ showLoader: true }))
    );
  });

  it("it should call searchSong api", () => {
    const actionObject = { searchedTerm: "Test Search Term" };
    const generator = cloneableGenerator(fetchSongsWorker)(actionObject);
    generator.next();
    expect(generator.next().value).toEqual(
      call(searchSongsApi, actionObject.searchedTerm)
    );
  });

  it("it should call setSearchedTermAction and setSongsAction", async () => {
    const actionObject = { searchedTerm: "Test Search Term" };
    const generator = cloneableGenerator(fetchSongsWorker)(actionObject);
    sinon.stub(api, "searchSongsApi").callsFake(() => mockResponse);
    generator.next();
    generator.next();
    searchSongsApi.calledWith("Sample Search");
    const expectedObject = generator.next(mockResponse).value;
    const actualObject = put(updateStoreData({ songs: mockResponse }));
    expect(expectedObject.payload.action.type).toEqual(
      actualObject.payload.action.type
    );
  });
  it("it should hide loadder  and show error", () => {
    const actionObject = { searchedTerm: "Test Search Term" };
    const generator = cloneableGenerator(fetchSongsWorker)(actionObject);
    sinon.stub(api, "searchSongsApi").callsFake(() => undefined);
    generator.next();
    generator.next();
    searchSongsApi.calledWith("Sample Search");
    const actualObject = generator.next(undefined).value;
    const expectedObject = put(updateStoreData({ error: "No Response Found" }));
    expect(expectedObject).toEqual(actualObject);
  });
});
