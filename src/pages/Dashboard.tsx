
import React from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import StatCard from "@/components/dashboard/StatCard";
import RecentWorkouts from "@/components/dashboard/RecentWorkouts";
import TopRecords from "@/components/dashboard/TopRecords";
import { Activity, Clock, Dumbbell, TrendingUp } from "lucide-react";

const Dashboard: React.FC = () => {
  return (
    <DashboardLayout activePage="dashboard">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <StatCard 
            title="Weekly Workouts" 
            value="5" 
            subtext="+2 from last week" 
            color="primary"
            icon={<Activity size={24} />}
          />
          <StatCard 
            title="Total Workout Time" 
            value="225 min" 
            subtext="This week" 
            color="accent"
            icon={<Clock size={24} />}
          />
          <StatCard 
            title="Exercises Performed" 
            value="32" 
            subtext="Across 5 workouts" 
            color="secondary"
            icon={<Dumbbell size={24} />}
          />
          <StatCard 
            title="New PRs" 
            value="3" 
            subtext="This month" 
            color="primary"
            icon={<TrendingUp size={24} />}
          />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="content-card p-5">
            <RecentWorkouts />
          </div>
          <div className="content-card p-5">
            <TopRecords />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
