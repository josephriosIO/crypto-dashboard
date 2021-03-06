import React from "react";
import styled, { css } from "styled-components";
import { AppContext } from "./AppProvider";

const Bar = styled.div`
  display: grid;
  margin-bottom: 40px;
  grid-template-columns: 180px auto 80px 80px;
`;

const Logo = styled.div`
  font-size: 1.5rem;
`;

const ControlBtnElem = styled.div`
  cursor: pointer;
  ${props =>
    props.active &&
    css`
      text-shadow: 0px 0px 60px #45b3e7;
    `}
`;

function lowerCase(name) {
  return name.charAt(0).toUpperCase() + name.substr(1);
}

function ControlButton({ name, active }) {
  return (
    <AppContext.Consumer>
      {({ page, setPage }) => (
        <ControlBtnElem active={page === name} onClick={() => setPage(name)}>
          {lowerCase(name)}
        </ControlBtnElem>
      )}
    </AppContext.Consumer>
  );
}

export default function() {
  return (
    <Bar>
      <Logo>Crypto Look</Logo>
      <div />
      <ControlButton active name="dashboard" />
      <ControlButton name="settings" />
    </Bar>
  );
}
