import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { JobContext } from "../context/JobContext";
import { PlusCircle, Briefcase, Calendar, Eye, Download, Upload } from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();
  const { jobs, exportJobs, importJobs } = useContext(JobContext);

  const getStatusColor = (status) => {
    const colors = {
      Applied: "bg-blue-100 text-blue-800",
      Interviewing: "bg-yellow-100 text-yellow-800",
      Offer: "bg-green-100 text-green-800",
      Rejected: "bg-red-100 text-red-800",
    };
    return colors[status] || "bg-gray-100 text-gray-800";
  };

  const getStatusStats = () => {
    const stats = { Applied: 0, Interviewing: 0, Offer: 0, Rejected: 0 };

    // Safety check to ensure jobs is an array
    if (Array.isArray(jobs)) {
      jobs.forEach((job) => {
        stats[job.status] = (stats[job.status] || 0) + 1;
      });
    }

    return stats;
  };

  const stats = getStatusStats();

  const viewJobDetails = (jobId) => {
    navigate(`/job/${jobId}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4 sm:mb-0">
          Dashboard
        </h1>

        <div className="flex flex-col sm:flex-row gap-2">
          <button
            onClick={exportJobs}
            className="flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors shadow-sm"
          >
            <Download className="w-4 h-4 mr-2" />
            Export JSON
          </button>

          <label className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors cursor-pointer shadow-sm">
            <Upload className="w-4 h-4 mr-2" />
            Import JSON
            <input
              type="file"
              accept=".json"
              onChange={importJobs}
              className="hidden"
            />
          </label>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {Object.entries(stats).map(([status, count]) => (
          <div
            key={status}
            className="bg-white p-6 rounded-lg shadow border border-gray-200"
          >
            <p className="text-sm font-medium text-gray-600">{status}</p>
            <p className="text-2xl font-bold text-gray-900">{count}</p>
          </div>
        ))}
      </div>

      {/* Jobs */}
      {!Array.isArray(jobs) || jobs.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg shadow border border-gray-200">
          <Briefcase className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-sm font-medium text-gray-900">
            No job applications
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            Get started by adding a new job application.
          </p>
          <button
            onClick={() => navigate("/add")}
            className="mt-6 inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            <PlusCircle className="w-4 h-4 mr-2" />
            Add Job Application
          </button>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white p-6 rounded-lg shadow border hover:shadow-lg transition"
            >
              <div className="flex justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-900 truncate">
                  {job.company}
                </h3>
                <span
                  className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                    job.status
                  )}`}
                >
                  {job.status}
                </span>
              </div>

              <p className="text-sm text-gray-600 mb-2 truncate">{job.title}</p>
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <Calendar className="w-4 h-4 mr-1" />
                {job.date}
              </div>

              <div className="flex justify-end">
                <button
                  onClick={() => viewJobDetails(job.id)}
                  className="px-3 py-1.5 border rounded text-sm text-gray-700 bg-white hover:bg-gray-50"
                >
                  <Eye className="w-3 h-3 mr-1" />
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
