import Title2 from "../../components/Title2";
import Title1 from "../../components/Title1";
import { ReactFlowProvider } from "reactflow";

// const initialEdges = [
//   // { id: "e1-2", source: "1", target: "2", animated: true },
//   // { id: "e2-3", source: "2", target: "3", animated: true },
//   // { id: "e3-4", source: "3", target: "4", animated: true },
//   // { id: "e4-5", source: "4", target: "5", animated: true },
// ];

function Flows() {
  return (
    <>
      <ReactFlowProvider>
        <Title1 />
      </ReactFlowProvider>

      <ReactFlowProvider>
        <Title2 />
      </ReactFlowProvider>
    </>
  );
}

export default Flows;
