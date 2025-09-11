function Location({ location }) {
  return (
    <div className="location-container">
      <h2>
        <strong style={{ color: "gray" }}> Location:</strong>
        <p style={{ color: "rgb(208,180,108)" }}>
          {location.zone} {location.coordinates.x}, {location.coordinates.y}
        </p>
      </h2>
    </div>
  );
}

export default Location;
