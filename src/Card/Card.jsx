import Objectives from "./Objectives";
import Rewards from "./Rewards";
import cardTemplate from "../assets/card-template.png";

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

  return (
    <div
      className="card"
      style={{
        filter: isActive ? "none" : "grayscale(100%) brightness(40%)",
        backgroundImage: `url(${cardTemplate})`,
      }}
    >
      <div className="card-content-wrapper">
        <div className="card-content">
          <h1>{title}</h1>
          <p>{description}</p>
          <Objectives objectives={objectives} location={location} />
          <Rewards rewards={rewards} levelRequirement={levelRequirement} />
        </div>
      </div>
    </div>
  );
}

export default Card;
