import React from "react";
import styled, { css } from "styled-components";

const Bar = styled.div`
  display: grid;
  margin-bottom: 40px;
  grid-template-columns: 180px auto 100px 100px;
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
  return <ControlBtnElem active={active}>{lowerCase(name)}</ControlBtnElem>;
}

export default function() {
  return (
    <Bar>
      <Logo>Crypto Look</Logo>
      <div />
      <ControlButton active name="Dashboard" />
      <ControlButton name="Settings" />
    </Bar>
  );
}
