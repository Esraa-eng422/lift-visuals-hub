
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Search, Medal, ArrowUp, Calendar } from "lucide-react";

interface PersonalRecord {
  id: string;
  exercise: string;
  value: string;
  unit: string;
  date: string;
  type: "strength" | "cardio" | "other";
  previousValue?: string;
  improvement?: string;
}

const mockRecords: PersonalRecord[] = [
  {
    id: "1",
    exercise: "Bench Press",
    value: "225",
    unit: "lbs",
    date: "Apr 28, 2025",
    type: "strength",
    previousValue: "215",
    improvement: "+10 lbs",
  },
  {
    id: "2",
    exercise: "Squat",
    value: "315",
    unit: "lbs",
    date: "May 2, 2025",
    type: "strength",
    previousValue: "295",
    improvement: "+20 lbs",
  },
  {
    id: "3",
    exercise: "Deadlift",
    value: "365",
    unit: "lbs",
    date: "Apr 15, 2025",
    type: "strength",
    previousValue: "355",
    improvement: "+10 lbs",
  },
  {
    id: "4",
    exercise: "Overhead Press",
    value: "135",
    unit: "lbs",
    date: "Apr 20, 2025",
    type: "strength",
    previousValue: "125",
    improvement: "+10 lbs",
  },
  {
    id: "5",
    exercise: "Pull-up",
    value: "15",
    unit: "reps",
    date: "Apr 22, 2025",
    type: "strength",
    previousValue: "12",
    improvement: "+3 reps",
  },
  {
    id: "6",
    exercise: "5K Run",
    value: "22:30",
    unit: "min",
    date: "May 8, 2025",
    type: "cardio",
    previousValue: "23:45",
    improvement: "-1:15 min",
  },
  {
    id: "7",
    exercise: "1 Mile Run",
    value: "6:45",
    unit: "min",
    date: "Apr 30, 2025",
    type: "cardio",
    previousValue: "7:00",
    improvement: "-0:15 min",
  },
  {
    id: "8",
    exercise: "Plank",
    value: "3:30",
    unit: "min",
    date: "May 3, 2025",
    type: "other",
    previousValue: "3:00",
    improvement: "+0:30 min",
  },
  {
    id: "9",
    exercise: "Box Jump",
    value: "30",
    unit: "inches",
    date: "Apr 25, 2025",
    type: "other",
    previousValue: "28",
    improvement: "+2 inches",
  },
];

const PersonalRecordsList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  const filteredRecords = mockRecords.filter(record => 
    record.exercise.toLowerCase().includes(searchTerm.toLowerCase()) && 
    (activeTab === "all" || record.type === activeTab)
  );

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">Personal Records</h2>
        <div className="mt-4 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <Input
            className="pl-10"
            placeholder="Search records..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="mt-4">
          <Tabs defaultValue="all" onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-4 w-full">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="strength">Strength</TabsTrigger>
              <TabsTrigger value="cardio">Cardio</TabsTrigger>
              <TabsTrigger value="other">Other</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
        {filteredRecords.map((record) => (
          <div key={record.id} className="record-item flex flex-col">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-medium text-gray-900">{record.exercise}</h3>
              <Medal className="h-5 w-5 text-fitness-secondary" />
            </div>
            <div className="text-xl font-semibold text-gray-900 mb-1">
              {record.value} {record.unit}
            </div>
            {record.improvement && (
              <div className="flex items-center text-sm text-fitness-secondary">
                <ArrowUp className="h-4 w-4 mr-1" />
                <span>{record.improvement} from previous</span>
              </div>
            )}
            <div className="mt-auto pt-2 flex items-center text-xs text-gray-500">
              <Calendar className="h-3 w-3 mr-1" />
              <span>Achieved on {record.date}</span>
            </div>
          </div>
        ))}
        {filteredRecords.length === 0 && (
          <div className="col-span-full py-10 text-center">
            <p className="text-gray-500">No records found. Try a different search or category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PersonalRecordsList;
