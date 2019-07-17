import React from "react";
import styled from "styled-components";
import { backgroundColor2, fontSize2 } from "../Shared/Styles";
const SearchGrid = styled.div`
  display: grid;
  grid-template-columns: 150px 1fr;
  padding: 40px 10px;
  justify-items: center;
  justify-content: center;
`;

const SearchInput = styled.input`
  ${backgroundColor2};
  ${fontSize2};
  border: 1px solid;
  height: 25px;
  color: #45b3e7;
  place-self: center left;
`;

const Label = styled.h2`
  padding-right: 15px;
`;

export default function() {
  return (
    <SearchGrid>
      <Label>Search All Coins</Label>
      <SearchInput />
    </SearchGrid>
  );
}
