import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import pencil from "../../../assets/svg/pencil.svg";

const EditButton = ({ onClick }) => {
  return (
    <StyledEditButton onClick={onClick}>
      <StyledCircle />
      <StyledImg src={pencil} />
    </StyledEditButton>
  );
};
const StyledEditButton = styled.button`
  width: 15px;
  height: 15px;
  background: rgba(255, 255, 255, 0);
  border: none;
  padding: 0;
  cursor: pointer;
`;
const StyledCircle = styled.div`
  position: absolute;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  &:hover {
    background-color: ${COLOR.LIGHT_GRAY};
    opacity: 0.2;
  }
`;
const StyledImg = styled.img`
  width: 15px;
  height: 15px;
`;

export default EditButton;
