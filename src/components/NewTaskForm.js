import React, {useState} from "react";

function NewTaskForm({ Categories, onTaskFormSubmit, Tasks}) {

  const nameCategories = Categories.filter((category) => category !== "All")

  const [text, setText] = useState("")
  const [category, setCategory] = useState("")
  function handleTaskChange(e) {
    setText(e.target.value)
  }
  function handleCatChange(e) {
    setCategory(e.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    const newTask = {text, category}
    const newArray = [ ...Tasks, newTask ]
    onTaskFormSubmit(newArray)
  }
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={text} onChange={handleTaskChange} />
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={handleCatChange}>
          {nameCategories.map((category) => {
            return (
              <option value={category}>{category}</option>
            )
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
