
import React from "react";
import { Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Workout {
  id: string;
  name: string;
  date: string;
  duration: string;
  exercises: number;
}

const mockWorkouts: Workout[] = [
  {
    id: "1",
    name: "Upper Body Strength",
    date: "May 9, 2025",
    duration: "45 min",
    exercises: 5,
  },
  {
    id: "2",
    name: "HIIT Cardio",
    date: "May 7, 2025",
    duration: "30 min",
    exercises: 8,
  },
  {
    id: "3",
    name: "Leg Day",
    date: "May 5, 2025",
    duration: "60 min",
    exercises: 6,
  },
];

const RecentWorkouts: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Recent Workouts</h2>
        <Button variant="ghost" className="text-fitness-primary">View all</Button>
      </div>
      <div className="space-y-4">
        {mockWorkouts.map((workout) => (
          <div key={workout.id} className="workout-item">
            <h3 className="font-medium text-gray-900">{workout.name}</h3>
            <div className="flex items-center mt-2 text-sm text-gray-500">
              <Calendar size={16} className="mr-1" />
              <span className="mr-4">{workout.date}</span>
              <Clock size={16} className="mr-1" />
              <span>{workout.duration}</span>
            </div>
            <div className="mt-2 text-sm text-gray-500">
              {workout.exercises} exercises
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentWorkouts;
