import React from "react";
import { Link } from "react-router-dom";

export default function Error404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-[#fff] p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-4 text-primary" >
          Oops! 404
        </h1>
        <p className="text-xl mb-8" style={{ color: "#000444" }}>
          The page you're looking for doesn't exist.
        </p>
        <Link
          to="/dashboard"
          className="px-4 py-2 bg-primary cursor-pointer text-[#fff] rounded-lg hover:bg-purple-700"
        >
          Go back to Dashboard
        </Link>
      </div>
    </div>
  );
}
