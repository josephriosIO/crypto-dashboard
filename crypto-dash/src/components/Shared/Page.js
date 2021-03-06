import React from "react";
import { AppContext } from "../../AppProvider";

export default function({ name, children }) {
  return (
    <AppContext.Consumer>
      {({ page }) => (page !== name ? null : <div>{children}</div>)}
    </AppContext.Consumer>
  );
}
