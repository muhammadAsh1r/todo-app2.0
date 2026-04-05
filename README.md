# 📝 Todo App 2.0 (MERN Stack)

A modern, full-stack Todo application built with the **MERN** stack (MongoDB, Express, React, Node.js). This app features a clean UI, secure authentication, and real-time task management.

## 🚀 Features

- **User Authentication**: Secure Signup and Login using JWT (JSON Web Tokens) and bcrypt password hashing.
- **Task Management**: Create, Read, Update, and Delete (CRUD) tasks.
- **Task Status**: Mark tasks as completed or incomplete with a single click.
- **Filtering**: Filter tasks by status (All, Completed, Remaining).
- **Responsive Design**: Fully responsive UI that works on desktop and mobile.
- **Environment Driven**: Easily configurable via environment variables for different deployment stages.

## 🛠️ Tech Stack

- **Frontend**: React, Vite, Tailwind CSS, Axios, React Router.
- **Backend**: Node.js, Express.js.
- **Database**: MongoDB (Mongoose ODM).
- **Authentication**: JWT, bcrypt.

---

## 📂 Project Structure

```bash
todo-app2.0/
├── backend/          # Node.js + Express backend
│   ├── config/       # Database configuration
│   ├── controllers/  # API logic
│   ├── models/       # Mongoose schemas
│   ├── routes/       # API endpoints
│   └── middleware/   # Auth & error handling
└── frontend/         # React + Vite frontend
    ├── src/
    │   ├── components/ # Reusable UI components
    │   └── pages/      # Page-level components
    └── public/       # Static assets
```

---

## ⚙️ Setup & Installation

### 1. Prerequisite
- Node.js installed
- MongoDB installed locally or a MongoDB Atlas account

### 2. Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file based on `.env.example`:
   ```bash
   cp .env.example .env
   ```
4. Update `.env` with your MongoDB URI and a secure JWT Secret.
5. Start the server:
   ```bash
   npm start
   ```

### 3. Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file based on `.env.example`:
   ```bash
   cp .env.example .env
   ```
4. Update `VITE_API_URL` to point to your backend (default is `http://localhost:3000`).
5. Start the development server:
   ```bash
   npm run dev
   ```

---

## 🚢 Deployment Ready

### Backend
- Ensure `process.env.PORT` is used in `backend/index.js`.
- Set up a production MongoDB instance (e.g., MongoDB Atlas).
- Deploy to platforms like Heroku, Render, or a VPS.

### Frontend
- Build the project for production:
  ```bash
  npm run build
  ```
- Deploy the `dist` folder to platforms like Vercel, Netlify, or AWS Amplify.
- Ensure the production backend URL is set in the deployment environment's `VITE_API_URL` variable.

---

## 🤝 Contributing
Feel free to fork this project and submit pull requests for any improvements or new features!

## 📜 License
This project is licensed under the [ISC License](LICENSE).
