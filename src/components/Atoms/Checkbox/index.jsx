import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import check from "../../../assets/svg/check.svg";

const Checkbox = ({ onClick }) => {
  return (
    <StyledCheckbox onClick={onClick}>
      <img src={check} />
    </StyledCheckbox>
  );
};
export default Checkbox;
const StyledCheckbox = styled.div`
  position: relative;
  height: 20px;
  width: 20px;
  border-radius: 2px;
  border: 2px solid ${COLOR.LIGHT_GRAY};
  cursor: pointer;
  img {
    position: absolute;
    visibility: hidden;
    width: 100%;
    height: 100%;
  }
  &:hover img {
    visibility: visible;
  }
`;
