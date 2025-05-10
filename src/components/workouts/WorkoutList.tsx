
import React, { useState } from "react";
import { Calendar, Clock, ChevronRight, Dumbbell, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import WorkoutDetail from "./WorkoutDetail";

interface Exercise {
  id: string;
  name: string;
  sets: number;
  reps?: number;
  weight?: string;
  duration?: string;
}

interface Workout {
  id: string;
  name: string;
  date: string;
  duration: string;
  exercises: Exercise[];
  notes?: string;
}

const mockWorkouts: Workout[] = [
  {
    id: "1",
    name: "Upper Body Strength",
    date: "May 9, 2025",
    duration: "45 min",
    exercises: [
      { id: "e1", name: "Bench Press", sets: 4, reps: 8, weight: "185 lbs" },
      { id: "e2", name: "Overhead Press", sets: 3, reps: 10, weight: "95 lbs" },
      { id: "e3", name: "Barbell Rows", sets: 3, reps: 12, weight: "135 lbs" },
      { id: "e4", name: "Bicep Curls", sets: 3, reps: 12, weight: "30 lbs" },
      { id: "e5", name: "Tricep Extensions", sets: 3, reps: 12, weight: "25 lbs" },
    ],
    notes: "Felt strong today. Increased bench press weight by 5 lbs.",
  },
  {
    id: "2",
    name: "HIIT Cardio",
    date: "May 7, 2025",
    duration: "30 min",
    exercises: [
      { id: "e6", name: "Burpees", sets: 3, reps: 15 },
      { id: "e7", name: "Mountain Climbers", sets: 3, duration: "45 sec" },
      { id: "e8", name: "Jump Squats", sets: 3, reps: 20 },
      { id: "e9", name: "Push-ups", sets: 3, reps: 15 },
      { id: "e10", name: "Plank", sets: 3, duration: "60 sec" },
      { id: "e11", name: "High Knees", sets: 3, duration: "45 sec" },
      { id: "e12", name: "Box Jumps", sets: 3, reps: 12 },
      { id: "e13", name: "Russian Twists", sets: 3, reps: 20 },
    ],
  },
  {
    id: "3",
    name: "Leg Day",
    date: "May 5, 2025",
    duration: "60 min",
    exercises: [
      { id: "e14", name: "Squats", sets: 5, reps: 8, weight: "225 lbs" },
      { id: "e15", name: "Romanian Deadlifts", sets: 3, reps: 10, weight: "175 lbs" },
      { id: "e16", name: "Walking Lunges", sets: 3, reps: 16 },
      { id: "e17", name: "Leg Press", sets: 3, reps: 12, weight: "270 lbs" },
      { id: "e18", name: "Leg Extensions", sets: 3, reps: 12, weight: "110 lbs" },
      { id: "e19", name: "Calf Raises", sets: 4, reps: 15, weight: "140 lbs" },
    ],
    notes: "Great session, legs feeling stronger. Need to stretch more next time.",
  },
  {
    id: "4",
    name: "Core & Recovery",
    date: "May 3, 2025",
    duration: "40 min",
    exercises: [
      { id: "e20", name: "Plank", sets: 3, duration: "60 sec" },
      { id: "e21", name: "Russian Twists", sets: 3, reps: 20, weight: "15 lbs" },
      { id: "e22", name: "Hanging Leg Raises", sets: 3, reps: 12 },
      { id: "e23", name: "Cable Crunches", sets: 3, reps: 15, weight: "55 lbs" },
      { id: "e24", name: "Yoga Flow", sets: 1, duration: "15 min" },
    ],
  },
  {
    id: "5",
    name: "Pull Workout",
    date: "May 1, 2025",
    duration: "50 min",
    exercises: [
      { id: "e25", name: "Pull-ups", sets: 4, reps: 8 },
      { id: "e26", name: "Deadlifts", sets: 3, reps: 5, weight: "275 lbs" },
      { id: "e27", name: "Seated Rows", sets: 3, reps: 10, weight: "140 lbs" },
      { id: "e28", name: "Face Pulls", sets: 3, reps: 15, weight: "45 lbs" },
      { id: "e29", name: "Hammer Curls", sets: 3, reps: 12, weight: "25 lbs" },
    ],
  },
];

const WorkoutList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedWorkout, setSelectedWorkout] = useState<Workout | null>(null);

  const filteredWorkouts = mockWorkouts.filter(workout => 
    workout.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectWorkout = (workout: Workout) => {
    setSelectedWorkout(workout);
  };

  const handleBackToList = () => {
    setSelectedWorkout(null);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100">
      {selectedWorkout ? (
        <WorkoutDetail workout={selectedWorkout} onBack={handleBackToList} />
      ) : (
        <div>
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Workout History</h2>
            <div className="mt-4 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <Input
                className="pl-10"
                placeholder="Search workouts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="divide-y divide-gray-200">
            {filteredWorkouts.map((workout) => (
              <div
                key={workout.id}
                className="p-6 hover:bg-gray-50 cursor-pointer"
                onClick={() => handleSelectWorkout(workout)}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-base font-medium text-gray-900">{workout.name}</h3>
                    <div className="flex items-center mt-2 text-sm text-gray-500">
                      <Calendar size={16} className="mr-1" />
                      <span className="mr-4">{workout.date}</span>
                      <Clock size={16} className="mr-1" />
                      <span>{workout.duration}</span>
                    </div>
                    <div className="mt-1 flex items-center text-sm text-gray-500">
                      <Dumbbell size={16} className="mr-1" />
                      <span>{workout.exercises.length} exercises</span>
                    </div>
                  </div>
                  <ChevronRight className="text-gray-400" size={20} />
                </div>
              </div>
            ))}
            {filteredWorkouts.length === 0 && (
              <div className="py-10 px-6 text-center">
                <p className="text-gray-500">No workouts found. Try a different search.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkoutList;
