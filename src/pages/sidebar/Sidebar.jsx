import React, { useState } from "react";
import DraggableItem from "../../components/DraggableItem";

function Sidebar() {
  const initialNodes = [
    {
      id: "1",
      data: { label: "Command 1" },
      position: { x: 200, y: 200 },
      type: "box",
    },
    {
      id: "2",
      data: { label: "Command 2" },
      position: { x: 100, y: 100 },
      type: "box",
    },
    {
      id: "3",
      data: { label: "Command 3" },
      position: { x: 100, y: 200 },
      type: "box",
    },
    {
      id: "4",
      data: { label: "Command 4" },
      position: { x: 100, y: 300 },
      type: "box",
    },
    {
      id: "5",
      data: { label: "Command 5" },
      position: { x: 100, y: 400 },
      type: "box",
    },
    {
      id: "6",
      data: { label: "Command 6" },
      position: { x: 100, y: 500 },
      type: "box",
    },
  ];

  return (
    <>
      <div className="flex flex-col-reverse gap-10 cursor-pointer">
        <div className="text-3xl">Actions</div>
      </div>
      {initialNodes.map((item) => (
        <DraggableItem key={item.id} item={item} position={item.position} />
      ))}
    </>
  );
}

export default Sidebar;
// <>
//   <div className="flex flex-col-reverse gap-10 cursor-pointer ">
//     <div className="text-3xl flex">Actions</div>
//   </div>
//   <div
//     ref={dragRef}
//     style={{ opacity }}
//     className="gap-3 m-3 p-3 cursor-pointer"
//   >
//     <h3 className="border border-black text-xl items-center justify-center ">
//       Command 1
//     </h3>
//   </div>
//   <div className="gap-3 m-3 p-3">
//     <h3 className="border border-black text-xl items-center justify-center ">
//       Command 2
//     </h3>
//   </div>
//   <div className="gap-3 m-3 p-3">
//     <h3 className="border border-black text-xl items-center justify-center ">
//       Command 3
//     </h3>
//   </div>
//   <div className="gap-3 m-3 p-3">
//     <h3 className="border border-black text-xl items-center justify-center ">
//       Command 4
//     </h3>
//   </div>
//   <div className="gap-3 m-3 p-3">
//     <h3 className="border border-black text-xl items-center justify-center ">
//       Command 5
//     </h3>
//   </div>
// </>
