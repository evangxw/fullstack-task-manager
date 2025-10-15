import express from 'express';
// 确保这里有 .js 后缀
import { tasks } from './tasks.js';
// 确保这里用 import type 并且有 .js 后缀
import type { Task } from './tasks.js';

const router = express.Router();
let nextTaskId = 4;

// GET /tasks
router.get('/', (req, res) => {
  res.json(tasks);
});

// POST /tasks
router.post('/', (req, res) => {
  const newTask: Task = {
    id: nextTaskId++,
    title: req.body.title,
    isCompleted: false,
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// PUT /tasks/:id
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  // 修复：给 t 指定类型 (t: Task)
  const taskIndex = tasks.findIndex((t: Task) => t.id === id);

  if (taskIndex !== -1) {
    tasks[taskIndex].isCompleted = req.body.isCompleted;
    res.json(tasks[taskIndex]);
  } else {
    res.status(404).send('Task not found');
  }
});

// DELETE /tasks/:id
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  // 修复：给 t 指定类型 (t: Task)
  const taskIndex = tasks.findIndex((t: Task) => t.id === id);

  if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).send('Task not found');
  }
});

export default router;