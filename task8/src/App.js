import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { JobProvider } from "./context/JobContext";
import Navigation from "./components/Navigation";
import Dashboard from "./components/Dashboard";
import AddJob from "./components/AddJob";
import JobDetails from "./components/JobDetails";

function App() {
  return (
    <JobProvider>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Navigation />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/add" element={<AddJob />} />
            <Route path="/job/:id" element={<JobDetails />} />
          </Routes>
        </div>
      </Router>
    </JobProvider>
  );
}

export default App;
