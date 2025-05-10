
import React, { useState } from "react";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Target, Clock } from "lucide-react";

interface Goal {
  id: string;
  title: string;
  type: 'strength' | 'cardio' | 'weight' | 'habit';
  targetValue: number;
  currentValue: number;
  unit: string;
  targetDate: string;
  status: 'in-progress' | 'completed' | 'approaching';
}

const mockGoals: Goal[] = [
  {
    id: "1",
    title: "Bench Press 225 lbs",
    type: "strength",
    targetValue: 225,
    currentValue: 205,
    unit: "lbs",
    targetDate: "Jun 15, 2025",
    status: 'in-progress'
  },
  {
    id: "2",
    title: "Run 5K under 25 minutes",
    type: "cardio",
    targetValue: 25,
    currentValue: 27,
    unit: "min",
    targetDate: "Jul 1, 2025",
    status: 'approaching'
  },
  {
    id: "3",
    title: "Squat 315 lbs",
    type: "strength",
    targetValue: 315,
    currentValue: 275,
    unit: "lbs",
    targetDate: "Aug 10, 2025",
    status: 'in-progress'
  },
  {
    id: "4",
    title: "Deadlift 405 lbs",
    type: "strength",
    targetValue: 405,
    currentValue: 365,
    unit: "lbs",
    targetDate: "Sep 5, 2025",
    status: 'in-progress'
  },
  {
    id: "5",
    title: "Complete 20 pull-ups in a row",
    type: "strength",
    targetValue: 20,
    currentValue: 12,
    unit: "reps",
    targetDate: "Jul 15, 2025",
    status: 'in-progress'
  },
  {
    id: "6",
    title: "Run half marathon",
    type: "cardio",
    targetValue: 13.1,
    currentValue: 13.1,
    unit: "miles",
    targetDate: "Apr 30, 2025",
    status: 'completed'
  },
  {
    id: "7",
    title: "Lose 10 lbs",
    type: "weight",
    targetValue: 10,
    currentValue: 10,
    unit: "lbs",
    targetDate: "Mar 15, 2025",
    status: 'completed'
  }
];

const GoalsList: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filterGoals = (goals: Goal[]) => {
    if (activeTab === "all") return goals;
    if (activeTab === "completed") return goals.filter(g => g.status === 'completed');
    if (activeTab === "in-progress") return goals.filter(g => g.status === 'in-progress');
    if (activeTab === "approaching") return goals.filter(g => g.status === 'approaching');
    return goals;
  };

  const getGoalProgress = (goal: Goal) => {
    if (goal.status === 'completed') return 100;
    return Math.round((goal.currentValue / goal.targetValue) * 100);
  };

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'completed':
        return <Badge className="bg-green-500">Completed</Badge>;
      case 'approaching':
        return <Badge className="bg-amber-500">Target Approaching</Badge>;
      default:
        return <Badge className="bg-blue-500">In Progress</Badge>;
    }
  };

  const filteredGoals = filterGoals(mockGoals);

  return (
    <div className="p-6">
      <Tabs defaultValue="all" onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-4 mb-4">
          <TabsTrigger value="all">All Goals</TabsTrigger>
          <TabsTrigger value="in-progress">In Progress</TabsTrigger>
          <TabsTrigger value="approaching">Approaching</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="mt-0">
          <div className="space-y-4">
            {filteredGoals.map(goal => (
              <div key={goal.id} className="p-4 border border-gray-100 rounded-md bg-white/90">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="font-medium text-gray-900">{goal.title}</h3>
                  {getStatusBadge(goal.status)}
                </div>
                <div className="mt-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Progress: {goal.currentValue} / {goal.targetValue} {goal.unit}</span>
                    <span>{getGoalProgress(goal)}%</span>
                  </div>
                  <Progress value={getGoalProgress(goal)} className="h-2" />
                </div>
                <div className="flex flex-wrap gap-x-4 mt-4 text-xs text-gray-500">
                  <div className="flex items-center">
                    <Target className="h-3 w-3 mr-1" />
                    <span>{goal.type}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    <span>Target: {goal.targetDate}</span>
                  </div>
                </div>
              </div>
            ))}
            
            {filteredGoals.length === 0 && (
              <div className="flex flex-col items-center justify-center py-12 text-gray-500">
                <Target className="h-12 w-12 mb-2 text-gray-300" />
                <p>No goals found in this category</p>
              </div>
            )}
          </div>
        </TabsContent>
        <TabsContent value="in-progress" className="mt-0">
          {/* Same structure as "all" tab - content will be filtered by the filterGoals function */}
        </TabsContent>
        <TabsContent value="approaching" className="mt-0">
          {/* Same structure as "all" tab - content will be filtered by the filterGoals function */}
        </TabsContent>
        <TabsContent value="completed" className="mt-0">
          {/* Same structure as "all" tab - content will be filtered by the filterGoals function */}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default GoalsList;
