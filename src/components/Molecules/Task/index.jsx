import React, { useState } from "react";
import styled from "styled-components";
import Input from "../../Atoms/Input";
import Checkbox from "../../Atoms/Checkbox";
import EditButton from "../../Atoms/EditButton";
const Task = ({ onTaskChange, onTaskComplete, taskName, defaultIsEditing }) => {
  const [isEditing, setisEditing] = useState(defaultIsEditing);
  const onClickGreeting = () => {
    setisEditing(!isEditing);
  };

  return (
    <StyledWrapper>
      <StyledCheckboxWrapper>
        <Checkbox onClick={onTaskComplete} />
      </StyledCheckboxWrapper>
      {isEditing && (
        <Input
          defaultValue={taskName}
          onEditComplete={(onTaskChange, onClickGreeting)}
        />
      )}
      {!isEditing && (
        <StyledNameAndButtonWrapper>
          <StyledTaskName>{taskName}</StyledTaskName>
          <EditButton onClick={onClickGreeting} />
        </StyledNameAndButtonWrapper>
      )}
    </StyledWrapper>
  );
};

export default Task;
const StyledWrapper = styled.div`
  display: flex;
`;
const StyledCheckboxWrapper = styled.div`
  margin-right: 10px;
`;
const StyledNameAndButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
const StyledTaskName = styled.div`
  font-family: Noto Sans JP;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: #b8b8b8;
`;
