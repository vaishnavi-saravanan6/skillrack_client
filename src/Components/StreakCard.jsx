import React from "react";
import { FaFire } from "react-icons/fa";

const StreakCard = ({ currentStreak = 0, longestStreak = 0 }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 flex items-center justify-between">
      
      {/* LEFT */}
      <div>
        <h3 className="text-gray-500 text-sm font-semibold">
          Current Streak
        </h3>

        <div className="flex items-center gap-2 mt-2">
          <FaFire className="text-orange-500 text-3xl" />
          <span className="text-3xl font-bold">
            {currentStreak}
          </span>
          <span className="text-gray-500">days</span>
        </div>
      </div>

      {/* RIGHT */}
      <div className="text-right">
        <p className="text-gray-400 text-sm">Longest</p>
        <p className="text-xl font-semibold text-violet-600">
          {longestStreak} days
        </p>
      </div>
    </div>
  );
};

export default StreakCard;
