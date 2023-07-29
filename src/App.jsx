import React from "react";
import ReactFlow, {
  Background,
  Controls,
  applyNodeChanges,
  applyEdgeChanges,
} from "reactflow";
import "reactflow/dist/style.css";

// const initialNodes = [
//   {
//     id: "1",
//     data: { label: "Hello" },
//     position: { x: 0, y: 0 },
//     type: "input",
//   },
//   {
//     id: "2",
//     data: { label: "World" },
//     position: { x: 100, y: 100 },
//   },
// ];
// const initialEdges = [
//   { id: "1-2", source: "1", target: "2", label: "to the", type: "step" },
// ];

const App = () => {
 

  return (
    <>
      <ReactFlow
        // nodes={nodes}
        // onNodesChange={onNodesChange}
        // edges={edges}
        // onEdgesChange={onEdgesChange}
      >
        <Background />
        <Controls />
      </ReactFlow>
    </>
  );
};

export default App;
