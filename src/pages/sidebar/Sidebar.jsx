import React from "react";
import DraggableItem from "../../components/DraggableItem";
import { Position } from "reactflow";

function Sidebar() {
  const initialNodes = [
    {
      id: "1",
      data: { label: "Command 1" },
      position: { x: 100, y: 0 },
      sourcePosition: "right",
      targetPosition: "left",
      style: {
        width: 100,
        height: 100,
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
      type: "box",
    },
    {
      id: "2",
      data: { label: "Command 2" },
      position: { x: 100, y: 100 },
      sourcePosition: "right",
      targetPosition: "left",
      style: {
        width: 100,
        height: 100,
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },

      type: "box",
    },
    {
      id: "3",
      data: { label: "Command 3" },
      sourcePosition: "right",
      targetPosition: "left",
      position: { x: 100, y: 200 },
      style: {
        width: 100,
        height: 100,
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },

      type: "box",
    },
    {
      id: "4",
      data: { label: "Command 4" },
      sourcePosition: "right",
      targetPosition: "left",
      position: { x: 100, y: 300 },
      style: {
        width: 100,
        height: 100,
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },

      type: "box",
    },
    {
      id: "5",
      data: { label: "Command 5" },
      sourcePosition: "right",
      targetPosition: "left",
      position: { x: 100, y: 400 },
      style: {
        width: 100,
        height: 100,
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },

      type: "box",
    },
    {
      id: "6",
      data: { label: "Command 6" },
      sourcePosition: "right",
      targetPosition: "left",
      position: { x: 100, y: 500 },
      style: {
        width: 100,
        height: 100,
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
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
