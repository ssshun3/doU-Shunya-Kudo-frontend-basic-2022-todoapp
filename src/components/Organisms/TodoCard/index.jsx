import React, { useState } from "react";
import styled from "styled-components";
import Task from "../../Molecules/Task";
import AddTaskButton from "../../Atoms/AddTaskButton";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";
const TodoCard = () => {
  return (
    <StyledWrapper>
      <AddTaskButton />
      <StyledTaskList>
        <Task />
      </StyledTaskList>
    </StyledWrapper>
  );
};
export default TodoCard;
const StyledWrapper = styled.div``;
const StyledTaskList = styled.div``;
