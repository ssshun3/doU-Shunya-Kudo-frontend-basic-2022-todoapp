import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";
import plus from "../../../assets/svg/plus.svg";

const AddTaskButton = ({ onClick }) => {
  return (
    <StyledAddTaskButton onClick={onClick}>
      <StyledCircle />
      <Styledflex>
        <StyledImg src={plus} />
        <StyledText>タスクを追加</StyledText>
      </Styledflex>
    </StyledAddTaskButton>
  );
};
export default AddTaskButton;

const StyledAddTaskButton = styled.div`
  cursor: pointer;
  position: relative;
  width: fit-content;
`;
const StyledCircle = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  border-radius: 12px;
  &:hover {
    background-color: ${COLOR.GREEN};
    opacity: 0.2;
  }
`;
const Styledflex = styled.div`
  display: flex;
  padding: 2px 6px;
`;
const StyledImg = styled.img`
  height: 20px;
`;
const StyledText = styled.div`
  color: ${COLOR.GREEN};
  ${TEXT.S}
  margin-left:10px;
`;
