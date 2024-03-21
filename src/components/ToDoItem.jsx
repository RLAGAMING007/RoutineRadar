import React, { useState } from "react";
import SubmitTask from "./SubmitTask";
import AddIcon from "@mui/icons-material/Add";

const ToDoItem = (props) => {
  const [addTaskField, setAddTaskField] = useState(false);

  const [task, setTask] = useState({
    title: "",
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
                  <textarea
                    name="title"
                    className="taskTitle-txt"
                    value={task.title}
                    placeholder="Task"
                    onChange={HandleChange}
                    cols="10"
                    rows="3"
                  ></textarea>
                  {/* <input
                    name="title"
                    className="taskTitle-txt"
                    value={task.title}
                    placeholder="Task"
                    onChange={HandleChange}
                  /> */}
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
