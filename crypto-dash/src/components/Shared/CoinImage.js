import React from "react";
import styled, { css } from "styled-components";

const CoinImg = styled.img`
  height: 50px;
  ${props =>
    props.spotlight &&
    css`
      height: 200px;
      margin: auto;
      display: block;
    `}
`;

export default function({ coin, spotlight }) {
  return (
    <CoinImg
      spotlight={spotlight}
      alt={coin.CoinSymbol}
      src={`https://cryptocompare.com/${coin.ImageUrl}`}
    />
  );
}
