import React from "react";
import styled from "styled-components";
import { AppContext } from "../../AppProvider";
import { fontSize1, blueBoxShadow } from "../Shared/Styles";

const ConfirmBtnStyled = styled.div`
  color: #45b3e7;
  ${fontSize1};
  margin: 20px;
  padding: 5px;
  cursor: pointer;
  &:hover {
    ${blueBoxShadow}
  }
`;

export const CenterDiv = styled.div`
  display: grid;
  justify-content: center;
`;

export default function() {
  return (
    <AppContext.Consumer>
      {({ confirmFavs }) => (
        <CenterDiv>
          <ConfirmBtnStyled onClick={confirmFavs}>
            Confirm Favorites
          </ConfirmBtnStyled>
        </CenterDiv>
      )}
    </AppContext.Consumer>
  );
}
