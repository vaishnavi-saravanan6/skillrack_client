import React from "react";
import { useNavigate } from "react-router-dom";



const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="py-1">
    <div className="w-full min-h-screen bg-gray-100 flex flex-col items-center justify-start pt-20 px-6">


     

    
      <h1 className="text-4xl font-bold text-violet-600 text-center py-1">
        Welcome to SkillCraft Hub
      </h1>

      <p className="mt-4 text-gray-700 max-w-2xl text-center text-lg leading-relaxed py-1">
        SkillCraft Hub is your personal skill & productivity companion.  
        Track your learning journey, manage to-do lists, and explore curated resources— 
        built for both Public users and Admins with powerful dashboards.
      </p>

    
      <button
        onClick={() => navigate("/login")}
        className="mt-8 px-8 py-3 bg-violet-500 hover:bg-violet-600 
                   text-white rounded-xl text-lg shadow-md 
                   transition-all duration-300"
      >
        Get Started
      </button>
    </div>
    </div>
  )
};

export default HomePage;
