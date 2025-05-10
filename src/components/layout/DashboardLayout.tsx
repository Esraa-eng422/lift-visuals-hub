
import React from "react";
import { 
  BarChart, 
  Dumbbell, 
  History, 
  Medal, 
  TrendingUp 
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Link, useNavigate } from "react-router-dom";

interface DashboardLayoutProps {
  children: React.ReactNode;
  activePage: "dashboard" | "history" | "records" | "progress";
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, activePage }) => {
  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: <BarChart size={20} />, path: "/dashboard" },
    { id: "history", label: "Workout History", icon: <History size={20} />, path: "/history" },
    { id: "records", label: "Personal Records", icon: <Medal size={20} />, path: "/records" },
    { id: "progress", label: "Progress", icon: <TrendingUp size={20} />, path: "/progress" },
  ];

  const navigate = useNavigate();

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="hidden md:flex flex-col w-64 bg-white border-r border-gray-200">
        <div className="flex items-center justify-center h-14 border-b border-gray-200">
          <div className="flex items-center">
            <Dumbbell className="h-6 w-6 text-fitness-primary" />
            <span className="ml-2 text-lg font-semibold text-gray-900">FitTrack</span>
          </div>
        </div>
        
        <div className="flex flex-col flex-1 pt-5">
          <nav className="flex-1 px-2 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className={cn(
                  item.id === activePage
                    ? "bg-gray-100 text-fitness-primary"
                    : "text-gray-600 hover:bg-gray-50 hover:text-fitness-primary",
                  "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                )}
              >
                <div className={cn(
                  item.id === activePage
                    ? "text-fitness-primary"
                    : "text-gray-400 group-hover:text-fitness-primary",
                  "mr-3"
                )}>
                  {item.icon}
                </div>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        <header className="flex justify-between items-center py-4 px-6 bg-white border-b border-gray-200 md:hidden">
          <div className="flex items-center">
            <Dumbbell className="h-6 w-6 text-fitness-primary" />
            <h1 className="ml-2 text-lg font-semibold">FitTrack</h1>
          </div>
          {/* Mobile menu button */}
          <button className="p-1 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none">
            <span className="sr-only">Open menu</span>
            {/* Menu icon */}
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto bg-gray-50">
          <div className="py-6 px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
