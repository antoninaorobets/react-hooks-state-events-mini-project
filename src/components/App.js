import React, { useState, useEffect } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasksToDisplay, setTasksToDisplay] = useState(TASKS)
  const [filterBy, setFilterBy] = useState("All")
  const [allTasks, setallTasks] = useState(TASKS)

  function onDeleteTask(event) {
    const newTasks = allTasks.filter((task) => { return (task.text !== event.target.name) })
    setallTasks(newTasks)
    setTasksToDisplay(newTasks)
  }

  function onCategoryClik(event) {
    const parameter = event.target.textContent
    if (parameter === "All") { setTasksToDisplay(allTasks) }
    else {
      const filteredTaskes = allTasks.filter((task) => task.category === parameter)
      setTasksToDisplay(filteredTaskes)
    }
    setFilterBy(event.target.textContent)
  }

  function onTaskFormSubmit(formData) {
    
    // console.log(event)
    // console.log(event.target.text.value)
    // const newTask = {
    //   text: event.target.text.value,
    //   category: event.target.category.value,
    // }
   
    const newTasks = [...allTasks, formData]
    setallTasks(newTasks)
    setTasksToDisplay(newTasks)
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter onCategoryClik={onCategoryClik} filterBy={filterBy} categories={CATEGORIES} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit} />
      <TaskList tasks={tasksToDisplay} onDeleteTask={onDeleteTask} />
    </div>
  );
}

export default App;
