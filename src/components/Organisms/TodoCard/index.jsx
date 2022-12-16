import React, { useState } from "react";
import styled from "styled-components";
import Task from "../../Molecules/Task";
import AddTaskButton from "../../Atoms/AddTaskButton";
import COLOR from "../../../variables/color";
const TodoCard = () => {
  const [taskList, setTaskList] = useState([]);
  const onAddTaskButtonClick = () => {
    const todoTask = {
      name: "",
      initializing: true,
    };
    setTaskList(taskList.concat(todoTask));
  };
  const onTaskComplete = (index) => {
    const deletedTodoList = [...taskList];
    deletedTodoList.splice(index, 1);
    setTaskList(deletedTodoList);
  };
  const onTaskNameChange = (value, index) => {};
  return (
    <StyledWrapper>
      <AddTaskButton onClick={onAddTaskButtonClick} />
      <StyledTaskList>
        {taskList.map((task, index) => (
          <Task
            key={index}
            onTaskComplete={(index) => onTaskComplete(index)}
            onTaskNameChange={(value) => onTaskNameChange(value, index)}
            taskName={task.name}
            defaultIsEditing={task.initializing}
          />
        ))}
      </StyledTaskList>
    </StyledWrapper>
  );
};
export default TodoCard;
const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${COLOR.LIGHT_BLACK};
  border-radius: 4px;
  padding: 20px;
  gap: 10px;
`;
const StyledTaskList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2px 6px;
  gap: 10px;
  align-self: stretch;
`;
