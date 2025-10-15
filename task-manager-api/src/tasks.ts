// 1. 定义一个任务（Task）应该长什么样
export interface Task {
  id: number;
  title: string;
  isCompleted: boolean;
}

// 2. 创建一个任务列表，并放一些初始数据进去
// 这就是我们的“内存数据库”
export const tasks: Task[] = [
  { id: 1, title: 'Learn React', isCompleted: true },
  { id: 2, title: 'Learn Node.js', isCompleted: false },
  { id: 3, title: 'Build a full-stack app', isCompleted: false },
];