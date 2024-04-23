import { useCallback, useEffect, useRef, useState } from "react";
import { useDrop } from "react-dnd";
import ReactFlow, {
  Background,
  BackgroundVariant,
  BaseEdge,
  Controls,
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
} from "reactflow";
import "reactflow/dist/style.css";

export default function Title2() {
  const [nodes2, setNodes2] = useState([]);
  const [edges2, setEdges2] = useState([]);
  const [item2, setItem2] = useState(null);

  const flowRef2 = useRef();

  const onNodesChange2 = useCallback(
    (changes) => setNodes2((nds) => applyNodeChanges(changes, nds)),
    []
  );
  const onEdgesChange2 = useCallback(
    (changes) => setEdges2((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  const onConnect2 = useCallback(
    (params) => setEdges2((eds) => addEdge(params, eds)),
    []
  );

  const onDragOver2 = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  useEffect(() => {
    if (item2) {
      const nextNodeId = `node-${new Date().getTime()}`;
      const newEdge = {
        id: `edge-${nextNodeId}`,
        target: item2.id,
        source: nodes2[nodes2.length - 2]?.id,
        type: "step",
        animated: true,
      };
      setEdges2((eds) => [...eds, newEdge]);
    }
  }, [nodes2, item2]);

  const [, dropRef2] = useDrop(() => ({
    accept: "box",
    drop: (item, monitor) => {
      const clientOffset = monitor.getClientOffset();
      const newNode = {
        id: item.id,
        data: item.data,
        position: { x: clientOffset.x, y: clientOffset.y },
        sourcePosition: item.sourcePosition,
        targetPosition: item.targetPosition,
        style: item.style,
        animated: true,
      };
      setNodes2((nds) => [...nds, newNode]);
      setItem2(item);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  }));

  return (
    <>
      <div className="flex">
        <h2 className="text-3xl ">Title 2 </h2>
      </div>
      <div
        ref={dropRef2}
        className="flex-grow relative border border-black rounded-lg"
        style={{ width: "100%", height: "45%" }}
      >
        <ReactFlow
          ref={flowRef2}
          nodes={nodes2}
          onNodesChange={onNodesChange2}
          edges={edges2}
          onEdgesChange={onEdgesChange2}
          onConnect={onConnect2}
          onDragOver={onDragOver2}
          fitView
        >
          <Background
            id="3"
            gap={10}
            color="#2793E8"
            variant={BackgroundVariant.Dots}
          />

          <Background
            id="4"
            gap={100}
            color="#559900"
            variant={BackgroundVariant.Lines}
          />

          <BaseEdge />
          <Controls />
        </ReactFlow>
      </div>
    </>
  );
}
