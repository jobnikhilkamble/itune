import React from 'react'
import { FormattedMessage } from 'react-intl'

export const PageNotFound = () => {
    return (
      <div className="place_vertical_canter">
        <center>
          <h1>
            <FormattedMessage id="PageNotFound"/>
          </h1>
        </center>
      </div>
    );
}

export default PageNotFound