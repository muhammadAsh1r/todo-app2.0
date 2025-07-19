import React, { useState } from "react";

const TaskSummary = ({ tasks, onFilterChange }) => {
  const [filter, setFilter] = useState("all");

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.isCompleted).length;
  const remainingTasks = totalTasks - completedTasks;

  // Handle filter button click
  const handleFilterClick = (filterType) => {
    setFilter(filterType);
    onFilterChange(filterType);
  };

  return (
    <div className="p-4 bg-[rgba(255,255,255,0.1)] rounded-md text-[#00D1D1] space-y-3">
      <h2 className="text-xl font-semibold border-b border-[#00FFE7] pb-2">
        Task Summary
      </h2>

      <div className="flex gap-2 mb-3">
        {["all", "completed", "remaining"].map((type) => (
          <button
            key={type}
            onClick={() => handleFilterClick(type)}
            className={`px-3 py-1 rounded ${
              filter === type
                ? "bg-[#00D1D1] text-white"
                : "bg-transparent border border-[#00D1D1] text-[#00D1D1]"
            } transition-colors duration-200`}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      <p>
        Total Tasks: <span className="font-bold">{totalTasks}</span>
      </p>
      <p>
        Completed Tasks:{" "}
        <span className="font-bold text-green-500">{completedTasks}</span>
      </p>
      <p>
        Remaining Tasks:{" "}
        <span className="font-bold text-yellow-400">{remainingTasks}</span>
      </p>
    </div>
  );
};

export default TaskSummary;
