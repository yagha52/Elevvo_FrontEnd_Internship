import React from "react";
import { Briefcase } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const Navigation = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const currentPath = location.pathname;

    const navigateTo = (path) => navigate(path);

    return (
        <nav className="bg-blue-600 text-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <Briefcase className="w-8 h-8 mr-2" />
                        <button
                            onClick={() => navigateTo("/")}
                            className="text-xl font-bold hover:text-blue-200"
                        >
                            Job Tracker
                        </button>
                    </div>

                    <div className="flex items-baseline space-x-4">
                        <button
                            onClick={() => navigateTo("/")}
                            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${currentPath === "/" ? "bg-blue-700" : "hover:bg-blue-700"
                                }`}
                        >
                            Dashboard
                        </button>
                        <button
                            onClick={() => navigateTo("/add")}
                            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${currentPath === "/add" ? "bg-blue-700" : "hover:bg-blue-700"
                                }`}
                        >
                            Add Job
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
