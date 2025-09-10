function Objectives({ objectives, location }) {
  const isCompleted = (item) => {
    if (!item.completed) {
      return alert(
        `The objective is found in ${location.zone}, they're coordinates are in ${location.coordinates.x}, ${location.coordinates.y}`
      );
    }
  };
  return (
    <div className="objectives-conainer">
      {objectives.map((item) => {
        return (
          <>
            <button className="obejectives-container" onClick={isCompleted}>
              <p className="objectives"> {item.description} </p>
            </button>
          </>
        );
      })}
    </div>
  );
}

export default Objectives;
