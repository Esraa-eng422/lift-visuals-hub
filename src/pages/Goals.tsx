
import React, { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Calendar, Target, Award, Check } from "lucide-react";
import GoalProgressCard from "@/components/goals/GoalProgressCard";
import GoalsList from "@/components/goals/GoalsList";

const Goals: React.FC = () => {
  const [showAddGoal, setShowAddGoal] = useState(false);

  return (
    <DashboardLayout activePage="goals">
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-4 sm:mb-0">Fitness Goals</h1>
          <Button 
            onClick={() => setShowAddGoal(!showAddGoal)}
            className="bg-fitness-primary"
          >
            {showAddGoal ? "Cancel" : <>Add Goal <Plus className="ml-1 h-4 w-4" /></>}
          </Button>
        </div>

        {showAddGoal && (
          <Card className="mb-6 content-card">
            <CardHeader>
              <CardTitle>Add New Goal</CardTitle>
              <CardDescription>Create a new fitness goal to track your progress</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Goal Title</label>
                    <Input placeholder="e.g., Bench Press 225 lbs" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Goal Type</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="strength">Strength</SelectItem>
                        <SelectItem value="cardio">Cardio</SelectItem>
                        <SelectItem value="weight">Body Weight</SelectItem>
                        <SelectItem value="habit">Habit</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Target Value</label>
                    <Input type="number" placeholder="Target value" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Unit</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select unit" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="lbs">lbs</SelectItem>
                        <SelectItem value="kg">kg</SelectItem>
                        <SelectItem value="reps">reps</SelectItem>
                        <SelectItem value="min">minutes</SelectItem>
                        <SelectItem value="km">kilometers</SelectItem>
                        <SelectItem value="miles">miles</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Target Date</label>
                    <Input type="date" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Current Value</label>
                    <Input type="number" placeholder="Current value" />
                  </div>
                </div>
                <div className="pt-2 flex justify-end">
                  <Button className="bg-fitness-primary">Save Goal</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <GoalProgressCard 
            title="In Progress" 
            count={4} 
            icon={<Target className="h-6 w-6" />} 
            color="bg-blue-100 text-fitness-primary" 
          />
          <GoalProgressCard 
            title="Approaching Targets" 
            count={2} 
            icon={<Calendar className="h-6 w-6" />} 
            color="bg-amber-100 text-amber-600" 
          />
          <GoalProgressCard 
            title="Completed" 
            count={7} 
            icon={<Award className="h-6 w-6" />} 
            color="bg-green-100 text-green-600" 
          />
        </div>

        <div className="content-card">
          <GoalsList />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Goals;
