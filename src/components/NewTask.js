import React, { useState } from "react";
import LevelIcon from "./LevelIcon";
import DatePicker from "react-date-picker";
import "./SCSS/NewTask.scss";

function NewTask(props) {
  const [name, setName] = useState("");
  const [level, setLevel] = useState("");

  return (
    <div className="new-task">
      <div className="title">
        <h1>New Task</h1>
      </div>
      <div className="form-input">
        <h3>Name</h3>
        <input
          placeholder="Enter your task..."
          onChange={(e) => setName(e.target.value)}
          type="text"
        ></input>
      </div>
      <div className="date-picker">
        <DatePicker />
      </div>
      <div className="select-level">
        <div>
          <button onClick={() => setLevel("High")} className="button-high btn">
            High
          </button>
        </div>
        <div>
          <button
            onClick={() => setLevel("Medium")}
            className="button-medium btn"
          >
            Medium
          </button>
        </div>
        <div>
          <button onClick={() => setLevel("Low")} className="button-low btn">
            Low
          </button>
        </div>
      </div>
      <div>
        <div className="selected-level">
          <LevelIcon level={level} />
        </div>
        <button
          onClick={() => props.handleAddTask(name, level)}
          className="add-task"
        >
          Add Task
        </button>
      </div>
    </div>
  );
}

export default NewTask;
