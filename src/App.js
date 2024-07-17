import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskFilter from './components/TaskFilter';
import './App.css'; // Import the styles

const App = () => {
  const [filter, setFilter] = useState('All');

  const handleTaskCreated = (newTask) => {
    // Implement logic to add new task to TaskList
  };

  return (
    <div className="container">
      <h1>Task Manager</h1>
      <div className="task-components">
        <TaskForm onTaskCreated={handleTaskCreated} />
        <TaskFilter currentFilter={filter} onFilterChange={setFilter} />
        <TaskList filter={filter} />
      </div>
    </div>
  );
};

export default App;
