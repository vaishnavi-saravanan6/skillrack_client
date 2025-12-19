import React, { useEffect, useState } from "react";
import axios from "axios";

const MyCourses = () => {
  const [courses, setCourses] = useState([]);
  const userId = JSON.parse(localStorage.getItem("user"))?._id;

  useEffect(() => {
    const fetchMyCourses = async () => {
      const res = await axios.get(
        `http://localhost:5000/course/my/${userId}`
      );
      setCourses(res.data);
    };
    fetchMyCourses();
  }, [userId]);

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {courses.map(course => (
        <div key={course._id} className="bg-white shadow rounded-xl p-6">
          <h2 className="text-xl font-bold">{course.title}</h2>
          <p className="text-gray-600">{course.description}</p>
        </div>
      ))}
    </div>
  );
};

export default MyCourses;
