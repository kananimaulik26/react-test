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

const initialEdges = [
  { id: "e1-2", source: "1", target: "2", animated: true },
  // { id: "e2-3", source: "2", target: "3", animated: true },
  // { id: "e3-4", source: "3", target: "4", animated: true },
  // { id: "e4-5", source: "4", target: "5", animated: true },
];

function Flow() {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState(initialEdges);
  const flowref = useRef();

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );
  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const [, dropRef] = useDrop(() => ({
    accept: "box",
    drop: (item, monitor) => {
      const nextNodeId = `node-${new Date().getTime()}`;
      const clientOffset = monitor.getClientOffset(); // Ensure unique node ID
      console.log("✌️clientOffset --->", clientOffset);

      const newNode = {
        id: item.id,
        data: item.data,
        position: { x: clientOffset.x, y: clientOffset.y },
        sourcePosition: item.sourcePosition,
        targetPosition: item.targetPosition,
        style: item.style,
        animated: true,
      };
      setNodes((nds) => [...nds, newNode]);

      if (nodes.length > 0) {
        const newEdge = {
          id: `edge-${nextNodeId}`,
          source: nodes[nodes?.length - 1]?.id,
          target: item?.id,
          type: "step",
          animated: true,
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
      <div
        ref={dropRef}
        style={{ height: "100%", width: "100%" }}
        className="flex-grow relative"
      >
        <ReactFlow
          ref={flowref}
          nodes={nodes}
          onNodesChange={onNodesChange}
          edges={edges}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onDragOver={onDragOver}
          fitView
        >
          <Background
            id="1"
            gap={10}
            color="#2793E8"
            variant={BackgroundVariant.Dots}
          />
          <Background
            id="2"
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

export default Flow;
