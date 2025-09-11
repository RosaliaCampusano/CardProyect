import { Tooltip as ReactTooltip } from "react-tooltip";

function Rewards({ rewards, levelRequirement, isActive }) {
  const getEmoji = (item) => {
    if (item.isUnique) return "👑";
    switch (item.type) {
      case "sword":
      case "dagger":
      case "weapon":
        return "⚔️";
      case "armor":
      case "helm":
        return "🛡️";
      case "scroll":
        return "📜";
      case "consumable":
        return "🧪";
      case "artifact":
      case "amulet":
      case "quest_item":
        return "💎";
      default:
        return "🎁";
    }
  };

  return (
    <div className="rewards-container">
      <p>Level Requirement: {levelRequirement}</p>
      <p>Experience: {rewards.experience}</p>
      <p>Gold: {rewards.gold}</p>
      <div className="rewards-line">
        <span className="rewards-label" style={{ color: "gray" }}>
          Rewards:
        </span>
        <div className="reward-buttons">
          {rewards.items &&
            rewards.items.map((item) => (
              <button
                className="reward-btn"
                data-tooltip-id="buttonTooltip"
                data-tooltip-content={isActive ? item.name : ""}
              >
                {getEmoji(item)}
              </button>
            ))}
          <ReactTooltip
            id="buttonTooltip"
            style={{ fontFamily: "MedievalSharp Bold" }}
          ></ReactTooltip>
        </div>
      </div>
    </div>
  );
}

export default Rewards;
