import React from "react";
import { useNavigate } from "react-router-dom";
import StreakCard from "../Components/StreakCard";


const UserDashboard = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const userName = user?.name || "User";

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };
  const currentStreak = 3; 


  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-violet-600">
          User Dashboard
        </h1>

        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
        >
          Logout
        </button>
      </div>

      <p className="text-gray-600 mb-8">
        Welcome back, <span className="font-semibold">{userName}</span> 👋
      </p>
<StreakCard currentStreak={currentStreak} />

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10">

        {/* Courses */}
        <div className="bg-white shadow rounded-xl p-6">
          <h2 className="text-xl font-semibold text-gray-700">
            My Courses
          </h2>
          <p className="text-sm text-gray-500 mt-2">
            View enrolled courses
          </p>
          <button
            onClick={() => navigate("/courses")}
            className="mt-4 text-violet-500 hover:underline"
          >
            Go to Courses →
          </button>
        </div>

        {/* Todos */}
        <div className="bg-white shadow rounded-xl p-6">
          <h2 className="text-xl font-semibold text-gray-700">
            My Todos
          </h2>
          <p className="text-sm text-gray-500 mt-2">
            Manage daily tasks
          </p>
          <button
            onClick={() => navigate("/todo")}
            className="mt-4 text-violet-500 hover:underline"
          >
            Go to Todo →
          </button>
        </div>

        {/* Profile */}
        <div className="bg-white shadow rounded-xl p-6">
          <h2 className="text-xl font-semibold text-gray-700">
            Profile
          </h2>
          <p className="text-sm text-gray-500 mt-2">
            Update your info
          </p>
          <button
            onClick={() => navigate("/profile")}
            className="mt-4 text-violet-500 hover:underline"
          >
            View Profile →
          </button>
        </div>

      </div>
    </div>
  );
};

export default UserDashboard;
