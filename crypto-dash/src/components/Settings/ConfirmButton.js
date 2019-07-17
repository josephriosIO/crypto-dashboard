import React from "react";
import styled from "styled-components";
import { AppContext } from "../../AppProvider";

const ConfirmBtnStyled = styled.div`
  color: #45b3e7;
  margin: 20px;
  cursor: pointer;
`;

export default function() {
  return (
    <AppContext.Consumer>
      {({ confirmFavs }) => (
        <ConfirmBtnStyled onClick={confirmFavs}>
          Confirm Favorites
        </ConfirmBtnStyled>
      )}
    </AppContext.Consumer>
  );
}
