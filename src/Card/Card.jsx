import Objectives from "./Objectives";
import Rewards from "./Rewards";
import Location from "./Location";
import cardTemplate from "../assets/card-template.png";
import { useState } from "react";

function Card(quest) {
  const [questState, setQuest] = useState(quest.quest.quest);
  console.log(questState);
  const {
    title,
    description,
    isActive,
    objectives,
    location,
    rewards,
    levelRequirement,
  } = questState;

  return (
    <div
      className="card"
      style={{
        filter: isActive ? "none" : "grayscale(100%) brightness(40%)",
        backgroundImage: `url(${cardTemplate})`,
      }}
    >
      <div
        className="card-content"
        onClick={() => {
          if (isActive) {
            return setQuest({ ...questState, isActive: false });
          } else {
            return setQuest({ ...questState, isActive: true });
          }
        }}
      >
        <h1>{title}</h1>
        <p>{description}</p>
        <Objectives objectives={objectives} setObjectives={setQuest} />
        <Rewards
          rewards={rewards}
          levelRequirement={levelRequirement}
          isActive={isActive}
        />
        <Location location={location} />
      </div>
    </div>
  );
}

export default Card;
