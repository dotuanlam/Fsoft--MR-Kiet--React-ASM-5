import React from "react";
import "./SCSS/TaskList.scss";
const TaskList = (props) => {
  return (
    <div className="task-list">
      <h1 className="title">Task List</h1>
      {props?.task?.map(
        (item) =>
          item.id !== null &&
          item.name !== "" &&
          item.level !== "" && (
            <div className="task-list-item" key={item.id}>
              <button className={item.level}></button>
              <span className="task-list-name">{item.name}</span>
              <button
                className="btn-delete"
                onClick={() => props.handleTaskDelete(item.id)}
              >
                Delete
              </button>
            </div>
          )
      )}
    </div>
  );
};

export default TaskList;
