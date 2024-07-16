import React from "react";

export const PageNotFound = () => {
  return (
    <div className="container mx-auto mt-10">
      <div className="flex items-center justify-center">
        <i className="bi bi-exclamation-circle text-4xl text-red-500"></i>
      </div>
      <div className="text-2xl font-bold text-center mt-4">
        Oops! Page Not Found
      </div>
      <div className="text-gray-700 text-center mt-2">
        Sorry, the requested page is not found. Please check the URL again.
      </div>
    </div>
  );
};
