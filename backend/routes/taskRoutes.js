const express = require("express");
const router = express.Router();
const {
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");

// Optional: Middleware for authentication
const authMiddleware = require("../middleware/authMiddleware");

// Routes (use `protect` to secure routes if needed)
router.get("/", authMiddleware, getTasks); // GET /api/tasks
router.get("/:id", authMiddleware, getTaskById); // GET /api/tasks/:id
router.post("/", authMiddleware, createTask); // POST /api/tasks
router.put("/:id", authMiddleware, updateTask); // PUT /api/tasks/:id
router.delete("/:id", authMiddleware, deleteTask); // DELETE /api/tasks/:id

module.exports = router;
