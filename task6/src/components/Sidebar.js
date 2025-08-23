import React from "react";
import { Home, FolderOpen, User, X } from "lucide-react";

// Sidebar Component
const Sidebar = ({ currentPage, navigate, isOpen, onClose }) => {
  const menuItems = [
    { id: 'overview', label: 'Overview', icon: Home },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'profile', label: 'Profile Settings', icon: User }
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40" onClick={onClose} />
      )}

      {/* Sidebar */}
      <aside className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-gray-900 text-white transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
        <div className="p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">FreelancePro</h2>
            <button onClick={onClose} className="lg:hidden p-1 hover:bg-gray-800 rounded">
              <X size={20} />
            </button>
          </div>
        </div>

        <nav className="mt-8">
          {menuItems.map(item => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => {
                  navigate(item.id);
                  onClose();
                }}
                className={`w-full flex items-center gap-3 px-6 py-3 text-left hover:bg-gray-800 transition-colors ${currentPage === item.id ? 'bg-gray-800 border-r-4 border-blue-500' : ''
                  }`}
              >
                <Icon size={20} />
                {item.label}
              </button>
            );
          })}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;