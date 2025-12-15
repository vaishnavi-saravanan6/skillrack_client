import React from "react";
import { LinearProgress } from "@mui/material";

const courses = [
  { title: "HTML Basics", completed: 1, total: 6 },
  { title: "Finance 101", completed: 1, total: 6 },
];

const recommended = [
  { title: "React Basics", completed: 2, total: 8 },
  { title: "Time Management", completed: 9, total: 9 },
];

const MyProfile = () => {
  // Calculate overall progress
  const totalModules = [...courses, ...recommended].reduce((acc, c) => acc + c.total, 0);
  const completedModules = [...courses, ...recommended].reduce((acc, c) => acc + c.completed, 0);
  const progressPercent = Math.round((completedModules / totalModules) * 100);

  return (
    <div className="pt-24 px-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Welcome, Vaishu!</h1>

      {/* Progress Bar */}
      <div className="mb-10">
        <div className="flex justify-between mb-1">
          <span className="font-medium text-gray-700">{progressPercent}% Complete</span>
        </div>
        <LinearProgress 
          variant="determinate" 
          value={progressPercent} 
          sx={{ height: 10, borderRadius: 5, backgroundColor: "#e0e0e0", "& .MuiLinearProgress-bar": { backgroundColor: "#3b82f6" } }}
        />
      </div>

      {/* Continue Learning */}
      <h2 className="text-2xl font-semibold mb-4">Continue Learning</h2>
      <div className="grid grid-cols-2 gap-4 mb-10">
        {courses.map((course, idx) => (
          <div key={idx} className="p-4 border rounded-lg shadow-sm flex flex-col justify-center items-start gap-2 hover:shadow-md transition">
            <span className="font-medium text-gray-900">{course.title}</span>
            <span className="text-gray-500 text-sm">{course.completed}/{course.total} modules</span>
          </div>
        ))}
      </div>

      {/* Recommended */}
      <h2 className="text-2xl font-semibold mb-4">Recommended</h2>
      <div className="grid grid-cols-2 gap-4">
        {recommended.map((course, idx) => (
          <div key={idx} className="p-4 border rounded-lg shadow-sm flex flex-col justify-center items-start gap-2 hover:shadow-md transition">
            <span className="font-medium text-gray-900">{course.title}</span>
            <span className="text-gray-500 text-sm">{course.completed}/{course.total} modules</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProfile;
