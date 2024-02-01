import React, { useState } from "react";
import ToDoItem from "./components/ToDoItem";
import AddTask from "./components/AddTask";

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
          <AddTask
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
