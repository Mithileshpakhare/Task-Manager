import React, { useEffect, useState } from 'react';
import { getTasks, updateTask, deleteTask } from '../api/api';
import Task from './Task';
import '../components/styles.css';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const result = await getTasks();
      setTasks(result);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const handleUpdateTask = async (id, updatedTask) => {
    try {
      const result = await updateTask(id, updatedTask);
      setTasks(tasks.map(task => (task._id === id ? result : task)));
    } catch (error) {
      console.error(`Error updating task with ID ${id}:`, error);
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      await deleteTask(id);
      setTasks(tasks.filter(task => task._id !== id));
    } catch (error) {
      console.error(`Error deleting task with ID ${id}:`, error);
    }
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'All') return true;
    return task.status === filter;
  });

  return (
    <div>
      <h2>Task List</h2>
      <select onChange={(e) => setFilter(e.target.value)} value={filter}>
        <option value="All">All</option>
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>
      <ul>
        {filteredTasks.map(task => (
          <Task
            key={task._id}
            task={task}
            onUpdateTask={handleUpdateTask}
            onDeleteTask={handleDeleteTask}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
