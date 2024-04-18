import React from "react";
import Sidebar from "./sidebar/Sidebar";
import Flow from "./ReactFlow/Flows";
import { ReactFlowProvider } from "reactflow";

function Dashboard() {
  return (
    <div className="grid  grid-cols-3 grid-flow-col gap-2">
      <div className="border border-spacing-3 border-black rounded-lg m-4 p-4 col-span-2 gap-2 h-[95vh]">
        {" "}
        <ReactFlowProvider>
          <Flow />
        </ReactFlowProvider>
      </div>
      <div className="border border-spacing-3 border-black rounded-lg m-4 p-4 h-[95vh] ">
        {" "}
        <Sidebar />
      </div>
    </div>
  );
}

export default Dashboard;
