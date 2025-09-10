function Objectives({ objectives, location }) {
  return (
    <div className="objectives-container">
      <p>Objectives: </p>
      <ul style={{ padding: "10px", listStyleType: "none", margin: "0" }}>
        {objectives.map((elem) => (
          <li key={elem.id}>
            <label>
              <input type="checkbox" checked={elem.completed} disabled />
              {elem.description}
            </label>
          </li>
        ))}
      </ul>
      <Location location={location} />
    </div>
  );
}

function Location({ location }) {
  return (
    <div className="location-container">
      <p>
        {location.zone} {location.coordinates.x}, {location.coordinates.y}
      </p>
    </div>
  );
}

export default Objectives;
