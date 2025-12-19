import React from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-violet-600 mb-6">
        Admin Dashboard
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {/* CREATE COURSE */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold">Create Course</h2>
          <button
            onClick={() => navigate("/admin/create-course")}
            className="mt-4 bg-violet-500 text-white px-4 py-2 rounded"
          >
            Create
          </button>
        </div>

        {/* VIEW COURSES */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold">View Courses</h2>
          <button
            onClick={() => navigate("/admin/courses")}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          >
            View
          </button>
        </div>

        {/* TODOS */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold">Todos</h2>
          <button
           onClick={() => navigate("/admin/todo")}
            className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
          >
            Open
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
