
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Dumbbell, ChartBar, TrendingUp, Clock } from "lucide-react";

const Index: React.FC = () => {
  return (
    <div className="h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2560&h=1440&crop=entropy')", backgroundSize: "cover" }}>
      <div className="h-full w-full backdrop-blur-sm bg-white/70 flex flex-col">
        <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center flex-1 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Track Your Fitness Journey
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-10 max-w-2xl">
            Log workouts, track personal records, and visualize your progress all in one place.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button size="lg" asChild className="bg-fitness-primary hover:bg-fitness-primary/90">
              <Link to="/dashboard">Get Started</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/dashboard">View Demo</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-5xl">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Dumbbell className="text-fitness-primary h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Track Workouts</h3>
              <p className="text-gray-600">Log your exercises, sets, reps, and weight to keep a detailed history.</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <ChartBar className="text-fitness-secondary h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Analyze Data</h3>
              <p className="text-gray-600">View comprehensive statistics and insights about your training sessions.</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="text-fitness-accent h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Track Progress</h3>
              <p className="text-gray-600">Monitor your improvements over time with intuitive visual charts.</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="h-12 w-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Clock className="text-amber-500 h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Set Goals</h3>
              <p className="text-gray-600">Define and track fitness goals to stay motivated and focused.</p>
            </div>
          </div>
        </div>
        
        <footer className="w-full py-4 bg-white/50 backdrop-blur-sm border-t border-gray-200">
          <div className="container mx-auto px-4 text-center text-sm text-gray-600">
            © 2025 Fitness Tracker. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
