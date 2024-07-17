import React, { useState } from 'react';
import { createTask } from '../api/api';
import '../components/styles.css'; // Import the CSS file

const TaskForm = ({ onTaskCreated }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('To Do');

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents default form submission

    if (!title) {
      alert('Title is required');
      return;
    }

    const newTask = { title, description, status };

    try {
      const response = await createTask(newTask);
      onTaskCreated(response.data);

      // Clear form fields after submission
      setTitle('');
      setDescription('');
      setStatus('To Do');
    } catch (error) {
      console.error('Error creating task:', error);
      // Handle error if necessary
    }
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
