# 🚀 Full-Stack Task Manager

A complete full-stack task management application featuring a responsive React frontend and a robust Node.js (Express) backend API. This project demonstrates end-to-end development, from API design to final deployment on live servers.

**✨ Live Demo (Frontend):** [**https://fullstack-task-manager-three.vercel.app/**](https://fullstack-task-manager-three.vercel.app/)

**🌐 Live API (Backend):** [**https://task-manager-api-guo.onrender.com/api/tasks**](https://task-manager-api-guo.onrender.com/api/tasks)

---

![Project Screenshot](https://i.imgur.com/ct4hFKE.png)

---

## 🛠️ Core Features

- **Full CRUD Functionality**: Users can Create, Read, Update (mark as complete), and Delete tasks.
- **RESTful API**: A well-structured backend API built with Node.js and Express to handle all data operations.
- **Interactive Frontend**: A dynamic and user-friendly interface built with React that communicates with the backend in real-time.
- **Persistent State (Session-based)**: Tasks are stored in memory on the server, providing a consistent state for the user's session.
- **Fully Deployed**: The frontend is deployed on Vercel and the backend is deployed on Render, demonstrating a complete CI/CD pipeline.

---

## 💻 Tech Stack

- **Frontend**: React, TypeScript, Axios, CSS
- **Backend**: Node.js, Express.js, TypeScript
- **Development Tools**: Vite, ts-node-dev
- **Deployment**: GitHub, Vercel (for Frontend), Render (for Backend)

---

## 📚 Challenges & Learning

This project was a deep dive into full-stack development and cloud deployment. A key challenge was configuring the Node.js backend to use modern **ESM (ECMAScript Modules)**, which required precise adjustments to `package.json` and `tsconfig.json` to ensure compatibility between TypeScript's compiler and the Node.js runtime environment on Render. Successfully debugging and resolving these module system conflicts was a significant learning experience in preparing an application for a production environment.

---

## ⚙️ How to Run Locally

### Prerequisites

- Node.js (LTS version)

### Backend Setup

```bash
# Navigate to the backend directory
cd task-manager-api

# Install dependencies
npm install

# Run the development server
npm run dev
# The API will be available at http://localhost:3001
```

### Frontend Setup
```bash
# From the root, navigate to the frontend directory
cd task-manager-ui

# Install dependencies
npm install

# Run the development server
npm run dev
# The UI will be available at http://localhost:5173
```