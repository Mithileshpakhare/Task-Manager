import React from 'react';
import '../components/styles.css'; // Import the CSS file

const Task = ({ task, onUpdateTask, onDeleteTask }) => {
  const handleStatusChange = (e) => {
    const updatedTask = { ...task, status: e.target.value };
    onUpdateTask(task._id, updatedTask);
  };

  return (
    <li className="task"> {/* Apply the 'task' class here */}
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <select value={task.status} onChange={handleStatusChange}>
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>
      <button onClick={() => onDeleteTask(task._id)}>Delete</button>
    </li>
  );
};

export default Task;
