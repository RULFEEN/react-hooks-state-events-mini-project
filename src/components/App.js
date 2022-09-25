import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log({ CATEGORIES, TASKS });

function App() {

const [currentTasks, onTaskFormSubmit] = useState(TASKS)
// console.log(currentTasks);

const [filter, setFilter] = useState("All")

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        Categories={CATEGORIES} 
        filter={filter} 
        setFilter={setFilter}/>
      <NewTaskForm 
        Categories={CATEGORIES} 
        onTaskFormSubmit={onTaskFormSubmit} 
        Tasks={currentTasks} 
        />
      <TaskList 
        Tasks={currentTasks} 
        filter={filter}
        onTaskFormSubmit={onTaskFormSubmit}
        />
    </div>
  );
}

export default App;
