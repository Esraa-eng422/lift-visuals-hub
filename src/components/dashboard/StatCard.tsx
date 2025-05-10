
import React from "react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string;
  subtext?: string;
  icon?: React.ReactNode;
  color?: "primary" | "secondary" | "accent" | "default";
}

const StatCard: React.FC<StatCardProps> = ({ title, value, subtext, icon, color = "default" }) => {
  const colorClasses = {
    primary: "border-l-4 border-fitness-primary",
    secondary: "border-l-4 border-fitness-secondary",
    accent: "border-l-4 border-fitness-accent",
    default: "",
  };

  return (
    <div className={cn("fitness-stat-card", colorClasses[color])}>
      <div className="flex justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <p className="mt-1 text-xl font-semibold text-gray-900">{value}</p>
          {subtext && <p className="mt-1 text-xs text-gray-500">{subtext}</p>}
        </div>
        {icon && <div className="text-gray-400">{icon}</div>}
      </div>
    </div>
  );
};

export default StatCard;
