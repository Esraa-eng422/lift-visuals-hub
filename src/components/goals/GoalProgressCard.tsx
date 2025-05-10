
import React from "react";

interface GoalProgressCardProps {
  title: string;
  count: number;
  icon: React.ReactNode;
  color: string;
}

const GoalProgressCard: React.FC<GoalProgressCardProps> = ({ title, count, icon, color }) => {
  return (
    <div className="content-card p-6 flex flex-col items-center text-center">
      <div className={`w-16 h-16 rounded-full ${color} flex items-center justify-center mb-3`}>
        {icon}
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-3xl font-bold mt-2">{count}</p>
    </div>
  );
};

export default GoalProgressCard;
