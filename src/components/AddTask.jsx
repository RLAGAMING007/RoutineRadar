import React from "react";

const AddTask = (props) => {
  return (
    <>
      <div>
        <div className="task-container">
          <div className="add-tasks">
            <div className="form-check-input">
              <input type="checkbox" value="" id="flexCheckDefault" />
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
