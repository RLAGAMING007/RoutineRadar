import React, { useState } from "react";

const ToDoItem = (props) => {
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

  return (
    <>
      <div>
        <div className="xwrapper">
          <div className="container">
            <header className="nav"></header>
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
                <button className="cancel-btn">Cancel</button>
                <button onClick={SubmitTask} className="addTask-btn">
                  Add Task
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToDoItem;
