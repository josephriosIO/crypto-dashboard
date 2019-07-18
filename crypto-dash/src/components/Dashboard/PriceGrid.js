import React from "react";
import styled from "styled-components";
import PriceTile from "./PriceTile";
import { AppContext } from "../../AppProvider";

const PriceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  grid-gap: 15px;
  margin-top: 40px;
`;

export default function() {
  return (
    <AppContext.Consumer>
      {({ prices }) => (
        <PriceGrid>
          {prices
            ? prices.map((price, index) => (
                <PriceTile index={index} price={price} />
              ))
            : null}
        </PriceGrid>
      )}
    </AppContext.Consumer>
  );
}
