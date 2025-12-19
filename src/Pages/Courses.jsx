import React, { useEffect, useState } from "react";
import axios from "axios";
import CourseCard from "./CourseCard";

const Courses = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const token = user?.token;
  const [courses, setCourses] = useState([]);

  const getCourses = async () => {
    try {
      const res = await axios.get("http://localhost:5000/course/all", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCourses(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => { getCourses(); }, []);

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h1>All Courses</h1>
      {courses.map((c) => (
        <CourseCard key={c._id} course={c} token={token} refresh={getCourses} />
      ))}
    </div>
  );
};

export default Courses;
