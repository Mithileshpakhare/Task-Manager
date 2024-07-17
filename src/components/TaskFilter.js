// src/components/TaskFilter.js
import React from 'react';
import '../components/styles.css'; //

const TaskFilter = ({ currentFilter, onFilterChange }) => (
  <div>
    <select value={currentFilter} onChange={(e) => onFilterChange(e.target.value)}>
      <option value="All">All</option>
      <option value="To Do">To Do</option>
      <option value="In Progress">In Progress</option>
      <option value="Done">Done</option>
    </select>
  </div>
);

export default TaskFilter;
