import React from "react";
import { useDrag } from "react-dnd";

// Draggable Item Component
function DraggableItem({ item }) {
  const [{ isDragging }, dragRef] = useDrag(
    () => ({
      type: "box",
      item: () => {
        console.log(`Started dragging: ${item.data}`);
        return { id: item.id, data: item.data, position: item.position };
      },
      end: (item, monitor) => {
        const didDrop = monitor.didDrop();
        if (didDrop) {
          const dropResult = monitor.getDropResult();
          console.log(`Dropped ${item.data} into ${dropResult.name}`);
        } else {
          console.log(`Released ${item.data} without dropping into a target`);
        }
      },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [item]
  );

  return (
    <div
      ref={dragRef}
      style={{ opacity: isDragging ? 0.5 : 1, cursor: "move" }}
      className="gap-3 m-3 p-3 cursor-pointer border border-black text-xl items-center justify-center rounded-lg"
    >
      {item.data.label}
    </div>
  );
}
export default DraggableItem;
