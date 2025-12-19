import React, { useEffect, useState } from "react";
import axios from "axios";
import StreakCard from "../Components/StreakCard";


const MyProfile = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const token = user?.token;

  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);

  // Fetch enrolled courses
  const getEnrolledCourses = async () => {
    try {
      const res = await axios.get("https://skillcraftserver.onrender.com/course/enrolled", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setEnrolledCourses(res.data);
    } catch (err) {
      console.error("Error fetching enrolled courses:", err);
    }
  };

  // Fetch completed todos (optional for streak tracking)
  const getCompletedTodos = async () => {
    try {
      const res = await axios.get("https://skillcraftserver.onrender.com/todo/gettodo", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const completed = res.data.filter(todo => todo.completed); // assuming `completed` field
      setCompletedTodos(completed);
    } catch (err) {
      console.error("Error fetching todos:", err);
    }
  };

  useEffect(() => {
    getEnrolledCourses();
    getCompletedTodos();
  }, []);

  // Simple streak logic: number of consecutive days with at least 1 completed todo
  const calculateStreak = () => {
    if (completedTodos.length === 0) return 0;

    const dates = completedTodos.map(todo =>
      new Date(todo.completedAt).toDateString()
    );

    dates.sort((a, b) => new Date(b) - new Date(a));

    let streak = 1;
    for (let i = 1; i < dates.length; i++) {
      const prev = new Date(dates[i - 1]);
      const curr = new Date(dates[i]);
      const diff = (prev - curr) / (1000 * 60 * 60 * 24);
      if (diff === 1) streak++;
      else break;
    }
    return streak;
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-bold text-violet-600 mb-6">My Profile</h1>

      <div className="bg-white p-6 rounded-xl shadow mb-6">
        <h2 className="text-xl font-semibold">User Info</h2>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow mb-6">
        <h2 className="text-xl font-semibold">My Enrolled Courses</h2>
        <p className="text-gray-600 mb-2">
          You are enrolled in {enrolledCourses.length} course
          {enrolledCourses.length !== 1 ? "s" : ""}.
        </p>
        <ul className="list-disc list-inside">
          {enrolledCourses.map(course => (
            <li key={course._id}>{course.title}</li>
          ))}
        </ul>
      </div>

      <StreakCard streak={calculateStreak()} />
    </div>
  );
};

export default MyProfile;
