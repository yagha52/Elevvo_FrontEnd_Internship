import React, { createContext, useReducer, useEffect } from "react";

export const JobContext = createContext();

const jobReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_JOBS":
      return action.payload;
    case "ADD_JOB":
      return [...state, { ...action.payload, id: Date.now().toString() }];
    case "UPDATE_JOB":
      return state.map((job) =>
        job.id === action.payload.id ? action.payload : job
      );
    case "DELETE_JOB":
      return state.filter((job) => job.id !== action.payload);
    case "IMPORT_JOBS":
      return action.payload;
    default:
      return state;
  }
};

export const JobProvider = ({ children }) => {
  const [jobs, dispatch] = useReducer(jobReducer, []);

  useEffect(() => {
    const savedJobs = JSON.parse(localStorage.getItem("jobApplications") || "[]");
    dispatch({ type: "LOAD_JOBS", payload: savedJobs });
  }, []);

  useEffect(() => {
    localStorage.setItem("jobApplications", JSON.stringify(jobs));
  }, [jobs]);

  const addJob = (job) => dispatch({ type: "ADD_JOB", payload: job });
  const updateJob = (job) => dispatch({ type: "UPDATE_JOB", payload: job });
  const deleteJob = (id) => dispatch({ type: "DELETE_JOB", payload: id });

  const exportJobs = () => {
    const dataStr = JSON.stringify(jobs, null, 2);
    const dataBlob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "job-applications.json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const importJobs = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const importedJobs = JSON.parse(e.target.result);

          // Validate that importedJobs is an array
          if (!Array.isArray(importedJobs)) {
            alert("Invalid JSON format: Expected an array of job applications");
            return;
          }

          // Validate that each item has the required properties
          const isValidJobs = importedJobs.every(job =>
            job &&
            typeof job === 'object' &&
            job.company &&
            job.title
          );

          if (!isValidJobs) {
            alert("Invalid job data: Each job must have company and title properties");
            return;
          }

          dispatch({ type: "IMPORT_JOBS", payload: importedJobs });
        } catch (error) {
          alert("Invalid JSON file format: " + error.message);
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <JobContext.Provider
      value={{ jobs, addJob, updateJob, deleteJob, exportJobs, importJobs }}
    >
      {children}
    </JobContext.Provider>
  );
};
