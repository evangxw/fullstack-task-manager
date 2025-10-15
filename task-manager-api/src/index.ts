import express from 'express';
import cors from 'cors';
// 确保这里有 .js 后缀
import taskRoutes from './taskRoutes.js';

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.use('/api/tasks', taskRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});