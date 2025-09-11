import Objectives from "./Objectives";
import Rewards from "./Rewards";
import Location from "./Location";
import cardTemplate from "../assets/card-template.png";
import { useState } from "react";

function Card(quest) {
  const [questState, setQuest] = useState(quest.quest.quest);
  const [isInteractingWithObectives, setInteractingWithObjectives] =
    useState(false);
  const {
    title,
    description,
    isActive,
    objectives,
    location,
    rewards,
    levelRequirement,
  } = questState;

  const handlerClick = () => {
    if (!isInteractingWithObectives) {
      setQuest((quest) => ({
        ...quest,
        isActive: !isActive,
      }));
    }
  };

  const updateObjectives = (newObjectives) => {
    setQuest((quest) => ({
      ...quest,
      objectives: newObjectives,
    }));
  };

  return (
    <div
      className="card"
      style={{
        filter: isActive ? "none" : "grayscale(100%) brightness(40%)",
        backgroundImage: `url(${cardTemplate})`,
      }}
    >
      <div className="card-content" onClick={handlerClick}>
        <h1>{title}</h1>
        <p>{description}</p>
        <Objectives
          objectives={objectives}
          setObjectives={updateObjectives}
          setInteractingWithObjectives={setInteractingWithObjectives}
          isActive={isActive}
        />
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
