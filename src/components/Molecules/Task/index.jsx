import React, { useState } from "react";
import styled from "styled-components";
import Input from "../../Atoms/Input";
import Checkbox from "../../Atoms/Checkbox";
import EditButton from "../../Atoms/EditButton";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";
const Task = ({ onTaskChange, onTaskComplete, taskName, defaultIsEditing }) => {
  const [isEditing, setIsEditing] = useState(defaultIsEditing);

  const onEditComplete = (value) => {
    setIsEditing(!isEditing);
    onTaskChange(value);
  };
  const onSwitchFunction = () => {
    setIsEditing(!isEditing);
  };
  return (
    <StyledWrapper>
      <StyledCheckboxWrapper>
        <Checkbox onClick={onTaskComplete} />
      </StyledCheckboxWrapper>
      {isEditing ? (
        <Input defaultValue={taskName} onEditComplete={onEditComplete} />
      ) : (
        <StyledNameAndButtonWrapper>
          <StyledTaskName>{taskName}</StyledTaskName>
          <EditButton onClick={onSwitchFunction} />
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
  color: ${COLOR.LIGHT_GRAY};
  ${TEXT.S}
`;
