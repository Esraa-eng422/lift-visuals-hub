
import React from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import WorkoutList from "@/components/workouts/WorkoutList";

const WorkoutHistory: React.FC = () => {
  return (
    <DashboardLayout activePage="history">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Workout History</h1>
        <WorkoutList />
      </div>
    </DashboardLayout>
  );
};

export default WorkoutHistory;
