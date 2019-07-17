import React from "react";
import { AppContext } from "../../AppProvider";
import { SelectableTile, DisbledTile, DeletableTile } from "../Shared/Tile";
import CoinHeaderGrid from "./CoinHeaderGrid";
import CoinImage from "../Shared/CoinImage";

export default function({ coinKey, topSection }) {
  return (
    <AppContext.Consumer>
      {({ coinList }) => {
        let TileClass = SelectableTile;
        if (topSection) {
          TileClass = DeletableTile;
        }
        let coin = coinList[coinKey];

        return (
          <TileClass>
            <CoinHeaderGrid
              topSection={topSection}
              name={coin.CoinName}
              symbol={coin.Symbol}
            />
            <CoinImage coin={coin} />
          </TileClass>
        );
      }}
    </AppContext.Consumer>
  );
}
