import React, { useState, useEffect } from "react";
// Loading Overlay Component (for demonstration)
const LoadingOverlay = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">FreelancePro Dashboard</h2>
        <p className="text-gray-600">Loading your workspace...</p>
      </div>
    </div>
  );
};

export default LoadingOverlay;