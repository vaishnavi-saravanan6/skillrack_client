import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateCourse = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
    duration: "",
    price: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const token = user?.token;

      if (!token) {
        alert("You are not authorized. Please login.");
        return;
      }

      await axios.post("http://localhost:5000/course/create", form, {
        headers: { Authorization: `Bearer ${token}` },
      });

      alert("Course created successfully!");
      // Reset form
      setForm({ title: "", description: "", category: "", duration: "", price: "" });
      // Redirect to admin dashboard
      navigate("/admin/dashboard");
    } catch (err) {
      console.error("Create course error 👉", err.response?.data || err);
      alert(err.response?.data?.mess || "Error creating course");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6">Create Course</h2>
        <input
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          className="w-full p-3 mb-4 border rounded-lg"
          required
        />
        <input
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          className="w-full p-3 mb-4 border rounded-lg"
          required
        />
        <input
          name="category"
          placeholder="Category"
          value={form.category}
          onChange={handleChange}
          className="w-full p-3 mb-4 border rounded-lg"
          required
        />
        <input
          name="duration"
          placeholder="Duration"
          value={form.duration}
          onChange={handleChange}
          className="w-full p-3 mb-4 border rounded-lg"
          required
        />
        <input
          name="price"
          type="number"
          placeholder="Price (optional)"
          value={form.price}
          onChange={handleChange}
          className="w-full p-3 mb-4 border rounded-lg"
        />
        <button
          type="submit"
          className="w-full bg-violet-500 hover:bg-violet-600 text-white py-3 rounded-lg"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateCourse;
