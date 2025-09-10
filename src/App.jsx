import Card from "./Card/Card.jsx";
import { data } from "./Data/data.js";
import "./App.css";

function App() {
  return (
    <>
      {data.map((elem) => {
        return <Card quest={elem} />;
      })}
    </>
  );
}

export default App;
