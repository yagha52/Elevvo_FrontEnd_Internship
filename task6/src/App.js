import React from "react";
import Dashboard from "./components/Dashboard";
import ErrorBoundary from "./components/ErrorBoundary";

// Main App Export with Error Boundary
const App = () => (
  <ErrorBoundary>
    <Dashboard />
  </ErrorBoundary>
);

export default App;