import React from "react";
import Sidebar from "./sidebar/Sidebar";
import Flows from "./ReactFlow/Flows";

function Dashboard() {
  return (
    <div className="grid  grid-cols-3  gap-2">
      <div className="border grid-column-start: 1 border-spacing-3 border-black rounded-lg m-4 p-4 col-span-2 gap-2 h-[95vh]">
        {" "}
        <Flows />
      </div>
      <div className="border border-spacing-3 grid-column-end: 3 border-black rounded-lg m-4 p-4 h-[95vh] ">
        {" "}
        <Sidebar />
      </div>
    </div>
  );
}

export default Dashboard;
