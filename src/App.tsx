import React from "react";
import { Routes, Route } from "react-router-dom";
import FamilyTree from "./pages/FamilyTree";
import Graph from "./pages/Graph";

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<FamilyTree />} />
        <Route path="/graph" element={<Graph />} />
      </Routes>
    </div>
  );
};

export default App;
