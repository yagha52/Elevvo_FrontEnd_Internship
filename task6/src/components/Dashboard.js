import React, { useState } from "react";
import useRouter from "../hooks/useRouter";
import Sidebar from "./Sidebar";
import Header from "./Header";
import LoadingOverlay from "./LoadingOverlay";
import ToastContainer from "./ToastContainer";
import OverviewPage from "../pages/OverviewPage";
import ProjectsPage from "../pages/ProjectsPage";
import ProfilePage from "../pages/ProfilePage";
import mockData from "../data/mockData";
// Main Dashboard Component
const Dashboard = () => {
  const { currentPage, navigate } = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderPage = () => {
    switch (currentPage) {
      case 'overview': return <OverviewPage />;
      case 'projects': return <ProjectsPage />;
      case 'profile': return <ProfilePage />;
      default: return <OverviewPage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <Sidebar
        currentPage={currentPage}
        navigate={navigate}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:ml-64">
        <Header
          onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
          user={mockData.profile}
        />

        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            {renderPage()}
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-200 px-6 py-4">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
            <div>
              © 2024 FreelancePro Dashboard. All rights reserved.
            </div>
            <div className="flex items-center gap-4 mt-2 sm:mt-0">
              <button className="hover:text-gray-700 transition-colors">Privacy Policy</button>
              <button className="hover:text-gray-700 transition-colors">Terms of Service</button>
              <button className="hover:text-gray-700 transition-colors">Support</button>
            </div>
          </div>
        </footer>
      </div>

      {/* Loading Overlay for Demo */}
      <LoadingOverlay />

      {/* Toast Notifications */}
      <ToastContainer />
    </div>
  );
};

export default Dashboard;