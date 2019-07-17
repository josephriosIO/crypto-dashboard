import React from "react";
import ConfirmButton from "./ConfirmButton";
import CoinGrid from "./CoinGrid";
import { AppContext } from "../../AppProvider";
import Page from "../Shared/Page";
import Search from "./Search";

export default function() {
  return (
    <Page name="settings">
      <AppContext.Consumer>
        {({ firstVisit }) =>
          firstVisit ? (
            <h1>Welcome to Crypto Look, please select your favorite coins.</h1>
          ) : null
        }
      </AppContext.Consumer>
      <CoinGrid topSection />
      <ConfirmButton />
      <Search />
      <CoinGrid />
    </Page>
  );
}
