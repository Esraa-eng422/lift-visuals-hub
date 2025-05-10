
import React from "react";
import Dashboard from "./Dashboard";

const Index: React.FC = () => {
  return (
    <div className="h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2560&h=1440&crop=entropy')", backgroundSize: "cover" }}>
      <div className="h-full w-full backdrop-blur-sm bg-white/70">
        <Dashboard />
      </div>
    </div>
  );
};

export default Index;
