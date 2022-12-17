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
  const onTaskChange = (value, index) => {
    if (value === "") {
      const addTaskList = [...taskList];
      addTaskList.splice(index, 1);
      setTaskList(addTaskList);
    } else {
      const newTaskList = [...taskList];
      newTaskList[index].name = value;
      setTaskList(newTaskList);
    }
  };
  return (
    <StyledWrapper>
      <AddTaskButton onClick={onAddTaskButtonClick} />

      {taskList.map((task, index) => (
        <Task
          key={index}
          onTaskComplete={(index) => onTaskComplete(index)}
          onTaskChange={(value) => onTaskChange(value, index)}
          taskName={task.name}
          defaultIsEditing={task.initializing}
        />
      ))}
    </StyledWrapper>
  );
};
export default TodoCard;
const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${COLOR.LIGHT_BLACK};
  border-radius: 4px;
  padding: 20px;
  gap: 10px;
`;
