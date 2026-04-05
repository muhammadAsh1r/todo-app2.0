import React from "react";

const TaskList = ({ tasks, onDelete, onEdit }) => {
  if (!tasks || tasks.length === 0) {
    return <p>No tasks available.</p>;
  }

  return (
    <div className="space-y-4">
      {tasks.map(({ _id, title, description, isCompleted }) => (
        <div
          key={_id}
          className="flex flex-col sm:flex-row border border-[#00FFE7]/30 rounded-lg shadow-sm bg-[rgba(255,255,255,0.05)] backdrop-blur-sm overflow-hidden transition-all hover:border-[#00FFE7]/60"
        >
          {/* Task Info */}
          <div className="w-full sm:w-[80%] p-4">
            <h3 className="text-lg font-semibold text-[#00D1D1]">{title}</h3>
            <p className="text-[#A0F0ED]/70 mb-2">{description}</p>
            <p
              className={`font-medium ${
                isCompleted ? "text-green-400" : "text-red-400"
              }`}
            >
              {isCompleted ? "Completed" : "Incomplete"}
            </p>
          </div>

          {/* Buttons Container */}
          <div className="w-full sm:w-[20%] flex border-t sm:border-t-0 sm:border-l border-[#00FFE7]/30">
            {/* Edit Button - 50% of right side (10% of whole) */}
            <button
              onClick={() => onEdit(_id)}
              className="
                w-1/2
                bg-[#6C63FF] 
                text-white 
                text-xl 
                flex 
                items-center 
                justify-center 
                hover:bg-[#5848d9] 
                transition-colors 
                duration-200
                border-r border-white/30
              "
              aria-label="Edit Task"
            >
              ✎
            </button>

            {/* Delete Button - 50% of right side (10% of whole) */}
            <button
              onClick={() => onDelete(_id)}
              className="
                w-1/2
                bg-[#FF4C4C] 
                text-white 
                text-2xl 
                flex 
                items-center 
                justify-center 
                hover:bg-red-600 
                transition-colors 
                duration-200
              "
              aria-label="Delete Task"
            >
              ×
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
