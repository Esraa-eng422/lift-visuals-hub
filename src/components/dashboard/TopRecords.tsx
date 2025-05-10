
import React from "react";
import { Medal, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Record {
  id: string;
  exercise: string;
  value: string;
  unit: string;
  date: string;
}

const mockRecords: Record[] = [
  {
    id: "1",
    exercise: "Bench Press",
    value: "225",
    unit: "lbs",
    date: "Apr 28, 2025",
  },
  {
    id: "2",
    exercise: "Squat",
    value: "315",
    unit: "lbs",
    date: "May 2, 2025",
  },
  {
    id: "3",
    exercise: "5K Run",
    value: "22:30",
    unit: "min",
    date: "May 8, 2025",
  },
];

const TopRecords: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Top Personal Records</h2>
        <Button variant="ghost" className="text-fitness-primary">View all</Button>
      </div>
      <div className="space-y-4">
        {mockRecords.map((record) => (
          <div key={record.id} className="record-item flex justify-between items-center">
            <div>
              <h3 className="font-medium text-gray-900">{record.exercise}</h3>
              <div className="text-sm text-gray-500">
                Achieved on {record.date}
              </div>
            </div>
            <div className="flex items-center">
              <Medal className="h-5 w-5 text-fitness-secondary mr-1" />
              <span className="text-lg font-semibold">
                {record.value} {record.unit}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRecords;
