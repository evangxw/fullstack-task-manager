import { useState, useEffect, type FormEvent } from 'react';
import axios from 'axios';
import './App.css'; // Let's add some basic styling

interface Task {
  id: number;
  title: string;
  isCompleted: boolean;
}

const API_URL = 'http://localhost:3001/api/tasks';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  useEffect(() => {
    axios.get(API_URL).then(res => setTasks(res.data));
  }, []);

  const handleAddTask = (event: FormEvent) => {
    event.preventDefault();
    if (!newTaskTitle.trim()) return;
    axios.post(API_URL, { title: newTaskTitle }).then(res => {
      setTasks([...tasks, res.data]);
      setNewTaskTitle('');
    });
  };

  // 1. 新增：处理任务状态切换的函数
  const handleToggleTask = (id: number, isCompleted: boolean) => {
    axios.put(`${API_URL}/${id}`, { isCompleted: !isCompleted }).then(res => {
      setTasks(tasks.map(task => (task.id === id ? res.data : task)));
    });
  };

  // 2. 新增：处理删除任务的函数
  const handleDeleteTask = (id: number) => {
    axios.delete(`${API_URL}/${id}`).then(() => {
      setTasks(tasks.filter(task => task.id !== id));
    });
  };

  return (
    <div className="app-container">
      <h1>Task Manager</h1>

      <form onSubmit={handleAddTask} className="task-form">
        <input
          type="text"
          placeholder="Add a new task..."
          value={newTaskTitle}
          onChange={e => setNewTaskTitle(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>

      <ul className="task-list">
        {tasks.map(task => (
          <li key={task.id} className={task.isCompleted ? 'completed' : ''}>
            <span onClick={() => handleToggleTask(task.id, task.isCompleted)}>
              {task.title}
            </span>
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App