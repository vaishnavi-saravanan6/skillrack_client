import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Slider } from "@mui/material";

const MyProfile = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-24 px-10">
      <h1 className="text-3xl font-bold text-violet-600">Welcome, Vaishu!</h1>

      <Box sx={{ width: 300 }} className="mt-6">
        <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
      </Box>

      <h1 className="text-2xl mt-10 font-semibold">Continue Learning</h1>

      <div className="flex gap-4 mt-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">HTML Basics</button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Finance 101</button>
      </div>

      <h1 className="text-2xl mt-10 font-semibold">Recommended</h1>

      <div className="flex gap-4 mt-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">React Basics</button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Time Management</button>
      </div>
    </div>
  );
};

export default MyProfile;
