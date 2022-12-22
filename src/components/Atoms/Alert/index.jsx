import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";
import BREAKPOINT from "../../../variables/breakpoint";

const Alert = ({ alertMessage, isActive }) => {
  return <StyledAlertText isActive={isActive}>{alertMessage}</StyledAlertText>;
};
export default Alert;
const StyledAlertText = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 80px;
  margin: auto;
  background-color: ${COLOR.RED};
  border-radius: 4px;
  padding: 10px 20px;
  color: ${COLOR.WHITE};
  width: 400px;
  ${TEXT.S};
  @media screen and (max-width: ${BREAKPOINT.MEDIUM}) {
    width: 100%;
    top: 40px;
  }
  transition: 0.5s;
  ${(props) =>
    props.isActive
      ? `transform:  translateY(0);
    opacity: 1;
  `
      : ` transform: translateY(-20px);
opacity: 0;`};
`;
