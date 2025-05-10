
import React from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import PersonalRecordsList from "@/components/records/PersonalRecordsList";

const PersonalRecords: React.FC = () => {
  return (
    <DashboardLayout activePage="records">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Personal Records</h1>
        <PersonalRecordsList />
      </div>
    </DashboardLayout>
  );
};

export default PersonalRecords;
