import React from "react";

function Task({ tasks, filter, onTaskFormSubmit }) {

  const tasksToDisplay = tasks.filter((task) => {
    if (filter === "All") {
      return true;
    } else {
      return task.category === filter
    }
  })

  function handleDelete(event) {
    const updatedTasks = tasks.filter((task) => task.text !== event.target.value)
    onTaskFormSubmit(updatedTasks)
  }

  return (
    tasksToDisplay.map((task) => {
      return (
        <div className="task" key={task.text}>
          <div className="label">{task.category}</div>
          <div className="text">{task.text}</div>
          <button className="delete" onClick={handleDelete} value={task.text}>X</button>
        </div>
      )
    }
  ))
}

export default Task;
