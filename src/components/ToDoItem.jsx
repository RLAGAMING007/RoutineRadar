import React, { useState } from "react";
import SubmitTask from "./SubmitTask";
import AddIcon from "@mui/icons-material/Add";
import { Cancel } from "@mui/icons-material";

const ToDoItem = (props) => {
  const [addTaskField, setAddTaskField] = useState(false);

  const [task, setTask] = useState({
    title: "",
    discription: "",
  });

  const HandleChange = (e) => {
    const { name, value } = e.target;

    setTask((prevTask) => {
      return {
        ...prevTask,
        [name]: value,
      };
    });
    console.log(e.target.value);
  };

  const SubmitTask = (e) => {
    props.onAdd(task);
    setTask({
      title: "",
      discription: "",
    });

    e.preventDefault();
  };

  const HandleClick = () => {
    setAddTaskField(!addTaskField);
  };
  const HandleCancelTask = () => {
    setAddTaskField(!addTaskField);
    setTask({
      title: "",
      discription: "",
    });
  };

  return (
    <>
      <div>
        <div className="xwrapper">
          <div className="container">
            {addTaskField == true ? (
              <div className="todoList">
                <div className="taskTitle">
                  <input
                    name="title"
                    className="taskTitle-txt"
                    value={task.title}
                    placeholder="Task"
                    onChange={HandleChange}
                  />
                </div>
                <div className="discription">
                  <textarea
                    name="discription"
                    className="content"
                    value={task.discription}
                    placeholder="discription"
                    onChange={HandleChange}
                    row="3"
                  />
                </div>
                <div className="buttons">
                  <button onClick={HandleCancelTask} className="cancel-btn">
                    Cancel
                  </button>
                  <button onClick={SubmitTask} className="addTask-btn">
                    Add Task
                  </button>
                </div>
              </div>
            ) : (
              <div className="add-button-container">
                <button className="add-button" onClick={HandleClick}>
                  <span className="addIcon">
                    <AddIcon />
                  </span>
                  Add Task
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ToDoItem;
