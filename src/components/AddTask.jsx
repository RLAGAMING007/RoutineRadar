import React from "react";

const AddTask = (props) => {
  return (
    <>
      <div className="container">
        <div className="task-container">
          <div className="add-tasks">
            <div class="custom-checkbox">
              <input type="checkbox" />
            </div>
            <div className="task">
              <h2>{props.title}</h2>

              <p>{props.discription}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddTask;
