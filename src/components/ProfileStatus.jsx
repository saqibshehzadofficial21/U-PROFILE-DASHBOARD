import React from "react";

export default function ProfileStatus({ status }) {
  return (
    <div className="flex items-center gap-1 text-xs sm:text-sm font-medium">
      <span
        className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full ${
          status === "Online" ? "bg-green-500" : "bg-red-500"
        }`}
      ></span>
      <span className="text-gray-600 dark:text-gray-300">{status}</span>
    </div>
  );
}
