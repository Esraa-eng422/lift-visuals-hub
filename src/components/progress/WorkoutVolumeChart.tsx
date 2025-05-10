
import React from "react";
import { BarChart as BarChartIcon } from "lucide-react";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from "recharts";

const mockData = [
  { month: "Jan", volume: 15000 },
  { month: "Feb", volume: 18500 },
  { month: "Mar", volume: 17200 },
  { month: "Apr", volume: 21000 },
  { month: "May", volume: 24500 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border border-gray-200 shadow-sm rounded-md">
        <p className="text-sm font-medium">{`${label}`}</p>
        <p className="text-sm text-fitness-primary">{`${payload[0].value.toLocaleString()} lbs`}</p>
      </div>
    );
  }
  return null;
};

const WorkoutVolumeChart: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <BarChartIcon className="h-5 w-5 text-fitness-primary mr-2" />
          <h2 className="text-lg font-semibold text-gray-900">Total Volume Lifted</h2>
        </div>
        <div className="text-sm text-gray-500">Last 5 months</div>
      </div>
      
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={mockData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
            <XAxis 
              dataKey="month" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 12 }} 
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 12 }}
              tickFormatter={(value) => `${Math.floor(value / 1000)}k`} 
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(0, 0, 0, 0.05)' }} />
            <Bar 
              dataKey="volume" 
              fill="#10B981" 
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

export default WorkoutVolumeChart;
