import React from "react";
import { connect } from "react-redux";
import Grid from "./BodyComponents/Grid";
import Loader from "./BodyComponents/Loader";
import EmptyMessage from "./BodyComponents/EmptyMessage";
import WelcomeMessage from "./BodyComponents/WelcomeMessage";
import ErrorMessage from "./BodyComponents/ErrorMessage";
import { filterResultBySongsSelector } from "../Helpers/helpers";
export const Body = ({ songs, error, searchedTerm, showLoader }) => (
  <>
    {showLoader && <Loader />}
    {songs && songs.length > 0 && !error ? (
      <Grid songs={songs} />
    ) : error ? (
      <div className="place_vertical_canter">
        <ErrorMessage msg="Something went wrong!" />
      </div>
    ) : (
      <div className="place_vertical_canter">
        {songs && songs.length === 0 ? (
          <EmptyMessage msg="Songs Not Found For Searched Term" />
        ) : (
          <center>
            <WelcomeMessage />
          </center>
        )}
      </div>
    )}
  </>
);
export default connect((state) => {
  const { data, error, searchedTerm, showLoader } = state.songs;
  return {
    songs: data && filterResultBySongsSelector(data),
    searchedTerm,
    error,
    showLoader,
  };
})(Body);
