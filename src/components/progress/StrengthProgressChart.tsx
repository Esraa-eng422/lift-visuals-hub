
import React, { useState } from "react";
import { TrendingUp } from "lucide-react";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend 
} from "recharts";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const mockExerciseData = {
  "Bench Press": [
    { date: "Jan", weight: 185 },
    { date: "Feb", weight: 195 },
    { date: "Mar", weight: 200 },
    { date: "Apr", weight: 215 },
    { date: "May", weight: 225 },
  ],
  "Squat": [
    { date: "Jan", weight: 225 },
    { date: "Feb", weight: 245 },
    { date: "Mar", weight: 275 },
    { date: "Apr", weight: 295 },
    { date: "May", weight: 315 },
  ],
  "Deadlift": [
    { date: "Jan", weight: 275 },
    { date: "Feb", weight: 295 },
    { date: "Mar", weight: 315 },
    { date: "Apr", weight: 335 },
    { date: "May", weight: 365 },
  ],
};

const exerciseOptions = Object.keys(mockExerciseData);

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border border-gray-200 shadow-sm rounded-md">
        <p className="text-sm font-medium">{`${label}`}</p>
        <p className="text-sm text-fitness-primary">{`${payload[0].value} lbs`}</p>
      </div>
    );
  }
  return null;
};

const StrengthProgressChart: React.FC = () => {
  const [selectedExercise, setSelectedExercise] = useState(exerciseOptions[0]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
        <div className="flex items-center">
          <TrendingUp className="h-5 w-5 text-fitness-primary mr-2" />
          <h2 className="text-lg font-semibold text-gray-900">Strength Progress</h2>
        </div>
        <div className="w-full sm:w-40">
          <Select 
            value={selectedExercise} 
            onValueChange={setSelectedExercise}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select exercise" />
            </SelectTrigger>
            <SelectContent>
              {exerciseOptions.map((exercise) => (
                <SelectItem key={exercise} value={exercise}>
                  {exercise}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart 
            data={mockExerciseData[selectedExercise as keyof typeof mockExerciseData]} 
            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
            <XAxis 
              dataKey="date" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 12 }} 
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 12 }} 
              domain={[(dataMin: number) => Math.floor(dataMin * 0.9), (dataMax: number) => Math.ceil(dataMax * 1.1)]}
            />
            <Tooltip content={<CustomTooltip />} />
            <Line 
              type="monotone" 
              dataKey="weight" 
              stroke="#3B82F6" 
              strokeWidth={2}
              dot={{ stroke: '#3B82F6', strokeWidth: 2, fill: 'white', r: 4 }}
              activeDot={{ r: 6, stroke: '#3B82F6', strokeWidth: 2, fill: '#3B82F6' }} 
              animationDuration={1500}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default StrengthProgressChart;
