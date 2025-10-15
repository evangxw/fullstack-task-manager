import express from 'express';
import cors from 'cors';
import taskRoutes from './taskRoutes'; // 1. 导入我们的任务路由器

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

// 2. 把任务路由器“挂载”到 /api/tasks 路径上
app.use('/api/tasks', taskRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});