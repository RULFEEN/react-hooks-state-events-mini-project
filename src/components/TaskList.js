import React from "react";
import Task from "./Task"

function TaskList({ Tasks, filter, onTaskFormSubmit }) {
  
  return (
    <div className="tasks">
        <Task tasks={Tasks} filter={filter} onTaskFormSubmit={onTaskFormSubmit} />
    </div>
  );
}

export default TaskList;
