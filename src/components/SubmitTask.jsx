import React, { useState } from "react";

const SubmitTask = (props) => {
  const handleDelete = () => {
    props.onDelete(props.id);
  };

  return (
    <>
      <div className="container">
        <div className="task-container">
          <div className="add-tasks">
            <div className="custom-checkbox">
              <input
                id={`input-${props.id}`}
                type="checkbox"
                className="check-input"
              />
              <label htmlFor={`input-${props.id}`} className="checkbox">
                <svg viewBox="0 0 22 16" fill="none">
                  <path d="M1 6.85L8.09677 14L21 1" />
                </svg>
              </label>
            </div>

            <div className="task">
              <p className="task-title">{props.title}</p>
            </div>
          </div>
        </div>
        <div>
          <div className="delete-btn-container">
            <button className="delete-btn" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubmitTask;
