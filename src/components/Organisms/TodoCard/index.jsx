import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Task from "../../Molecules/Task";
import AddTaskButton from "../../Atoms/AddTaskButton";
import COLOR from "../../../variables/color";
import { useAlertHandlerContext } from "../../../contexts/alert_handler";
const TodoCard = () => {
  const AlertHandlerContext = useAlertHandlerContext();
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
      AlertHandlerContext.setAlert("タスクの名前が設定されていません");
    } else {
      const newTaskList = [...taskList];
      newTaskList[index].name = value;
      newTaskList[index].initializing = false;
      setTaskList(newTaskList);
    }
  };
  useEffect(() => {
    if (JSON.parse(window.localStorage.getItem("taskList")) === null) return;
    setTaskList(JSON.parse(window.localStorage.getItem("taskList")));
  }, []);
  useEffect(() => {
    window.localStorage.setItem("taskList", JSON.stringify(taskList));
  }, [taskList]);
  return (
    <StyledWrapper>
      <AddTaskButton onClick={onAddTaskButtonClick} />

      {taskList.map((task, index) => (
        <Task
          key={index}
          onTaskComplete={() => onTaskComplete(index)}
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
