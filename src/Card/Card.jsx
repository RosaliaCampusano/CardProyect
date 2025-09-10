import Objectives from "./Objectives";
import Rewards from "./Rewards";

function Card(quest) {
  console.log(quest);
  const {
    title,
    description,
    isActive,
    objectives,
    location,
    rewards,
    levelRequirement,
  } = quest.quest.quest;

  const color = isActive ? "green" : "black";
  const colorLetter = isActive ? "black" : "red";

  return (
    <div
      style={{
        color: colorLetter,
        borderStyle: "inset",
        borderRadius: "10px",
        width: "500px",
        minHeight: "70vh",
        border: `10px solid ${color}`,
        margin: "20px",
      }}
    >
      <h1>{title}</h1>
      <p>{description}</p>
      <Objectives objectives={objectives} location={location} />
      <Rewards rewards={rewards} levelRequiment={levelRequirement} />
    </div>
  );
}

export default Card;
