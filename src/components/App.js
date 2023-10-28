import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskIndex) => {
    const updatedTasks = tasks.filter((_, index) => index !== taskIndex);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onSelectCategory={handleCategoryChange}
      />
      <NewTaskForm
        categories={CATEGORIES}
        onTaskFormSubmit={(text, category) => {
          addTask({ text, category });
        }}
      />
      <TaskList
        tasks={tasks}
        selectedCategory={selectedCategory}
        onDeleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
