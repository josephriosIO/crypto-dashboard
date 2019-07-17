import React from "react";
import { AppContext } from "../../AppProvider";
import { SelectableTile } from "../Shared/Tile";
import CoinHeaderGrid from "./CoinHeaderGrid";
import CoinImage from "../Shared/CoinImage";

export default function({ coinKey }) {
  return (
    <AppContext.Consumer>
      {({ coinList }) => {
        const TileClass = SelectableTile;
        let coin = coinList[coinKey];

        return (
          <TileClass>
            <CoinHeaderGrid name={coin.CoinName} symbol={coin.Symbol} />
            <CoinImage coin={coin} />
          </TileClass>
        );
      }}
    </AppContext.Consumer>
  );
}
