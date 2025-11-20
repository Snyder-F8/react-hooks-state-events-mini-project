import React, { useState } from "react";
import TaskList from "./TaskList";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import { TASKS, CATEGORIES } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleDeleteTask(deletedText) {
    const updated = tasks.filter((t) => t.text !== deletedText);
    setTasks(updated);
  }

  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }

  const filteredTasks =
    selectedCategory === "All"
      ? tasks
      : tasks.filter((t) => t.category === selectedCategory);

  function handleAddTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selected={selectedCategory}
        onSelectCategory={handleCategoryChange}
      />
      <TaskList tasks={filteredTasks} onDeleteTask={handleDeleteTask} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleAddTask} />
    </div>
  );
}

export default App;
