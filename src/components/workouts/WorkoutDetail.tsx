
import React from "react";
import { ArrowLeft, Calendar, Clock, Dumbbell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

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

interface WorkoutDetailProps {
  workout: Workout;
  onBack: () => void;
}

const WorkoutDetail: React.FC<WorkoutDetailProps> = ({ workout, onBack }) => {
  return (
    <div className="p-6">
      <div className="flex items-center mb-6">
        <Button 
          variant="ghost" 
          size="sm" 
          className="mr-2 text-gray-500" 
          onClick={onBack}
        >
          <ArrowLeft size={18} />
        </Button>
        <h2 className="text-lg font-semibold text-gray-900">{workout.name}</h2>
      </div>

      <div className="flex flex-wrap gap-4 mb-6">
        <div className="flex items-center text-sm text-gray-600">
          <Calendar size={16} className="mr-1 text-fitness-primary" />
          <span>{workout.date}</span>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <Clock size={16} className="mr-1 text-fitness-primary" />
          <span>{workout.duration}</span>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <Dumbbell size={16} className="mr-1 text-fitness-primary" />
          <span>{workout.exercises.length} exercises</span>
        </div>
      </div>

      {workout.notes && (
        <div className="mb-6 p-4 bg-gray-50 rounded-md">
          <h3 className="text-sm font-medium text-gray-900 mb-2">Notes</h3>
          <p className="text-sm text-gray-600">{workout.notes}</p>
        </div>
      )}

      <h3 className="text-base font-medium text-gray-900 mb-4">Exercises</h3>
      <div className="rounded-md border border-gray-200 overflow-hidden">
        <div className="grid grid-cols-5 p-3 bg-gray-50 text-xs font-medium text-gray-500 uppercase tracking-wider">
          <div className="col-span-2">Exercise</div>
          <div>Sets</div>
          <div>Reps/Time</div>
          <div>Weight</div>
        </div>
        <div>
          {workout.exercises.map((exercise, index) => (
            <div 
              key={exercise.id}
              className={`grid grid-cols-5 p-3 text-sm ${
                index % 2 === 0 ? "bg-white" : "bg-gray-50"
              }`}
            >
              <div className="col-span-2 font-medium text-gray-900">{exercise.name}</div>
              <div>{exercise.sets}</div>
              <div>{exercise.reps || exercise.duration || "-"}</div>
              <div>{exercise.weight || "-"}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkoutDetail;
