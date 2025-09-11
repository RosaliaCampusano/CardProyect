function Objectives({
  objectives,
  setObjectives,
  setInteractingWithObjectives,
  isActive,
}) {
  const updateItem = (itemId) => {
    setObjectives(
      objectives.map((elem) => {
        if (elem.id === itemId) {
          return { ...elem, completed: !elem.completed };
        } else {
          return elem;
        }
      })
    );
  };
  return (
    <div
      className="objectives-container"
      onMouseEnter={() => {
        setInteractingWithObjectives(true);
      }}
      onMouseLeave={() => {
        setInteractingWithObjectives(false);
      }}
    >
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
                onChange={() => {
                  isActive && updateItem(elem.id);
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
