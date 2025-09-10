function Rewards({ rewards, levelRequiment }) {
  const reward = () => {
    return alert(`Requires a minimum level of ${levelRequiment}`);
  };
  return (
    <div>
      <button className="reward-container" onClick={reward}>
        Reward of {rewards.experience} experience and {rewards.gold} gold
      </button>
    </div>
  );
}

export default Rewards;
