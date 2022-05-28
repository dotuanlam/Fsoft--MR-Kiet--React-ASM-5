import React, { useState } from "react";
import NewTask from "./components/NewTask";
import TaskList from "./components/TaskList";
import "./App.scss";
import { Link } from "react-router-dom";

const App = () => {
  const [task, setTask] = useState([
    {
      name: null,
      level: null,
      id: null,
    },
  ]);

  const handleAddTask = (name, level) => {
    const id = Math.floor(Math.random() * 99999999999999999999999);
    setTask((prev) => [
      ...prev,
      {
        name: name,
        level: level,
        id: id,
      },
    ]);
  };

  const handleTaskDelete = (id) => {
    for (let i = 0; i < task.length; i++) {
      if (task[i].id === id) {
        task.splice(i, 1);
      }
    }
    setTask((prev) => [...prev]);
  };

  const onToken = () => {
    localStorage.setItem("Token", false);
  };

  return (
    <div className="App">
      <Link to="/login">
        <button onClick={onToken} className="btn-logout">
          Log Out
        </button>
      </Link>
      <div>
        <NewTask handleAddTask={handleAddTask} />
      </div>
      <div>
        <TaskList handleTaskDelete={handleTaskDelete} task={task} />
      </div>
    </div>
  );
};

export default App;
