import Card from "./Card/Card.jsx";
import { data } from "./Data/data.js";
import "./App.css";

function App() {
  return (
    <div
      style={{
        textAlign: "left",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(min(200px, 100%), 1fr))",
        gap: "20px",
        margin: "20px",
      }}
    >
      {data.map((elem) => {
        return <Card quest={elem} />;
      })}
    </div>
  );
}

export default App;
