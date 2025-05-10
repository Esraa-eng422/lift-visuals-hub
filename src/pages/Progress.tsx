
import React from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import WorkoutFrequencyChart from "@/components/progress/WorkoutFrequencyChart";
import StrengthProgressChart from "@/components/progress/StrengthProgressChart";
import WorkoutVolumeChart from "@/components/progress/WorkoutVolumeChart";

const Progress: React.FC = () => {
  return (
    <DashboardLayout activePage="progress">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Progress</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="content-card p-4">
            <WorkoutFrequencyChart />
          </div>
          <div className="content-card p-4">
            <StrengthProgressChart />
          </div>
        </div>
        
        <div className="grid grid-cols-1 gap-6">
          <div className="content-card p-4">
            <WorkoutVolumeChart />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Progress;
