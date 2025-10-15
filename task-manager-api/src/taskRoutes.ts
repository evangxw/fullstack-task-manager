import express from 'express';
import { tasks, Task } from './tasks';

const router = express.Router();
let nextTaskId = 4;

// --- CRUD 操作 ---

// 1. GET /tasks - 获取所有任务
router.get('/', (req, res) => {
  res.json(tasks);
});

// 2. POST /tasks - 添加一个新任务
router.post('/', (req, res) => {
  const newTask: Task = {
    id: nextTaskId++,
    title: req.body.title,
    isCompleted: false,
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// 3. PUT /tasks/:id - 更新一个任务
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id); // 从网址中获取任务 ID
  const taskIndex = tasks.findIndex(t => t.id === id);

  if (taskIndex !== -1) {
    // 更新任务的 isCompleted 状态
    tasks[taskIndex].isCompleted = req.body.isCompleted;
    res.json(tasks[taskIndex]);
  } else {
    res.status(404).send('Task not found'); // 404 表示“未找到”
  }
});

// 4. DELETE /tasks/:id - 删除一个任务
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const taskIndex = tasks.findIndex(t => t.id === id);

  if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1); // 从数组中移除该任务
    res.status(204).send(); // 204 表示“无内容”，操作成功但无需返回数据
  } else {
    res.status(404).send('Task not found');
  }
});

export default router;