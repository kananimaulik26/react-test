import { useState, useCallback, useRef } from "react";
import { useDrop } from "react-dnd";
import ReactFlow, {
  Controls,
  Background,
  applyNodeChanges,
  applyEdgeChanges,
  BackgroundVariant,
  BaseEdge,
  addEdge,
} from "reactflow";
import "reactflow/dist/style.css";

const initialNodes = [
  {
    id: "1",
    data: { label: "Hello" },
    position: { x: 0, y: 0 },
    type: "box",
  },
  {
    id: "2",
    data: { label: "World" },
    position: { x: 100, y: 100 },
  },
];

const initialEdges = [
  { id: "e1-2", source: "1", target: "2", animated: true },
  { id: "e2-3", source: "2", target: "3", animated: true },
  { id: "e3-4", source: "3", target: "4", animated: true },
  { id: "e4-5", source: "4", target: "5", animated: true },
];

function Flow() {
  const layreref = useRef();
  console.log("✌️layreref --->", layreref.current);
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );
  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

  const [{ canDrop, isOver }, dropRef] = useDrop(() => ({
    accept: "box",
    drop: (item, monitor) => {
      const nextNodeId = `node-${new Date().getTime()}`; // Ensure unique node ID
      const newNode = {
        id: item.id,
        data: item.data,
        position: { x: item.position.x, y: item.position.y },
        type: "box",
      };
      setNodes((nds) => [...nds, newNode]);

      if (nodes.length > 0) {
        const newEdge = {
          id: `edge-${nextNodeId}`,
          source: nodes[nodes.length - 1].id,
          target: item.id,
          type: "step",
        };
        setEdges((eds) => [...eds, newEdge]);
      }
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  }));

  return (
    <>
      <div className="flex">
        <h2 className="text-3xl ">Title</h2>
      </div>
      <div ref={dropRef} style={{ height: "100%", width: "100%" }}>
        <ReactFlow
          ref={layreref}
          nodes={nodes}
          onNodesChange={onNodesChange}
          edges={edges}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          fitView
        >
          <Background
            gap={100}
            color="#ccc"
            variant={BackgroundVariant.Cross}
          />
          <BaseEdge />
          <Controls />
        </ReactFlow>
      </div>
    </>
  );
}

export default Flow;
