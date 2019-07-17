import React from "react";
import { AppContext } from "../../AppProvider";

export default function(props) {
  return (
    <AppContext.Consumer>
      {({ coinList }) =>
        !coinList ? <div> Loading Coins</div> : <div>{props.children}</div>
      }
    </AppContext.Consumer>
  );
}
