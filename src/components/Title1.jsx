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


export default function Title1() {
  const [nodes1, setNodes1] = useState([]);
  const [edges1, setEdges1] = useState([]);
  const [item1, setItem1] = useState(null);

  const flowRef1 = useRef();

  const onNodesChange1 = useCallback(
    (changes) => setNodes1((nds) => applyNodeChanges(changes, nds)),
    []
  );
  const onEdgesChange1 = useCallback(
    (changes) => setEdges1((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  const onConnect1 = useCallback(
    (params) => setEdges1((eds) => addEdge(params, eds)),
    []
  );

  const onDragOver1 = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  useEffect(() => {
    if (item1) {
      const nextNodeId = `node-${new Date().getTime()}`;
      const newEdge = {
        id: `edge-${nextNodeId}`,
        target: item1.id,
        source: nodes1[nodes1.length - 2]?.id,
        type: "step",
        animated: true,
      };
      setEdges1((eds) => [...eds, newEdge]);
    }
  }, [nodes1, item1]);

  const [, dropRef1] = useDrop(() => ({
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
      setNodes1((nds) => [...nds, newNode]);
      setItem1(item);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  }));

  return (
    <>
      <div className="flex">
        <h2 className="text-3xl ">Title 1</h2>
      </div>
      <div
        ref={dropRef1}
        className="flex-grow relative border border-black rounded-lg"
        style={{ width: "100%", height: "45%" }}
      >
        <ReactFlow
          ref={flowRef1}
          nodes={nodes1}
          onNodesChange={onNodesChange1}
          edges={edges1}
          onEdgesChange={onEdgesChange1}
          onConnect={onConnect1}
          onDragOver={onDragOver1}
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
