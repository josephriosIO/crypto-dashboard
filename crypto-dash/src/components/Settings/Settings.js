import React from "react";
import ConfirmButton from "./ConfirmButton";
import { AppContext } from "../../AppProvider";

export default function() {
  return (
    <div>
      <AppContext.Consumer>
        {({ firstVisit }) =>
          firstVisit ? (
            <h1>Welcome to Crypto Look, please select your favorite coins.</h1>
          ) : null
        }
      </AppContext.Consumer>

      <ConfirmButton />
    </div>
  );
}
