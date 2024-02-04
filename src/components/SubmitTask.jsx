import React from "react";

const SubmitTask = (props) => {
  return (
    <>
      <div className="container">
        <div className="task-container">
          <div className="add-tasks">
            <div class="custom-checkbox">
              <input type="checkbox" id="input-1" className="check-input" />

              <label htmlFor="input-1" className="checkbox">
                <svg viewBox="0 0 22 16" fill="none">
                  <path d="M1 6.85L8.09677 14L21 1" />
                </svg>
              </label>
            </div>
            <div className="task">
              <h4>{props.title}</h4>

              <p>{props.discription}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubmitTask;
