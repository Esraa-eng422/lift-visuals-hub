
import React from "react";
import { BarChart as BarChartIcon } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const mockData = [
  { day: "Mon", workouts: 1 },
  { day: "Tue", workouts: 2 },
  { day: "Wed", workouts: 0 },
  { day: "Thu", workouts: 1 },
  { day: "Fri", workouts: 0 },
  { day: "Sat", workouts: 2 },
  { day: "Sun", workouts: 1 },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border border-gray-200 shadow-sm rounded-md">
        <p className="text-sm">{`${payload[0].payload.day}: ${payload[0].value} workout${payload[0].value !== 1 ? 's' : ''}`}</p>
      </div>
    );
  }
  return null;
};

const WorkoutFrequencyChart: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <BarChartIcon className="h-5 w-5 text-fitness-primary mr-2" />
          <h2 className="text-lg font-semibold text-gray-900">Workout Frequency</h2>
        </div>
        <div className="text-sm text-gray-500">Last 7 days</div>
      </div>
      
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={mockData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
            <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 12 }} 
              tickCount={3} 
              domain={[0, 'dataMax + 1']} 
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(0, 0, 0, 0.05)' }} />
            <Bar 
              dataKey="workouts" 
              fill="#3B82F6" 
              radius={[4, 4, 0, 0]} 
              barSize={30} 
              animationDuration={1500}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default WorkoutFrequencyChart;
