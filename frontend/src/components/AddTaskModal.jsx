import React from "react";

const AddTaskModal = ({ newTask, onChange, onCancel, onSubmit }) => {
  const isEditing = Boolean(newTask._id);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-10">
      <div className="bg-[rgba(255,255,255,0.1)] backdrop-blur-md border border-[#00FFE7] rounded-xl shadow-lg w-[90%] max-w-md p-6 text-white">
        <h3 className="text-xl font-bold text-[#00D1D1] mb-4">
          {isEditing ? "Edit Task" : "Create New Task"}
        </h3>

        <input
          type="text"
          name="title"
          placeholder="Title"
          value={newTask.title}
          onChange={onChange}
          className="w-full mb-3 px-3 py-2 rounded bg-transparent border border-[#00FFE7] placeholder-[#A0F0ED] text-[#A0F0ED]"
        />

        <textarea
          name="description"
          placeholder="Description"
          value={newTask.description}
          onChange={onChange}
          className="w-full mb-3 px-3 py-2 rounded bg-transparent border border-[#00FFE7] placeholder-[#A0F0ED] text-[#A0F0ED]"
        ></textarea>

        <label className="flex items-center mb-4 text-[#A0F0ED]">
          <input
            type="checkbox"
            name="isCompleted"
            checked={newTask.isCompleted}
            onChange={onChange}
            className="mr-2 accent-[#6C63FF]"
          />
          Mark as Completed
        </label>

        <div className="flex justify-end gap-3">
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-[#FF61E6] hover:bg-pink-600 rounded-md text-white"
          >
            Cancel
          </button>
          <button
            onClick={onSubmit}
            className="px-4 py-2 bg-[#00D1D1] hover:bg-[#007E7E] rounded-md text-white"
          >
            {isEditing ? "Update Task" : "Add Task"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTaskModal;
