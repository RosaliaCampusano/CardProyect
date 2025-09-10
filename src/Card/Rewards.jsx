function Rewards({ rewards, levelRequirement }) {
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

  ///// Event Onclick to show the name in a tooltip.

  return (
    <div className="rewards-container">
      <p>
        <strong>Level Requirement:</strong> {levelRequirement}
      </p>
      <p>
        <strong>Experience:</strong> {rewards.experience}
      </p>
      <p>
        <strong>Gold:</strong> {rewards.gold}
      </p>
      <div className="rewards-line">
        <span className="rewards-label">
          <strong>Rewards:</strong>
        </span>
        <div className="reward-buttons">
          {rewards.items &&
            rewards.items.map((item) => (
              <button className="reward-btn">{getEmoji(item)}</button>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Rewards;
