export default function App() {
  const API_URL = "https://fastapi-x-neo4j-2.onrender.com"; 

  return (
    <div style={{ height: "100vh", width: "100vw", background: "#0b0b0b" }}>
      <h3 style={{ margin: 12, color: "white" }}>Neo4j Graph (PyVis)</h3>

      <iframe
        title="pyvis-graph"
        src={`${API_URL}/vis`}
        style={{
          width: "100%",
          height: "calc(100vh - 60px)",
          border: "1px solid #333",
          borderRadius: 12,
          background: "#0b0b0b",
        }}
      />
    </div>
  );
}
