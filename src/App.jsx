import React, { useState } from "react";
import ToDoItem from "./components/ToDoItem";
import { Route, Routes } from "react-router-dom";
import SubmitTask from "./components/SubmitTask";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks((prevTasks) => {
      return [...prevTasks, newTask];
    });
  };

  return (
    <>
      <ToDoItem onAdd={addTask} />
      {tasks.map((taskItem, index) => {
        return (
          <SubmitTask
            key={index}
            id={index}
            title={taskItem.title}
            discription={taskItem.discription}
          />
        );
      })}
    </>
  );
};

export default App;
