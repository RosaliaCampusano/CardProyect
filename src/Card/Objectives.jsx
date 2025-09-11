function Objectives({ objectives, setObjectives }) {
  console.log(objectives);
  const updateItem = (itemId, isCompleted) => {
    setObjectives(
      objectives.map((elem) => {
        if (elem.id === itemId) {
          return { ...elem, completed: isCompleted };
        } else {
          return elem;
        }
      })
    );
  };
  return (
    <div className="objectives-container">
      <ul
        style={{
          padding: "10px",
          listStyleType: "none",
          margin: "0",
        }}
      >
        <p>Objectives: </p>
        {objectives.map((elem) => (
          <li key={elem.id}>
            <label>
              <input
                type="checkbox"
                checked={elem.completed}
                onClick={() => {
                  updateItem(elem.id, !elem.completed);
                }}
              />
              <strong
                style={{ fontFamily: "Medievalsharp Bold", color: "gray" }}
              >
                {elem.description}
              </strong>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Objectives;
