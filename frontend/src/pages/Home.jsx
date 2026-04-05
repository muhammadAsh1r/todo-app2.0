import React, { useEffect, useState } from "react";
import axios from "axios";
import TaskList from "../components/TaskList";
import AddTaskModal from "../components/AddTaskModal";
import TaskSummary from "../components/TaskSummary";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [filter, setFilter] = useState("all");

  // Holds the task currently being created or edited
  const [currentTask, setCurrentTask] = useState({
    title: "",
    description: "",
    isCompleted: false,
    _id: null, // null means new task, string means editing existing task
  });

  // Fetch all tasks from backend
  const fetchTasks = async () => {
    const token = localStorage.getItem("authToken");
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/tasks`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTasks(response.data.tasks);
    } catch (error) {
      console.error(
        "Error fetching tasks:",
        error.response?.data || error.message
      );
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // Update currentTask state on form input change
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCurrentTask((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Open modal for adding a new task
  const openAddModal = () => {
    setCurrentTask({
      title: "",
      description: "",
      isCompleted: false,
      _id: null,
    });
    setShowModal(true);
  };

  // Open modal for editing an existing task
  const handleEditTask = (taskId) => {
    const taskToEdit = tasks.find((task) => task._id === taskId);
    if (!taskToEdit) return;
    setCurrentTask({ ...taskToEdit });
    setShowModal(true);
  };

  // Submit form: add or update task based on _id presence
  const handleSubmit = async () => {
    const token = localStorage.getItem("authToken");
    try {
      if (currentTask._id) {
        // Update existing task
        await axios.put(
          `${import.meta.env.VITE_API_URL}/api/tasks/${currentTask._id}`,
          {
            title: currentTask.title,
            description: currentTask.description,
            isCompleted: currentTask.isCompleted,
          },
          { headers: { Authorization: `Bearer ${token}` } }
        );
      } else {
        // Add new task
        await axios.post(
          `${import.meta.env.VITE_API_URL}/api/tasks`,
          {
            title: currentTask.title,
            description: currentTask.description,
            isCompleted: currentTask.isCompleted,
          },
          { headers: { Authorization: `Bearer ${token}` } }
        );
      }
      setShowModal(false);
      setCurrentTask({
        title: "",
        description: "",
        isCompleted: false,
        _id: null,
      });
      fetchTasks(); // refresh list
    } catch (error) {
      console.error(
        "Error saving task:",
        error.response?.data || error.message
      );
    }
  };

  // Delete task by id
  const handleDeleteTask = async (taskId) => {
    const token = localStorage.getItem("authToken");
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/api/tasks/${taskId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchTasks();
    } catch (error) {
      console.error(
        "Error deleting task:",
        error.response?.data || error.message
      );
    }
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.isCompleted;
    if (filter === "remaining") return !task.isCompleted;
    return true; // all
  });

  return (
    <div className="flex min-h-screen font-sans bg-[#0F0F1C] text-[#A0F0ED]">
      {/* Left Side */}
      <div className="w-[30%] p-4 bg-[rgba(255,255,255,0.05)] border-r border-[#00FFE7] flex flex-col gap-6">
        <h2 className="text-xl font-semibold text-[#00D1D1]">Navigation</h2>
        <TaskSummary tasks={tasks} onFilterChange={setFilter} />{" "}
      </div>

      {/* Right Side */}
      <div className="w-[70%] p-6 relative">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-[#00D1D1]">Tasks</h2>
          <button
            onClick={openAddModal}
            className="bg-[#007E7E] hover:bg-[#2D9CDB] text-white px-4 py-2 rounded-md transition duration-200 shadow"
          >
            + Add Task
          </button>
        </div>

        <TaskList
          tasks={filteredTasks}
          onDelete={handleDeleteTask}
          onEdit={handleEditTask}
        />

        {showModal && (
          <AddTaskModal
            newTask={currentTask}
            onChange={handleInputChange}
            onCancel={() => setShowModal(false)}
            onSubmit={handleSubmit}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
